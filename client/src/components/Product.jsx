import React from "react";
import "./Product.css";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import Search from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/apiCalls";
import { showError, showMessage } from "../utils/notify";

const Product = ({ item }) => {
  const userId = useSelector((state) => state.user.currentUser._id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const title = item.title;
  const img = item.img;
  const price = item.price;
  const productId = item._id;
  const handleAddToCart = async () => {
    const product = { productId, quantity: 1, color: "blue", size: "M", title, img, price };
    const data = { userId, product };
    try {
      const res = await addToCart(data, dispatch);
      // if (res) {
      //   showMessage("Added to cart!");
      window.location.reload();
      // }
    } catch (err) {
      console.log(err)
      // showError("Something went wrong.Try again!");
    }
  }

  return (
    <div className="product__container">
      <div className="product__circle"></div>
      <img src={item.img} className="product__image" />
      <div className="product__info">
        <div className="product__icon">
          <ShoppingCartOutlined onClick={(item) => handleAddToCart(item)} />
        </div>
        <div className="product__icon">
          <Search onClick={() => navigate(`/product/${item._id}`)} />
        </div>
        <div className="product__icon">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;

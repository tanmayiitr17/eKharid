import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CartPage from "./pages/CartPage";
import Success from "./pages/Success";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer"; 
import ScrollToTop from "./utils/scrollToTop";

const App = () => {

  const user = useSelector((state) => state?.user?.currentUser);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {
          !user && (<>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>)
        }
      </Routes>
      {user && (
        <>
          <Announcement />
          <Navbar />
        </>
      )}
      {user && (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      )}
      {user && (
        <>
          <Newsletter />
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;

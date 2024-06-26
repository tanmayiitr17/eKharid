import React from 'react';
import './Categories.css'
import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Categories = () => {
  return (
    <div className='categories__container'>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Categories

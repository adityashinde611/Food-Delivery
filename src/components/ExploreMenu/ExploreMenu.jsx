import React from 'react';
import PropTypes from 'prop-types';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
        Indulge in a rich selection of dishes expertly crafted with premium ingredients and culinary mastery. Our goal is to tantalize your taste buds and enhance your dining journey with each delectable bite.
      </p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => (
          <div key={index} className='explore-menu-list-item' onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}>
            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;

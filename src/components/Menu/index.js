import React from 'react';

import "./Menu.scss";
import topProfile from "../../assets/img/top-profile.png";
import topSearch from "../../assets/img/top-search.png";
import topShoppingBag from "../../assets/img/top-shopping-bag.png";

const Menu = () => (
    <div id="header-menu-wrapper">
        <a className="header-menu-options" href="#page-header-wrapper">Home</a>
        <a className="header-menu-options" href="#food-menu-wrapper">Menu</a>
        <a className="header-menu-options" href="#gallery-wrapper">Gallery</a>
        <a className="header-menu-options" href="#testimonial-wrapper">Testimonials</a>
        <a className="header-menu-options" href="#">Contact Us</a>
        <div id="header-sub-menu-wrapper">
            <img src={topSearch}/>
            <img src={topProfile}/>
            <img src={topShoppingBag}/>
        </div>
    </div>
)

export default Menu;
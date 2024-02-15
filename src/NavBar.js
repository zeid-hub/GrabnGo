import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClipboardList, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/" className="home">
        <FontAwesomeIcon icon={faHome} className="icon" /> 
        <span className="text">Home</span>
      </NavLink>
      <NavLink to="/orders" className="orders">
        <FontAwesomeIcon icon={faClipboardList} className="icon" />
        <span className="text">Order</span>
      </NavLink>
      <NavLink to="/aboutus" className="about-us">
        <span className="text">About Us</span>
      </NavLink>
      <NavLink to="/cart" className="cart">
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        <span className="text">Cart</span>
      </NavLink>
    </div>
  );
}

export default NavBar;

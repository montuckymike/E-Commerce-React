import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  return(
    <div className="navbar">
          <ul className="navlinks">
             <li> <Link to="/">Home</Link> </li>
             <li> <Link to="my-about-page">About</Link> </li>
             <li> <Link to="my-shop-page">Shop</Link> </li>
             <li> <Link to="product-page">Products</Link> </li>
          </ul>
    </div>
  )
}

export default NavBar;

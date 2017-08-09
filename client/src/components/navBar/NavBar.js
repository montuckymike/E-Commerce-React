import React from "react";
import { Link } from "react-router-dom";


const NavBar = (props) => {
  return(
    <div className="navbar">
          <ul className="navlinks">
             <li> <Link to="/">Home</Link> </li>
             <li> <Link to="my-about-page">About</Link> </li>
             <li> <Link to="my-shop-page">Shop</Link> </li>
             <li> <Link to="product-page">Products</Link> </li>
              <div className="nav-cart">
                <li> <img src="http://www.freepngimg.com/thumb/cart/4-2-cart-png-clipart-thumb.png" /></li>
                <li> <p> {props.cartCount} </p> </li>
              </div>
          </ul>
    </div>
  )
}

export default NavBar;

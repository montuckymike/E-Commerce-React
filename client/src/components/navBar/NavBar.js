import React from "react";
import { Link } from "react-router-dom";


const NavBar = (props) => {
  return(
    <div className="navbar">
          <ul className="navlinks">
             <li> <Link to="/">Home</Link> </li>
             <li> <Link to="my-about-page">About</Link> </li>
             <li> <Link to="product-page">Products</Link> </li>
             <li> <Link to="profile"> User Profile</Link> </li>
              <div className="nav-cart">
                <li> <Link to="cart-page"><img src="http://www.freepngimg.com/thumb/cart/4-2-cart-png-clipart-thumb.png" /></Link></li>
                <li> <p> Items: #{props.cartCount} </p> </li>
                <li> <p>...</p></li>
                <li> <p> Total: ${props.totalPrice} </p> </li>
              </div>
          </ul>
    </div>
  )
}

export default NavBar;

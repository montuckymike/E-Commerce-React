import React, { Component } from 'react';
import { HomeContainer, AboutContainer, DataProvider } from "./containers";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Cart from "./components/cart/Cart";
import ProductList from "./components/product/ProductList";
import Profile from "./components/profile/Profile";
import './css/app/App.css';
import "./css/hero/Hero.css";
import "./css/cart/Cart.css";
import "./css/hero/ProductHero.css";
import "./css/hero/CartHero.css";
import "./css/hero/HomeHero.css";
import "./css/hero/AboutHero.css";
import "./css/hero/ShopHero.css";
import "./css/navBar/NavBar.css";
import "./css/product/Product.css";
import "./css/buttons/Buttons.css";

const Layout = (props) => (
  <div>
    <NavBar cartCount={ props.cart.length } totalPrice={props.totalPrice} />
    <div className="spacer"></div>
    <div>
      <Switch>
        <Route exact path="/" component={ HomeContainer } />
        <Route path="/my-about-page" component={ AboutContainer } />
        <Route path="/my-shop-page" component={ DataProvider } />
        <Route
          path="/product-page"
          render={() =>
            <ProductList
              products={ props.products }
              addToCart={ props.addToCart }
              />
            }
          />
        <Route path="/cart-page" render={() => <Cart cart={ props.cart } totalPrice={props.totalPrice} />} />
        <Route path="/profile" render={() => <Profile user={ props.user } /> } />
      </Switch>
    </div>
  </div>
);

export default Layout

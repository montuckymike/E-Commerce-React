import React, { Component } from 'react';
import { HomeContainer, AboutContainer, ShopContainer } from "./containers";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import ProductList from "./components/product/ProductList";
import faker from "faker";
import './css/app/App.css';
import "./css/hero/Hero.css";
import "./css/hero/ProductHero.css";
import "./css/hero/HomeHero.css";
import "./css/hero/AboutHero.css";
import "./css/hero/ShopHero.css";
import "./css/navBar/NavBar.css";
import "./css/product/Product.css";
import "./css/buttons/Buttons.css";

class Layout extends Component {
  render() {
    return (
      <div>
        <NavBar cartCount={ this.props.cart.length } />
        <div className="spacer"></div>
        <div>
          <Switch>
            <Route exact path="/" component={ HomeContainer } />
            <Route path="/my-about-page" component={ AboutContainer } />
            <Route path="/my-shop-page" component={ ShopContainer } />
            <Route path="/product-page" render={() => <ProductList products={ this.props.products } addToCart={ this.props.addToCart }/> } />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Layout

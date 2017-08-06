import React, { Component } from 'react';
import { HomeContainer, AboutContainer, ShopContainer, ProductContainer } from "./containers";
import {NavBar} from "./components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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

class App extends Component {
  render() {
    return (
    <div>
      <Router>
        <div>
          <NavBar />
              <div className="spacer"></div>
            <div>
              <Route exact path="/" component={ HomeContainer } />
              <Route path="/my-about-page" component={ AboutContainer } />
              <Route path="/my-shop-page" component={ ShopContainer } />
              <Route path="/product-page" component={ ProductContainer } />
            </div>
        </div>
      </Router>

    </div>
    );
  }
}

export default App;

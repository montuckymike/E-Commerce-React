import React, { Component } from 'react';
import { ProductContainer } from "./containers";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <ProductContainer />
      </Router>

    );
  }
}

export default App;

import React from "react";
import { ProductList } from "../../components";
import faker from "faker";
class ProductContainer extends React.Component{
  state = {
    productsArray: undefined,

  }

  componentDidMount(){
    let tempProducts = [];
    for (var i = 0; i < 25; i++) {
      let prod = {
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        img: faker.image.image(),
        department: faker.commerce.department(),
        id: i
      }
      tempProducts.push(prod)
    }
    this.setState({productsArray: tempProducts })
  }

  render(){
    return (
      <div>
      {
        this.state.productsArray
        ? <ProductList products={ this.state.productsArray } />
        : <h1> Loading Products </h1>
      }
      </div>
    )
  }
}

export default ProductContainer

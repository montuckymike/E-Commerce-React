import React from "react";
import Layout from "../../Layout";
import faker from "faker";
class DataProvider extends React.Component{
  state = {
    productsArray: undefined,
    cart: [],
    user: null,
    isDataLoaded: false,
  }

  componentDidMount(){
    let tempProducts = [];
    for (var i = 0; i < 50; i++) {
      let prod = {
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        img: faker.image.image(),
        department: faker.commerce.department(),
        id: i
      }
      tempProducts.push(prod)
    }
    this.setState({
      productsArray: tempProducts,
      user: this.createUser(),
      isDataLoaded: true,
    })

  }

  addToCart = (product) => {
    const tempCart = this.state.cart;
    tempCart.push(product);
    this.setState({ cart: tempCart });
    alert(`${product.name} was added to cart`)
  }

  createUser = () => {
    const user = {
      fName: faker.name.firstName(),
      lName: faker.name.lastName(),
      email: faker.internet.email(),
      avatar: faker.internet.avatar()
    }
    return user;
  }


  render(){
    let totalPrice = 0;
    for(let i=0; i < this.state.cart.length; i++){
      totalPrice += parseFloat(this.state.cart[i].price);
    }

    //let totalPrice = 0;
    //this.state.cart.forEach((element, i) => totalPrice += parseFloat(element.price))

    //const totalPrice = this.state.cart.reduce( (total, e) => total + e.price, 0 )

    return (
      <div>
      {
        this.state.isDataLoaded?
        <Layout
          products={ this.state.productsArray }
          addToCart={ this.addToCart }
          cart={ this.state.cart }
          totalPrice={totalPrice.toFixed(2)}
          user={this.state.user}
         />
        : <h1> Loading ... </h1>
      }
      </div>
    )
  }
}

export default DataProvider

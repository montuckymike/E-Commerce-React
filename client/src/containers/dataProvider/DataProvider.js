import React, {Component} from "react";
import Layout from "../../Layout";
import faker from "faker";

class DataProvider extends Component{
  state = {
    productsArray: undefined,
    cart: [],
    user: null,
    isDataLoaded: false,
    product: {
      name: undefined,
      price: undefined,
      image: undefined,
    }
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
      avatar: faker.internet.avatar(),
      phone: faker.phone.phoneNumber(),
    }
    return user;
  }

  onChange = (type, value) => {
    const newProduct = this.state.product
    newProduct[type] = value
    this.setState( { product: newProduct })
    console.log(this.state.product)
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
          onChange={ this.onChange }
         />
        : <h1> Loading ... </h1>
      }
      </div>
    )
  }
}

export default DataProvider

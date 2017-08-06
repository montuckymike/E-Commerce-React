import React from "react"
import { Shop } from "../../components"

class ShopContainer extends React.Component{

  state={
    title: undefined
  }

  componentDidMount(){
    this.setTitle();
  }


  setTitle = () => {
    setTimeout(() => {
      this.setState({ title: "Shop:  till you drop" })
    }, 0)
  }

  // fetchProductsFromServer = () => {
  //   const temporaryArray = [];
  //   for(var i=0; i<20; i++){
  //     temporaryArray.push({
  //       productName: faker.commerce.productName(),
  //       price: faker.commerce.price(),
  //       department: faker.commerce.department(),
  //     })
  //   }
  //   this.setState({ products: temporaryArray })
  // }
  //
  // updateProductName = (event) => this.setState({productName: event.target.value})
  // updatePrice = (event) => this.setState({price: event.target.value})
  // updateDepartment = (event) => this.setState({department: event.target.value})
  //
  // handleForSubmit = (event) => {
  //   event.preventDefault()
  //   const product = {
  //     productName: this.state.productName,
  //     price: this.state.department,
  //     department: this.state.price,
  //   }
  //   let products = this.state.products
  //   products.push(product)
  //   console.log("products ", products)
  //   this.setState({products})
  // }



  render(){
    return(
      <div>
        {
          this.state.title
          ? <Shop title={ this.state.title }/>
          : <h1> No state yet </h1>
        }
      </div>
    )
  }
}

export default ShopContainer

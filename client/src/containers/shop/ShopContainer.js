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
      this.setState({ title: "Shop: tres" })
    }, 3000)
  }
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

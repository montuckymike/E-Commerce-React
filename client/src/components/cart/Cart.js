import  React from "react"
import CartHero from "./CartHero";
import CartTile from "./CartTile"


const Cart = (props) => {
  console.log(props)
  return(
    <div>
      <CartHero />

      <div className="cart-total">
        <h1> Cart total: ${props.totalPrice} </h1>
      </div>

      <div className="cart-container">
      {
        props.cart.map((item, index) =>   <CartTile item={ item } key={index} />)
      }
      </div>

    </div>
  )
}



export default Cart

import React from "react"

const CartTile = (props) => {
  return(

    <div className="product-container">
      <div className="product-item">
        <div className="thumbnail">
          <img src={ props.item.img } />
            <div className="product-title">
              <h3> { props.item.name } </h3>
            </div>
              <p> <strong> Price: ${ props.item.price } </strong> </p>
              <p><em> Category: { props.item.department } </em></p>
          </div>
      </div>
    </div>

  )

}

export default CartTile

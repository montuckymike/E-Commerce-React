import React, {Component} from "react";
import {render} from "react-dom";
import Random from "react-random";
import faker from "faker";

const Product = (props) => {

  return(
    <div className="product-container">
      <div className="product-item">
        <div className="thumbnail">
          <img src={ props.product.img } />
            <div className="product-title">
              <h3> { props.product.name } </h3>
            </div>
              <p> <strong> Price: ${ props.product.price } </strong> </p>
              <p><em> Category: { props.product.department } </em></p>
              <button onClick={() => props.addToCart(props.product)} > Add to Cart </button>
        </div>
      </div>
    </div>
  )
}




export default Product

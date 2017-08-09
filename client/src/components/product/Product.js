import React, {Component} from "react";
import {render} from "react-dom";
import Random from "react-random";
import faker from "faker";

const Product = () => {

  return(
    <div className="product-container">
      <div className="product-item">
        <div className="thumbnail">
          <img src={ faker.image.image() } />
            <div className="product-title">
              <h3> <Random value="commerce.productName" /> </h3>
            </div>
              <p> <strong> Price: $<Random value="commerce.price"/> </strong> </p>
              <p><em> Category: <Random value="commerce.department" /> </em></p>

        </div>
      </div>
    </div>
  )
}




export default Product

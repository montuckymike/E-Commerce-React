import React from "react"
import faker from "faker";

const Product = () => {

  return(
    <div className="product-container">
      <div className="product-item">
        <div className="thumbnail">
          <img src="https://ep1.pinkbike.org/p5pb13296567/p5pb13296567.jpg" />
            <div className="product-title">
              <h3> {faker.commerce.productName()} </h3>
            </div>
              <p> <strong> Price: $4.00  </strong> </p>
              <p><em> Category: bike comps </em></p>

        </div>
      </div>
    </div>
  )
}




export default Product

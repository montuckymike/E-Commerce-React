import React from "react";
import Product from "./Product";
import ProductHero from "./ProductHero";
import faker from "faker";

// function ProductMultiplier(){
//   for(var i=0; i < 20; i++){
//     return(
//       <Product />
//     )
//   }
// }

const ProductList = (props) => {
  return (
    <div>
      <ProductHero />
      <div className="product-container">
        {
          props.products.map((item) =>
          <Product product={ item } />
        )
        }
      </div>
    </div>
  )
}

export default ProductList

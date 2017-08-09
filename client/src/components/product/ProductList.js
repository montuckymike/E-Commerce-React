import React from "react";
import Product from "./Product";
import ProductHero from "./ProductHero";
import faker from "faker";



const ProductList = (props) => {
  return (
    <div>
      <ProductHero />
      <div className="product-container">
        {
          props.products.map((item) =>
            <Product
              product={ item }
              addToCart={ props.addToCart }
            />
          )
        }
      </div>
    </div>
  )
}

export default ProductList

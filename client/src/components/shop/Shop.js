import React from "react";
import ShopHero from "./ShopHero";

const Shop = (props) => {
  return(
    <div>
      <ShopHero />
      <h1> { props.title } </h1>
    </div>
  )
}

export default Shop;

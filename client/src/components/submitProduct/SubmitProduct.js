import React from "react";
import SubmitProductHero from "./SubmitProductHero";

const SubmitProduct = (props) => {
  return(
    <div>
      <SubmitProductHero />
      <div className='submit-product-container'>
        <h1> Create New Products for Store </h1>
        <form className="product-submit" onSubmit ={props.submitProduct}>
          <label> Product Name </label>
            <input
              type="text"
              onChange={ (event) =>
              props.onChange('name', event.target.value)
                }
             />
          <label> Product Price </label>
            <input
              type="number"
              onChange={ (event) =>
              props.onChange('price', event.target.value)
                }
             />
          <label> Product Image </label>
            <input
              type="text"
              onChange={ (event) =>
              props.onChange('image', event.target.value)
              }
             />
             <button type='submit'>Create New Product</button>
          </form>
        </div>
    </div>
  )
}

export default SubmitProduct;

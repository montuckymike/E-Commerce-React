import React from "react";

const CategoryDropdown = (props) => {
  return (
    <div className="category-dropdown">
      <select onChange={props.onCategorySelected} >
        <option value={"none"} defaultValue="none">Select Category</option>
        {
          props.categories.map((category, index) => <option value={category} key={index}>{ category }</option>)
        }
      </select>
    </div>
  )
}

export default CategoryDropdown

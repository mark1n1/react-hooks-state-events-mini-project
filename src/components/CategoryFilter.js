import React, { useState } from "react";

function CategoryFilter({ categories, handleSelectedCategory }) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      { categories.map((category, index) => (
        <button key={index} className="" onClick={ handleSelectedCategory } value={ category }>{ category }</button>
      )) }
    </div>
  );
}

export default CategoryFilter;

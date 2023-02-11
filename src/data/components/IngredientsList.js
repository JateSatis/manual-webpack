import React from "react";
import Ingredient from "./Ingredient.js";

const IngredientsList = ({ ingredients }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <Ingredient key={index} {...ingredient} />
      ))}
    </ul>
  );
};

export default IngredientsList;

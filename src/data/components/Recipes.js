import React from "react";
import IngredientsList from "./IngredientsList.js";
import Instructions from "./Instructions.js";

const Recipes = ({ name, ingredients, steps }) => {
  return (
    <section>
      <h1>{name}</h1>
      <IngredientsList ingredients={ingredients} />
      <Instructions steps={steps} />
    </section>
  );
};

export default Recipes;

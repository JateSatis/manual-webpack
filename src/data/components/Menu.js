import React from "react";
import Recipes from "./Recipes.js";

const Menu = ({ data = [] }) => {
  return (
    <main>
      {data.map((recipe, index) => (
        <Recipes key={index} {...recipe} />
      ))}
    </main>
  );
};

export default Menu;

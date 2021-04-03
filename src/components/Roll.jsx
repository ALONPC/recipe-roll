import axios from "axios";
import { Button, Pane } from "evergreen-ui";
import React, { useState } from "react";
import { Loading } from "./Loading";
import { Recipe } from "./Recipe";

export const Roll = ({ ingredients, disabled }) => {
  console.log("🚀 ~ file: Roll.jsx ~ line 7 ~ Roll ~ disabled", disabled);
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const formattedIngredients = ingredients.join(",+");
  console.log(
    "🚀 ~ file: Roll.jsx ~ line 11 ~ Roll ~ formattedIngredients",
    formattedIngredients
  );

  const apiKey = "3a4db45baa5b4a6d9c17416b7bcb7ba4";
  const roll = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${formattedIngredients}`
    );
    if (res.data) {
      console.log("data", res.data);
      setRecipes(res.data);
      setLoading(false);
    }
  };

  return (
    <Pane
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Button
        isLoading={loading}
        height={56}
        appearance="primary"
        intent="success"
        onClick={roll}
        disabled={disabled}
      >
        ROLL!
      </Button>
      {!!recipes && !!recipes.length && (
        <Recipe
          recipe={
            recipes[0]
            // Math.floor(Math.random() * recipes.length - 1) + 1
          }
        ></Recipe>
      )}
      {!recipes.length && loading && <Loading></Loading>}
    </Pane>
  );
};

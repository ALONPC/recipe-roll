import { Button, majorScale, Pane } from "evergreen-ui";
import React, { useEffect, useState } from "react";
import { Roll } from "./Roll";

const ingredients = [
  "chicken",
  "tomato",
  "pasta",
  "eggs",
  "meat",
  "potatoes",
  "avocado",
  "rice",
];

export const Ingredients = () => {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    console.log(
      "🚀 ~ file: Ingredients.jsx ~ line 23 ~ Ingredients ~ selected",
      selected
    );
    if (selected.length >= 5) {
      console.log("Can't select more than 5 ingredients!");
    }
  }, [selected]);

  const toggleSelectedItems = ({ target: { value } }) => {
    selected.includes(value)
      ? setSelected(selected.filter((ing) => ing !== value))
      : setSelected([...selected, value]);
  };

  return (
    <>
      <Pane
        height={120}
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {ingredients.map((ingredient) => (
          <Button
            appearance="primary"
            intent={selected.includes(ingredient) ? "success" : "none"}
            marginRight={16}
            height={majorScale(5)}
            value={ingredient}
            onClick={toggleSelectedItems}
          >
            {ingredient}
          </Button>
        ))}
      </Pane>

      <Pane>
        <Roll disabled={!selected.length} ingredients={selected}></Roll>
      </Pane>
    </>
  );
};

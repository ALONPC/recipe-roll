import { Heading, Pane, ThumbsUpIcon } from "evergreen-ui";
import React from "react";

export const Recipe = ({ recipe }) => {
  console.log("🚀 ~ file: Recipe.jsx ~ line 4 ~ Recipe ~ recipe", recipe);

  const { title, image, likes } = recipe || {};
  return (
    <Pane
      height={600}
      width={1024}
      flex={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding={10}
      border="default"
    >
      <img src={image} alt={title}></img>
      <Pane
        display="flex"
        flexDirection="column"
        // alignItems="center"
        justifyContent="center"
        padding={10}
        border="default"
      >
        <Heading size={700}>{title}</Heading>
        <Pane
          display="flex"
          justifyContent="flex-end"
          margin={20}
          border="default"
        >
          <ThumbsUpIcon
            color="success"
            size={30}
            marginRight={10}
          ></ThumbsUpIcon>
          <Heading size={700} color="#47B881">
            {likes}
          </Heading>
        </Pane>
      </Pane>
    </Pane>
  );
};

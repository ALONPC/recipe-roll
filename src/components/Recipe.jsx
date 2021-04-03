import {
  CrossIcon,
  GlassIcon,
  Heading,
  ListItem,
  Pane,
  ThumbsUpIcon,
  TickIcon,
  toaster,
  UnorderedList,
} from "evergreen-ui";
import React, { useEffect } from "react";

export const Recipe = ({ recipe }) => {
  console.log("🚀 ~ file: Recipe.jsx ~ line 4 ~ Recipe ~ recipe", recipe);
  const {
    title,
    image,
    likes,
    usedIngredientCount = 0,
    missedIngredientCount = 0,
    usedIngredients = [],
    missedIngredients = [],
  } = recipe || {};

  useEffect(() => {
    toaster.closeAll();
    if (usedIngredientCount > missedIngredientCount) {
      toaster.success("You have the core ingredients, let's cook!");
    } else {
      toaster.warning(
        "Seems you don't have all the necessary ingredients. Try again with different ingredients"
      );
    }
  }, [usedIngredientCount, missedIngredientCount]);

  return (
    <Pane
      // height={600}
      // width={1024}
      flex={1}
      display="flex"
      // flexDirection="column"
      // alignItems="center"
      // justifyContent="center"
      margin={32}
      border="muted"
      background="yellowTint"
    >
      <Pane
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        margin={32}
        width="60%"
        // border="default"
      >
        <Heading size={700} style={{ width: 400 }}>
          {title}
        </Heading>
        <Pane display="flex" margin={16}>
          {!!usedIngredientCount && (
            <>
              <GlassIcon color="success" marginLeft={16}></GlassIcon>
              <Heading>{usedIngredientCount + missedIngredientCount}</Heading>
            </>
          )}
          {!!likes && (
            <>
              <ThumbsUpIcon
                color="success"
                // size={30}
                marginLeft={16}
              ></ThumbsUpIcon>
              <Heading>{likes}</Heading>
            </>
          )}
        </Pane>
        <img style={{ width: 300 }} src={image} alt={title}></img>
      </Pane>
      <Pane display="flex" width="40%" margin={32}>
        <Pane flexDirection="column">
          <Heading size={600}>You'll need:</Heading>
          <UnorderedList icon={TickIcon} iconColor="success" marginTop={16}>
            {usedIngredients.map((ingredient) => {
              return (
                <ListItem>
                  <Heading>
                    {ingredient.name || ingredient.extendedName}
                  </Heading>
                </ListItem>
              );
            })}
          </UnorderedList>
          <UnorderedList icon={CrossIcon} iconColor="danger" marginTop={16}>
            {missedIngredients.map((ingredient) => {
              return (
                <ListItem>
                  <Heading>
                    {ingredient.name || ingredient.extendedName}
                  </Heading>
                </ListItem>
              );
            })}
          </UnorderedList>
        </Pane>
      </Pane>
    </Pane>
  );
};

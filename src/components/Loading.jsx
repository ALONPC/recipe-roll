import { Pane, Spinner } from "evergreen-ui";
import React from "react";

export const Loading = () => {
  return (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={400}
    >
      <Spinner />
    </Pane>
  );
};

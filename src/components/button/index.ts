import React from "react";
import Button from "./Button";

export type TButtonPropTypes = {
  type: string;
  onClick: (event: React.MouseEvent) => void;
  cardId: string;
};

export default Button;

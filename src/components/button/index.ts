import React from "react";
import { Button } from "./Button";

export type TButtonPropTypes = {
  type?: string;
  onClick: (event: React.MouseEvent) => void;
  cardId?: string;
  children?: React.ReactChild;
  className?: string;
};

export default Button;

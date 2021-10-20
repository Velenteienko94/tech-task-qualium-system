import React from "react";
import { Button } from "./Button";

export interface IButtonPropTypes
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  onClick: (event: React.MouseEvent) => void;
  cardId?: string;
  children?: React.ReactChild;
  className?: string;
}

export default Button;

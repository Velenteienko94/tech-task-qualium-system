import React from "react";
import { Card } from "./Card";

// export type TCardInfo = {
//   id: number;
//   title: string;
//   price: string;
//   description: string;
// };

export type TCardPropsTypes = {
  id: number;
  title: string;
  price: string;
  description: string;
  onEdit: (event: React.MouseEvent) => void;
  onDelete: (event: React.MouseEvent) => void;
  onAddToCArt: (event: React.MouseEvent) => void;
};

export default Card;

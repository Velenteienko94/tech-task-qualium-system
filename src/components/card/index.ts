import React from "react";
import Card from "./Card";

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
  // onEdit: () => void;
  // onDelete: () => void;
  onAddToCArt: (event: React.MouseEvent) => void;
};

export default Card;

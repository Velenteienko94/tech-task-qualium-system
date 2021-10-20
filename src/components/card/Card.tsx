import React from "react";
import { TCardPropsTypes } from ".";

import "./styles.scss";

export const Card: React.FC<TCardPropsTypes> = ({
  children,
  id,
  title,
  price,
  description,
}) => {
  return (
    <div id={id.toString()} className="card-container">
      <h1 className="card-title">{title}</h1>
      <p className="card-price">{`${price}$`}</p>
      <p>{description}</p>
      {children}
    </div>
  );
};

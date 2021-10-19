import { TCardPropsTypes } from ".";
import Button from "../button";

import "./styles.scss";

export const Card = ({
  title,
  price,
  description,
  id,
  onAddToCArt,
  onEdit,
  onDelete,
}: TCardPropsTypes) => {
  return (
    <div id={id.toString()} className="card-container">
      <h1 className="card-title">{title}</h1>
      <p className="card-price">{`${price}$`}</p>
      <p>{description}</p>
      <Button onClick={onEdit} type="edit" />
      <Button cardId={id.toString()} onClick={onAddToCArt} type="AddToCard" />
      <Button onClick={onDelete} type="delete" />
    </div>
  );
};

import { IButtonPropTypes } from ".";

import "./styles.scss";

export const Button = ({
  text,
  onClick,
  cardId,
  disabled,
  children,
}: IButtonPropTypes) => {
  const chooseButtonText = () => {
    if (text === "edit") {
      return "Edit";
    }
    if (text === "delete") {
      return "Delete";
    }
    if (text === "AddToCard") {
      return "Add to cart";
    }
    if (text === "save") {
      return "Save";
    }
    if (text === "create") {
      return "Create";
    }
    return "";
  };
  const btnText = chooseButtonText();
  return (
    <button
      disabled={disabled}
      id={cardId}
      className={`btton button_${text}`}
      onClick={onClick}
    >
      {btnText || children}
    </button>
  );
};

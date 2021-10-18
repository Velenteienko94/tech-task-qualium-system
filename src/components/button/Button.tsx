import { TButtonPropTypes } from ".";
import "./styles.scss";
const Button = ({ type, onClick, cardId }: TButtonPropTypes) => {
  const chooseButtonText = () => {
    if (type === "edit") {
      return "Edit";
    }
    if (type === "delete") {
      return "Delete";
    }
    if (type === "AddToCard") {
      return "Add to cart";
    }
    if (type === "save") {
      return "Save";
    }
    if (type === "create") {
      return "Create";
    }
    return "Click me";
  };
  const btnText = chooseButtonText();
  return (
    <button id={cardId} className={`btton button_${type}`} onClick={onClick}>
      {btnText}
    </button>
  );
};

export default Button;

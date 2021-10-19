import { useContext } from "react";
import { EditContext } from "../../providers/edit-provider";
import "./styles.scss";

export const EditView = () => {
  const { editValue } = useContext(EditContext) as any;
  return (
    <div>
      <h1>Edit Card</h1>
      <form>
        <fieldset>
          <label>
            Title
            <input type="text" value={editValue.title}></input>
          </label>
        </fieldset>
        <fieldset>
          <label>
            Price
            <input type="text" value={editValue.price}></input>
          </label>
        </fieldset>
        <fieldset>
          <label>
            Description
            <input type="text" value={editValue.description}></input>
          </label>
        </fieldset>
      </form>
    </div>
  );
};

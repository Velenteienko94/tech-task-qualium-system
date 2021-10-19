// import { useState } from "react";
import "./styles.scss";

export const CreateView = () => {
  // const  [formData, setFormData] = useState({})
  // create reactive input fields for storing data from inputs, on submit create a post request to save data.
  // onTitleChange = () => {

  // }
  // onPriceChange = () => {

  // }
  // onDescriptionChange = () => {

  // }
  // const onSumbit () => {
  //   fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: {
  //       id: Math.max(Math.floor(Math.random()) * 1000, 36),
  //       description: formData.description,
  //       price: formData.price,
  //       title: formData.price
  //     }
  //   })
  // }
  return (
    <div>
      <h1>Hello im Create page</h1>
      {/* <form onSubmit={}>
        <fieldset>
          <label>
            Title
            <input type="text" onChange={onTitleChange} value={formData.title}></input>
          </label>
        </fieldset>
        <fieldset>
          <label>
            Price
            <input type="text" onChange={onPriceChange} value={formData.price}></input>
          </label>
        </fieldset>
        <fieldset>
          <label>
            Description
            <input type="text" onChange={onDescriptionChange} value={formData.description}></input>
          </label>
        </fieldset>
        <button type="submit">save</button>
      </form> */}
    </div>
  );
};

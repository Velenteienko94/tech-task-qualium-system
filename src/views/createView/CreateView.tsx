import React, { useState } from "react";
import { useHistory } from "react-router";

import "./styles.scss";

export const CreateView = () => {
  // const initialFormValues = {
  //   fieldValues: {
  //     title: "",
  //     price: "",
  //     description: "",
  //     inCart: false,
  //   },
  //   validationRules: {
  //     title: title.length > 0,
  //     price: price.length > 0,
  //     description: description.length > 0,
  //   },
  //   errors: {
  //     error: "field can`t be empty",
  //   },
  //   handlers: {
  //     onTitleChange: (ev: React.ChangeEvent) => {},
  //     onPriceChange: (ev: React.ChangeEvent) => {},
  //     onDescriptionChange: (ev: React.ChangeEvent) => {},
  //     onSumbit: (ev: React.ChangeEvent) => {},
  //   },
  // };
  const [title, setTitle] = useState("");

  const [price, setPrice] = useState("");

  const [description, setDescription] = useState("");

  const history = useHistory();

  const onTitleChange = (ev: React.FormEvent<HTMLInputElement>) => {
    const target = ev.target as HTMLInputElement;
    setTitle(target.value);
  };
  const onPriceChange = (ev: React.FormEvent<HTMLInputElement>) => {
    const target = ev.target as HTMLInputElement;
    setPrice(target.value);
  };

  const onDescriptionChange = (ev: React.FormEvent<HTMLInputElement>) => {
    const target = ev.target as HTMLInputElement;
    setDescription(target.value);
  };

  const onSumbit = () => {
    const submit = async () => {
      fetch(`http://localhost:8000/products/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Math.max(Math.floor(Math.random()) * 1000, 36)
            .toString()
            .concat(description[Math.floor(Math.random()) * 10]),
          title: title,
          description: description,
          price: parseInt(price),
          inCart: false,
        }),
      });
    };
    submit();
    history.push("./main");
  };
  return (
    <div>
      <h1>Hello im Create page</h1>
      <form onSubmit={onSumbit}>
        <fieldset>
          <label>
            Title
            <input
              name="titleField"
              type="text"
              onChange={onTitleChange}
              value={title}
            ></input>
          </label>
        </fieldset>
        <fieldset>
          <label>
            Price
            <input
              name="priceField"
              type="text"
              onChange={onPriceChange}
              value={price}
            ></input>
          </label>
        </fieldset>
        <fieldset>
          <label>
            Description
            <input
              name="descriprionField"
              type="text"
              onChange={onDescriptionChange}
              value={description}
            ></input>
          </label>
        </fieldset>
        <button type="submit">save</button>
      </form>
    </div>
  );
};

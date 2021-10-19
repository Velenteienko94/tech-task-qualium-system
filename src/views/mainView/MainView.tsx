import React, { useContext } from "react";
import { useHistory } from "react-router";
import Button from "../../components/button";
import Card from "../../components/card";
import Filter from "../../components/filter";
import Navbar from "../../components/navbar";
import Pagination from "../../components/pagination";
import { useFetch } from "../../hooks";
import { CartContext } from "../../providers/cart-provider";
import { EditContext } from "../../providers/edit-provider";
import { FilterContext } from "../../providers/filter-provider";

import "./styles.scss";

export const MainView = () => {
  const { filterValue, paginationValue } = useContext(FilterContext);

  const { addItemToCart } = useContext(CartContext);

  const { setEditValue } = useContext(EditContext);

  const history = useHistory();

  const data = useFetch({ title: filterValue, start: paginationValue });

  const onAddToCArt = (ev: React.MouseEvent) => {
    ev.preventDefault();
    const target = ev.target as Element;
    const itemToAdd = data.find((item) => item.id === parseInt(target.id));
    itemToAdd && addItemToCart(itemToAdd);
  };

  const onCreate = (ev: React.MouseEvent) => {
    ev.preventDefault();
    history.push("/create");
  };

  const onEdit = (ev: React.MouseEvent) => {
    ev.preventDefault();
    const target = ev.target as Element;
    const itemId = target.parentElement?.id;
    const eddittingElement = async () => {
      await fetch(`http://localhost:8000/products?id=${itemId}`)
        .then((resp) => resp.json())
        .then((resp) => setEditValue(resp[0]));
    };
    eddittingElement();
    history.push("/edit");
  };

  const onDelete = (ev: React.MouseEvent) => {
    ev.preventDefault();
    const target = ev.target as Element;
    const itemId = target.parentElement?.id;
    const deleteItem = async () => {
      await fetch(`http://localhost:8000/products/${itemId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    };
    deleteItem();
    //to delete element from page
    // data.sort((item) => item.id !== itemId));
  };

  return (
    <div>
      <Navbar>
        <Filter />
        <Button type="create" onClick={onCreate} />
      </Navbar>
      {data.map((productItem) => (
        <Card
          key={Math.floor(Math.random())}
          id={productItem.id}
          title={productItem.title}
          description={productItem.description}
          price={productItem.price}
          onEdit={onEdit}
          onAddToCArt={onAddToCArt}
          onDelete={onDelete}
        />
      ))}
      <Pagination />
    </div>
  );
};

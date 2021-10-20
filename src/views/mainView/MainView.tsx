import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Button from "../../components/button";
import Card from "../../components/card";
import Filter from "../../components/filter";
import Navbar from "../../components/navbar";
import Pagination from "../../components/pagination";
import { useFetch } from "../../hooks";
import { PaginationContext } from "../../providers/pagination-provider";
import { EditContext } from "../../providers/edit-provider";
import { FilterContext } from "../../providers/filter-provider";

import "./styles.scss";
import { TResponseItem } from "../../hooks/FetchHook";

export const MainView = () => {
  const [viewData, setViewData] = useState<TResponseItem[]>([]);

  const { filterValue } = useContext(FilterContext);

  const { paginationValue } = useContext(PaginationContext);

  const { setEditValue } = useContext(EditContext);

  const history = useHistory();

  const searchQuery = filterValue
    ? { title: filterValue, start: "0" }
    : { title: filterValue, start: paginationValue };

  const data = useFetch(searchQuery);

  useEffect(() => {
    setViewData(data);
  }, [viewData, data]);

  const onAddToCArt = (ev: React.MouseEvent) => {
    ev.preventDefault();
    const target = ev.target as Element;
    const itemId = target.parentElement?.id;
    // add to cart on view page

    const addedToCartIndexItem = viewData.findIndex((el) => el.id === itemId);
    const itemToAdd = viewData[addedToCartIndexItem];
    itemToAdd.inCart = true;
    setViewData((prevState) => [...prevState, itemToAdd]);

    // change cart status on db

    const changeCartStatus = async () => {
      await fetch(`http://localhost:8000/products/${itemId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inCart: "true" }),
      });
    };
    changeCartStatus();

    // add to cart on db

    const addToCartArray = async () => {
      await fetch(`http://localhost:8000/cart/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: itemToAdd.id,
          title: itemToAdd.title,
          description: itemToAdd.description,
          price: itemToAdd.price,
          quantity: 1,
        }),
      });
    };
    addToCartArray();
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
    const deleteItemId = target.parentElement?.id;
    // delete item from view page
    const deleteIndexItem = viewData.findIndex((el) => el.id === deleteItemId);
    setViewData(viewData.splice(deleteIndexItem, 1));

    // delete item from db

    // const deleteItem = async () => {
    //   await fetch(`http://localhost:8000/products/${deleteItemId}`, {
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    // };
    // deleteItem();
  };

  return (
    <div>
      <Navbar>
        <Filter />
        <Button text="create" onClick={onCreate} />
      </Navbar>
      {viewData.map((productItem, idx) => (
        <Card
          key={Math.floor(Math.random() * idx * 1000 + 1)
            .toString()
            .concat(productItem.id)}
          id={productItem.id}
          title={productItem.title}
          description={productItem.description}
          price={productItem.price}
        >
          <Button onClick={onEdit} text="edit" />
          <Button
            disabled={productItem.inCart}
            onClick={onAddToCArt}
            text="AddToCard"
          />
          <Button onClick={onDelete} text="delete" />
        </Card>
      ))}
      <Pagination />
    </div>
  );
};

import React, { useContext } from "react";
import { Card, Filter } from "../../components";
import { useFetch } from "../../hooks";
import { CartContext } from "../../providers/cart-provider";
import { FilterContext } from "../../providers/filter-provider";

import "./styles.scss";

const MainView = () => {
  const { filterValue } = useContext(FilterContext);

  const { addItemToCart, items } = useContext(CartContext);

  const searchQuery = filterValue
    ? { query: { key: "title", value: filterValue } }
    : { pageNumber: 1 };
  const data = useFetch(searchQuery);
  const onAddToCArt = (ev: React.MouseEvent) => {
    ev.preventDefault();
    const target = ev.target as Element;
    const itemToAdd = data.find((item) => item.id === parseInt(target.id));
    itemToAdd && addItemToCart(itemToAdd);
  };
  console.log(items);
  return (
    <div>
      <Filter />
      {data.map((productItem) => (
        <Card
          id={productItem.id}
          title={productItem.title}
          description={productItem.description}
          price={productItem.price}
          // onEdit={() => {}}
          onAddToCArt={onAddToCArt}
          // onDelete={() => {}}
        />
      ))}
    </div>
  );
};

export default MainView;

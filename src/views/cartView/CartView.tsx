import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Button from "../../components/button";
import Card from "../../components/card";
import Navbar from "../../components/navbar";
import { useFetch } from "../../hooks";
import { TResponseItem } from "../../hooks/FetchHook";
import "./styles.scss";

export const CartView = () => {
  const [viewData, setViewData] = useState<TResponseItem[]>([]);

  const history = useHistory();

  const data = useFetch({ url: `http://localhost:8000/cart`, method: "GET" });

  useEffect(() => {
    setViewData(data);
  }, [viewData, data]);

  const onDelete = (ev: React.MouseEvent) => {
    ev.preventDefault();
    const target = ev.target as Element;
    const deleteItemId = target.parentElement?.id;
    // delete item from view page
    const deleteIndexItem = viewData.findIndex((el) => el.id === deleteItemId);
    setViewData(viewData.splice(deleteIndexItem, 1));

    const changeCartStatus = async () => {
      await fetch(`http://localhost:8000/products/${deleteItemId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inCart: "false" }),
      });
    };
    changeCartStatus();
    // delete item from cart in  db

    // const deleteItem = async () => {
    //   await fetch(`http://localhost:8000/cart/${deleteItemId}`, {
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    // };
    // deleteItem();
  };

  // im rly  sory, i have  some bug with fatch and spent my time to fixing it and i did`nt had time for marckup and this part of app, and its still crashing, im realy disappointed, althou have a nice day

  const increment = (ev: React.MouseEvent) => {
    // get element id, get quantity prop, add +1 to quantity count
  };
  const decrement = (ev: React.MouseEvent) => {
    // get element id, get quantity prop, minus 1 to quantity count retutn Math.max between 0 and quantity count
  };
  const onBackToMain = () => {
    history.push("/main");
  };

  return (
    <div>
      <Navbar>
        <Button onClick={onBackToMain}>Bact to Main page</Button>
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
          <Button onClick={onDelete} text="delete" />
          <Button onClick={increment} text="delete" />
          <Button onClick={decrement} text="delete" />
        </Card>
      ))}
    </div>
  );
};

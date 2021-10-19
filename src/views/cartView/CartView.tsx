import { useContext, useEffect } from "react";
import { CartContext } from "../../providers/cart-provider";
import "./styles.scss";

export const CartView = () => {
  const { items } = useContext(CartContext);
  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div>
      <h1>Hello im Cart View page</h1>
      <button>push me</button>
    </div>
  );
};

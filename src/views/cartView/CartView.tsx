import { useContext, useEffect } from "react";
import { CartContext } from "../../providers/cart-provider";
import "./styles.scss";

const CartView = () => {
  const { items, addItemToCart } = useContext(CartContext);
  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div>
      <h1>Hello im Cart View page</h1>
      <button
      // onClick={() =>
      //   addItemToCart({
      //     title: "abcd",
      //     price: "1.99",
      //     id: 3,
      //     description: "adas",
      //   })
      // }
      >
        push me
      </button>
    </div>
  );
};

export default CartView;

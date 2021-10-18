import { useState } from "react";
import { CartContext, TCartItem } from ".";

export const CartProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<TCartItem[]>([]);

  const addItemToCart = (item: TCartItem) => {
    setItems((prevItems) => [...prevItems, item]);
  };
  const removeItemFromCart = () => {};
  return (
    <CartContext.Provider value={{ items, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

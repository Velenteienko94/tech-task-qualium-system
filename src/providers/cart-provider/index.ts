import { createContext } from "react";
import { CartProvider } from "./CartProvider";

export type TCartItem = {
  description: string;
  id: number;
  price: string;
  title: string;
};

export type TCartContext = {
  items: TCartItem[];
  addItemToCart: (item: TCartItem) => void;
  removeItemFromCart: (itemId: number) => void;
};

export const CartContext = createContext<TCartContext>({} as TCartContext);

export default CartProvider;

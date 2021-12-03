import { createContext, useState } from "react";

export const CartContext = createContext([]);
export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = function (title, price, imageSrc) {
    setCartItems([...cartItems, title, price, imageSrc]);
  };
  return (
    <CartContext.Provider value={{ addToCart, cartItems }}>
      {children}
    </CartContext.Provider>
  );
}

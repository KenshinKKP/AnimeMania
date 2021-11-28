import { createContext, useState } from "react";

export const CartContext = createContext([]);
export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = function (product) {
    console.log("added to cart");
  };
  return (
    <CartContext.Provider value={{ addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

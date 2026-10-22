import { createContext, useState } from "react";

export const CartContext = createContext();
export default function CartProvider({ children }) {
  // cart state to store products
  const [cart, setCart] = useState([]);
  //  function to be executed when a product is added
  const handleUpdateCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === product.name);
      if (quantity === 0) {
        return prevCart.filter((item) => item.name !== product.name);
      } else if (existingItem) {
        return prevCart.map((item) =>
          item.name === product.name ? { ...item, quantity } : item,
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };
  const handleRemoveItem = (productName) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== productName));
  };
  const [confirmed, setConfirmed] = useState(false);
  return (
    <CartContext.Provider
      value={{
        cart,
        handleUpdateCart,
        handleRemoveItem,
        confirmed,
        setConfirmed,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

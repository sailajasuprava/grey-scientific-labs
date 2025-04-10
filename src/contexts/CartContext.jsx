import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function handleAddToCart(product) {
    setCart((prev) => {
      const itemExists = prev.find((item) => item.product.id === product.id);
      if (itemExists) {
        return prev;
      } else {
        return [...prev, { product, quantity: 1 }];
      }
    });
  }

  function handleIncrease(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function handleDecrease(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.product.id !== id));
  }
  function clearCart() {
    setCart([]);
    toast.success("Order placed successfully");
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleAddToCart,
        handleIncrease,
        handleDecrease,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("context used outside of provider");
  return context;
}

export default CartProvider;

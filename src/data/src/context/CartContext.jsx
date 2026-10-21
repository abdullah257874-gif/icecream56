import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("frostyCart") || "[]");
      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("frostyCart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const itemKey = `${item.id}-${item.size || "default"}-${item.type || "product"}-${(item.flavors || []).join("-")}`;

    setCart((current) => {
      const existing = current.find((entry) => entry.key === itemKey);
      if (existing) {
        return current.map((entry) =>
          entry.key === itemKey ? { ...entry, quantity: entry.quantity + (item.quantity || 1) } : entry
        );
      }
      return [...current, { ...item, key: itemKey, quantity: item.quantity || 1 }];
    });
  };

  const updateQuantity = (key, change) => {
    setCart((current) =>
      current
        .map((item) =>
          item.key === key
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (key) => {
    setCart((current) => current.filter((item) => item.key !== key));
  };

  const totalItems = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, totalItems, subtotal, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};

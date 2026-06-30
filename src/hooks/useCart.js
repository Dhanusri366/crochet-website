import { useState, useMemo } from "react";

export function useCart(products) {
  const [cart, setCart] = useState([]); // [{ id, qty }]

  function addToCart(id) {
    setCart((c) => {
      const existing = c.find((i) => i.id === id);
      if (existing) {
        return c.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...c, { id, qty: 1 }];
    });
  }

  function changeQty(id, delta) {
    setCart((c) =>
      c.map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i)).filter((i) => i.qty > 0)
    );
  }

  function clearCart() {
    setCart([]);
  }

  const cartItems = useMemo(
    () =>
      cart
        .map((i) => {
          const product = products.find((p) => p.id === i.id);
          return product ? { ...product, qty: i.qty } : null;
        })
        .filter(Boolean),
    [cart, products]
  );

  const total = useMemo(() => cartItems.reduce((sum, i) => sum + i.price * i.qty, 0), [cartItems]);
  const count = useMemo(() => cart.reduce((sum, i) => sum + i.qty, 0), [cart]);

  return { cart, cartItems, total, count, addToCart, changeQty, clearCart };
}

// In production this file would call your API Gateway endpoint instead of
// returning local data, e.g.:
//
// const API_URL = process.env.REACT_APP_API_URL;
//
// export async function fetchProducts() {
//   const res = await fetch(`${API_URL}/products`);
//   if (!res.ok) throw new Error("Failed to load products");
//   return res.json();
// }
//
// export async function createOrder(cartItems) {
//   const res = await fetch(`${API_URL}/orders`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ items: cartItems }),
//   });
//   if (!res.ok) throw new Error("Checkout failed");
//   return res.json();
// }

import { PRODUCTS } from "../data/products";

export async function fetchProducts() {
  // Simulates network latency so loading states are easy to demo.
  await new Promise((resolve) => setTimeout(resolve, 200));
  return PRODUCTS;
}

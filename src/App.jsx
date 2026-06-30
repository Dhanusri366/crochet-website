import { useState, useEffect, useMemo } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";
import { CATEGORIES } from "./data/products";
import { fetchProducts } from "./services/api";
import { useCart } from "./hooks/useCart";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState(new Set());

  const { cartItems, total, count, addToCart, changeQty, clearCart } = useCart(products);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(
    () => (category === "All" ? products : products.filter((p) => p.category === category)),
    [products, category]
  );

  function handleAddToCart(id) {
    addToCart(id);
    setCartOpen(true);
  }

  function toggleWishlist(id) {
    setWishlist((w) => {
      const next = new Set(w);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function handleCheckout() {
    // In production this calls createOrder(cartItems) from services/api.js,
    // which would POST to API Gateway -> Lambda -> RDS.
    alert(`Order placed! Total: $${total.toFixed(2)}`);
    clearCart();
    setCartOpen(false);
  }

  return (
    <div className="min-h-screen app-root">
      <Header
        categories={CATEGORIES}
        activeCategory={category}
        onSelectCategory={setCategory}
        cartCount={count}
        onOpenCart={() => setCartOpen(true)}
      />

      <Hero />

      <section className="max-w-6xl mx-auto px-6 pb-24">
        {loading ? (
          <p className="font-body text-sm" style={{ color: "#8A7B68" }}>Loading products…</p>
        ) : (
          <ProductGrid
            products={filtered}
            wishlist={wishlist}
            onAddToCart={handleAddToCart}
            onToggleWishlist={toggleWishlist}
          />
        )}
      </section>

      <Footer />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        total={total}
        onChangeQty={changeQty}
        onCheckout={handleCheckout}
      />
    </div>
  );
}

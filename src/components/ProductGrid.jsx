import ProductCard from "./ProductCard";

export default function ProductGrid({ products, wishlist, onAddToCart, onToggleWishlist }) {
  if (products.length === 0) {
    return (
      <p className="font-body text-sm" style={{ color: "#8A7B68" }}>
        No products in this category yet.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          isWishlisted={wishlist.has(p.id)}
          onAddToCart={onAddToCart}
          onToggleWishlist={onToggleWishlist}
        />
      ))}
    </div>
  );
}

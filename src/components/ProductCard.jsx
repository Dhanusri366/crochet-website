import { Heart } from "lucide-react";
import StitchBadge from "./StitchBadge";

export default function ProductCard({ product, isWishlisted, onAddToCart, onToggleWishlist }) {
  return (
    <div
      className="group rounded-2xl overflow-hidden border transition-shadow hover:shadow-lg"
      style={{ borderColor: "#E7DCC9", background: "white" }}
    >
      <div
        className="relative aspect-square flex items-center justify-center text-6xl"
        style={{ background: `${product.color}22` }}
      >
        {product.img}
        <button
          onClick={() => onToggleWishlist(product.id)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: "white" }}
          aria-label={`${isWishlisted ? "Remove from" : "Add to"} wishlist`}
        >
          <Heart size={15} fill={isWishlisted ? "#C9714E" : "none"} stroke="#C9714E" />
        </button>
      </div>

      <div className="p-4">
        <StitchBadge>{product.category}</StitchBadge>
        <h3 className="font-display text-lg font-semibold mt-2" style={{ color: "#3A332B" }}>
          {product.name}
        </h3>
        <p className="font-body text-xs mt-1 leading-relaxed" style={{ color: "#8A7B68" }}>
          {product.blurb}
        </p>
        <div className="flex items-center justify-between mt-3">
          <span className="font-display text-lg font-semibold" style={{ color: "#7E5A3F" }}>
            ${product.price}
          </span>
          <button
            onClick={() => onAddToCart(product.id)}
            className="font-body text-sm px-3 py-1.5 rounded-full transition-transform active:scale-95"
            style={{ background: "#3A332B", color: "#FBF7EF" }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

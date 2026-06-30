import { ShoppingBag } from "lucide-react";

export default function Header({ categories, activeCategory, onSelectCategory, cartCount, onOpenCart }) {
  return (
    <header
      className="sticky top-0 z-30 backdrop-blur border-b"
      style={{ background: "rgba(251,247,239,0.92)", borderColor: "#E7DCC9" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-display text-2xl font-semibold tracking-tight" style={{ color: "#7E5A3F" }}>
          Mochi Charmings
        </span>

        <nav className="hidden md:flex items-center gap-6 font-body text-sm" style={{ color: "#6B5D4F" }}>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => onSelectCategory(c)}
              className="relative pb-1 transition-colors"
              style={{ color: activeCategory === c ? "#3A332B" : "#8A7B68", fontWeight: activeCategory === c ? 600 : 400 }}
            >
              {c}
              {activeCategory === c && (
                <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] rounded-full" style={{ background: "#C9714E" }} />
              )}
            </button>
          ))}
        </nav>

        <button
          onClick={onOpenCart}
          className="relative flex items-center gap-2 px-3 py-2 rounded-full font-body text-sm"
          style={{ background: "#3A332B", color: "#FBF7EF" }}
        >
          <ShoppingBag size={16} />
          Cart
          {cartCount > 0 && (
            <span
              className="absolute -top-1.5 -right-1.5 text-[10px] w-5 h-5 flex items-center justify-center rounded-full"
              style={{ background: "#C9714E", color: "white" }}
            >
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile category scroller */}
      <div className="flex md:hidden gap-2 overflow-x-auto px-6 pb-4">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => onSelectCategory(c)}
            className="px-3 py-1.5 rounded-full text-sm font-body whitespace-nowrap border"
            style={{
              borderColor: activeCategory === c ? "#3A332B" : "#E7DCC9",
              background: activeCategory === c ? "#3A332B" : "transparent",
              color: activeCategory === c ? "#FBF7EF" : "#6B5D4F",
            }}
          >
            {c}
          </button>
        ))}
      </div>
    </header>
  );
}

import { X, Plus, Minus } from "lucide-react";

export default function CartDrawer({ isOpen, onClose, cartItems, total, onChangeQty, onCheckout }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex justify-end">
      <div className="absolute inset-0" style={{ background: "rgba(58,51,43,0.4)" }} onClick={onClose} />

      <div className="relative w-full max-w-sm h-full flex flex-col" style={{ background: "#FBF7EF" }}>
        <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "#E7DCC9" }}>
          <h2 className="font-display text-xl font-semibold">Your cart</h2>
          <button onClick={onClose} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {cartItems.length === 0 && (
            <p className="font-body text-sm" style={{ color: "#8A7B68" }}>
              Your cart is empty — go add something cozy.
            </p>
          )}
          {cartItems.map((i) => (
            <div key={i.id} className="flex gap-3 items-center">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0"
                style={{ background: `${i.color}22` }}
              >
                {i.img}
              </div>
              <div className="flex-1">
                <p className="font-body text-sm font-medium">{i.name}</p>
                <p className="font-body text-xs" style={{ color: "#8A7B68" }}>${i.price}</p>
              </div>
              <div className="flex items-center gap-2 font-body text-sm">
                <button
                  onClick={() => onChangeQty(i.id, -1)}
                  className="w-6 h-6 rounded-full border flex items-center justify-center"
                  style={{ borderColor: "#E7DCC9" }}
                  aria-label="Decrease quantity"
                >
                  <Minus size={12} />
                </button>
                {i.qty}
                <button
                  onClick={() => onChangeQty(i.id, 1)}
                  className="w-6 h-6 rounded-full border flex items-center justify-center"
                  style={{ borderColor: "#E7DCC9" }}
                  aria-label="Increase quantity"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="px-5 py-4 border-t font-body" style={{ borderColor: "#E7DCC9" }}>
          <div className="flex justify-between text-sm mb-3">
            <span style={{ color: "#6B5D4F" }}>Subtotal</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
          <button
            disabled={cartItems.length === 0}
            onClick={onCheckout}
            className="w-full py-3 rounded-full text-sm font-medium disabled:opacity-40"
            style={{ background: "#C9714E", color: "white" }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default function StitchBadge({ children }) {
  return (
    <span
      className="inline-block text-[11px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full border"
      style={{ borderColor: "#D9CBB8", color: "#6B5D4F", background: "#FBF7EF" }}
    >
      {children}
    </span>
  );
}

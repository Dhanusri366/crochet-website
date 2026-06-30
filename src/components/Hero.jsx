import YarnDivider from "./YarnDivider";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
      <p className="font-body text-sm tracking-[0.2em] uppercase mb-3" style={{ color: "#A0714E" }}>
        Made one stitch at a time
      </p>
      <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05] max-w-2xl" style={{ color: "#3A332B" }}>
        Soft things, made slow, built to last longer than the trend.
      </h1>
      <p className="font-body mt-5 max-w-md text-[15px] leading-relaxed" style={{ color: "#6B5D4F" }}>
        Every piece is hand-crocheted in small batches from natural fiber yarns —
        no two amigurumi faces are quite the same.
      </p>
      <div className="mt-6 w-48">
        <YarnDivider />
      </div>
    </section>
  );
}

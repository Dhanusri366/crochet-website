export const PRODUCTS = [
  { id: 1, name: "Amigurumi Fox", price: 28, category: "Toys", color: "#C9714E", img: "🦊", blurb: "Hand-stitched, button eyes, fits in one palm." },
  { id: 2, name: "Chunky Throw Blanket", price: 86, category: "Home", color: "#8B9A6B", img: "🧶", blurb: "Merino wool, 130x150cm, machine washable." },
  { id: 3, name: "Granny Square Tote", price: 34, category: "Bags", color: "#D9A441", img: "👜", blurb: "Cotton yarn, lined interior, leather straps." },
  { id: 4, name: "Baby Bonnet Set", price: 22, category: "Baby", color: "#C98A9E", img: "👒", blurb: "0-6mo, organic cotton, three colorways." },
  { id: 5, name: "Market Basket", price: 41, category: "Home", color: "#A0714E", img: "🧺", blurb: "Jute blend, stiffened base, holds its shape." },
  { id: 6, name: "Amigurumi Octopus", price: 26, category: "Toys", color: "#7E8FA6", img: "🐙", blurb: "Eight curled arms, weighted base." },
  { id: 7, name: "Slouchy Beanie", price: 24, category: "Wearables", color: "#5B6B4F", img: "🧢", blurb: "Alpaca blend, one size, six colors." },
  { id: 8, name: "Coaster Set of 4", price: 16, category: "Home", color: "#C9714E", img: "☕", blurb: "Cotton, heat-resistant, gift-boxed." },
];

export const CATEGORIES = ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))];

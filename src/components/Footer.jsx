import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t font-body text-sm" style={{ borderColor: "#E7DCC9", color: "#8A7B68" }}>
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <span>© {new Date().getFullYear()} Mochi Charmings. Hand-made, slowly.</span>
        <div className="flex items-center gap-4">
          <span>Shipping within 5–7 days ·</span>
          
          <a  href="https://www.instagram.com/mochicharmings?igsh=MWRxeWJxNm40dHBoaw=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on Instagram"
            className="hover:opacity-70 transition-opacity"
            style={{ color: "#C9714E" }}
          >
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
"use client";

import { useState } from "react";

const NAV_LINKS = ["Tours", "Experience", "Gallery", "Testimonials", "Book Now"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{
          background:
            "linear-gradient(to bottom, rgba(26,26,46,0.85) 0%, transparent 100%)",
        }}
      >
        <div className="font-display text-white text-2xl font-semibold tracking-tight">
          Aegéan<span className="text-[#e8a04a]">.</span>
        </div>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <a
                href={
                  l === "Book Now"
                    ? "#book"
                    : `#${l.toLowerCase().replace(" ", "-")}`
                }
                className={
                  l === "Book Now"
                    ? "bg-[#e8a04a] text-[#1a1a2e] px-5 py-2 rounded-full text-sm font-medium tracking-wide hover:bg-[#d48f39] transition-colors"
                    : "text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors"
                }
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#1a1a2e]/95 flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-5 right-8 text-white text-3xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href={
                l === "Book Now"
                  ? "#book"
                  : `#${l.toLowerCase().replace(" ", "-")}`
              }
              onClick={() => setMenuOpen(false)}
              className="font-display text-white text-3xl font-light italic hover:text-[#e8a04a] transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

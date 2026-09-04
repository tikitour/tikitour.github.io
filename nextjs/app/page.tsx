"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tours from "@/components/Tours";
import Highlights from "@/components/Highlights";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import { STATS } from "@/lib/data";

export default function HomePage() {
  const [selectedTour, setSelectedTour] = useState("Sunrise Coastal Circuit");

  return (
    <main className="min-h-screen bg-[#f5f0e8] overflow-x-hidden">
      <Navbar />

      <Hero />

      {/* Stats strip */}
      <div className="bg-[#1a1a2e] py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map(({ val, label }) => (
            <div key={label}>
              <div className="font-display text-[#e8a04a] text-3xl font-semibold">
                {val}
              </div>
              <div className="text-white/50 text-sm mt-1 tracking-wide">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Tours onSelectTour={setSelectedTour} />

      <Highlights />

      <Gallery />

      <Testimonials />

      <BookingForm initialTour={selectedTour} />

      {/* Footer */}
      <footer className="bg-[#1a1a2e] py-12 px-6 text-center">
        <div className="font-display text-white text-2xl font-semibold mb-3">
          Aegéan<span className="text-[#e8a04a]">.</span>
        </div>
        <p className="text-white/40 text-sm mb-6">
          Koh Rong Sanloem, Sihanoukville, Cambodia · info@aegean-tours.com · +855 12 000 000
        </p>
        <div className="flex justify-center gap-6 text-white/30 text-xs">
          <a href="#" className="hover:text-white/60 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white/60 transition-colors">
            Terms &amp; Conditions
          </a>
          <a href="#" className="hover:text-white/60 transition-colors">
            Safety Standards
          </a>
        </div>
        <p className="text-white/20 text-xs mt-8">
          © 2026 Aegéan Island Tours. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

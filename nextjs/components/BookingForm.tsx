"use client";

import { useState } from "react";
import { TOURS, MONTHS } from "@/lib/data";

interface BookingFormProps {
  initialTour?: string;
}

export default function BookingForm({ initialTour }: BookingFormProps) {
  const [activeMonth, setActiveMonth] = useState("Aug");
  const [guests, setGuests] = useState(2);
  const [selectedTour, setSelectedTour] = useState(
    initialTour ?? TOURS[0].name
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const currentTour = TOURS.find((t) => t.name === selectedTour);
  const totalPrice = (currentTour?.priceNum ?? 0) * guests;

  return (
    <section id="book" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#c9a05a] text-sm font-medium tracking-[0.18em] uppercase mb-3">
            Reserve your spot
          </p>
          <h2 className="font-display text-[#1a1a2e] text-4xl md:text-5xl font-light">
            Book your
            <br />
            <em>island escape</em>
          </h2>
          <p className="text-[#5a6070] mt-4 text-sm leading-relaxed">
            Spaces are limited to guarantee a personal experience. Secure yours
            with a small deposit — full payment at the dock.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg">
          <div className="grid gap-6">
            {/* Tour select */}
            <div>
              <label className="block text-[#1a1a2e] text-sm font-semibold mb-2">
                Choose Tour
              </label>
              <select
                value={selectedTour}
                onChange={(e) => setSelectedTour(e.target.value)}
                className="w-full border border-[#e0d8ce] rounded-xl px-4 py-3 text-sm text-[#1a1a2e] bg-[#faf7f2] focus:outline-none focus:ring-2 focus:ring-[#e8a04a]/40 appearance-none"
              >
                {TOURS.map((t) => (
                  <option key={t.name} value={t.name}>
                    {t.name} — {t.price}/person
                  </option>
                ))}
              </select>
            </div>

            {/* Month picker */}
            <div>
              <label className="block text-[#1a1a2e] text-sm font-semibold mb-2">
                Month
              </label>
              <div className="flex gap-2 flex-wrap">
                {MONTHS.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setActiveMonth(m)}
                    className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
                      activeMonth === m
                        ? "bg-[#1a1a2e] text-white border-[#1a1a2e]"
                        : "border-[#e0d8ce] text-[#5a6070] hover:border-[#1a1a2e]"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Guests */}
            <div>
              <label className="block text-[#1a1a2e] text-sm font-semibold mb-2">
                Guests
              </label>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-10 h-10 rounded-full border border-[#e0d8ce] text-[#1a1a2e] text-lg hover:bg-[#f5f0e8] flex items-center justify-center transition-colors"
                >
                  −
                </button>
                <span className="font-display text-[#1a1a2e] text-2xl font-semibold w-8 text-center">
                  {guests}
                </span>
                <button
                  type="button"
                  onClick={() => setGuests(Math.min(16, guests + 1))}
                  className="w-10 h-10 rounded-full border border-[#e0d8ce] text-[#1a1a2e] text-lg hover:bg-[#f5f0e8] flex items-center justify-center transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#1a1a2e] text-sm font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Sophie Andersen"
                  className="w-full border border-[#e0d8ce] rounded-xl px-4 py-3 text-sm bg-[#faf7f2] focus:outline-none focus:ring-2 focus:ring-[#e8a04a]/40 placeholder:text-[#b0a89a]"
                />
              </div>
              <div>
                <label className="block text-[#1a1a2e] text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sophie@example.com"
                  className="w-full border border-[#e0d8ce] rounded-xl px-4 py-3 text-sm bg-[#faf7f2] focus:outline-none focus:ring-2 focus:ring-[#e8a04a]/40 placeholder:text-[#b0a89a]"
                />
              </div>
            </div>

            {/* Price summary */}
            <div className="bg-[#f5f0e8] rounded-xl px-5 py-4 flex justify-between items-center">
              <span className="text-[#5a6070] text-sm">
                {selectedTour} · {guests} {guests === 1 ? "guest" : "guests"} ·{" "}
                {activeMonth}
              </span>
              <span className="font-display text-[#1a1a2e] text-lg font-semibold">
                ${totalPrice}
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-[#e8a04a] hover:bg-[#d48f39] text-[#1a1a2e] font-semibold py-4 rounded-full text-sm tracking-wide hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              Request Booking
            </button>
            <p className="text-center text-[#8090a8] text-xs">
              No full payment required now · Free cancellation 48h before
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

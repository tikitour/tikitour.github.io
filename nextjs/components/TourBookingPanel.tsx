"use client";

import { useState } from "react";
import type { Tour } from "@/lib/data";
import { MONTHS } from "@/lib/data";

interface Props {
  tour: Tour;
}

export default function TourBookingPanel({ tour }: Props) {
  const [guests, setGuests] = useState(2);
  const [activeMonth, setActiveMonth] = useState("Aug");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const total = tour.priceNum * guests;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div id="book" className="bg-white rounded-3xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-[#1a1a2e] px-7 py-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-white/50 text-xs tracking-wide uppercase mb-1">From</p>
            <div className="font-display text-[#e8a04a] text-4xl font-semibold">{tour.price}</div>
            <p className="text-white/40 text-xs mt-0.5">per person</p>
          </div>
          <div className="text-right">
            <div className="text-white text-sm font-medium">{tour.duration}</div>
            <div className="text-white/50 text-xs">{tour.time} departure</div>
            <div className="text-white/50 text-xs">Max {tour.maxGuests} guests</div>
          </div>
        </div>
      </div>

      {submitted ? (
        <div className="px-7 py-10 text-center">
          <div className="text-4xl mb-4">🎉</div>
          <h3 className="font-display text-[#1a1a2e] text-2xl font-semibold mb-2">Request Received!</h3>
          <p className="text-[#5a6070] text-sm leading-relaxed">
            Thanks, {name.split(" ")[0]}. We&apos;ll confirm your booking for{" "}
            <strong>{tour.name}</strong> in {activeMonth} within 24 hours via {email}.
          </p>
          <button onClick={() => setSubmitted(false)}
            className="mt-6 text-[#e8a04a] text-sm font-medium hover:underline">
            Make another booking
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="px-7 py-6 space-y-5">
          {/* Month */}
          <div>
            <label className="block text-[#1a1a2e] text-xs font-semibold mb-2 uppercase tracking-wide">
              Month
            </label>
            <div className="flex flex-wrap gap-2">
              {MONTHS.map((m) => (
                <button type="button" key={m} onClick={() => setActiveMonth(m)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                    activeMonth === m
                      ? "bg-[#1a1a2e] text-white border-[#1a1a2e]"
                      : "border-[#e0d8ce] text-[#5a6070] hover:border-[#1a1a2e]"
                  }`}>
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Guests */}
          <div>
            <label className="block text-[#1a1a2e] text-xs font-semibold mb-2 uppercase tracking-wide">
              Guests
            </label>
            <div className="flex items-center gap-4">
              <button type="button" onClick={() => setGuests(Math.max(1, guests - 1))}
                className="w-9 h-9 rounded-full border border-[#e0d8ce] text-[#1a1a2e] text-lg hover:bg-[#f5f0e8] flex items-center justify-center transition-colors">
                −
              </button>
              <span className="font-display text-[#1a1a2e] text-2xl font-semibold w-6 text-center">
                {guests}
              </span>
              <button type="button" onClick={() => setGuests(Math.min(tour.maxGuests, guests + 1))}
                className="w-9 h-9 rounded-full border border-[#e0d8ce] text-[#1a1a2e] text-lg hover:bg-[#f5f0e8] flex items-center justify-center transition-colors">
                +
              </button>
              <span className="text-[#8090a8] text-xs ml-1">max {tour.maxGuests}</span>
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="block text-[#1a1a2e] text-xs font-semibold mb-2 uppercase tracking-wide">
              Full Name
            </label>
            <input required type="text" value={name} onChange={(e) => setName(e.target.value)}
              placeholder="Sophie Andersen"
              className="w-full border border-[#e0d8ce] rounded-xl px-4 py-2.5 text-sm bg-[#faf7f2] focus:outline-none focus:ring-2 focus:ring-[#e8a04a]/40 placeholder:text-[#b0a89a]" />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#1a1a2e] text-xs font-semibold mb-2 uppercase tracking-wide">
              Email
            </label>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="sophie@example.com"
              className="w-full border border-[#e0d8ce] rounded-xl px-4 py-2.5 text-sm bg-[#faf7f2] focus:outline-none focus:ring-2 focus:ring-[#e8a04a]/40 placeholder:text-[#b0a89a]" />
          </div>

          {/* Price summary */}
          <div className="bg-[#f5f0e8] rounded-xl px-4 py-3 flex justify-between items-center">
            <span className="text-[#5a6070] text-xs">
              {guests} {guests === 1 ? "guest" : "guests"} · {activeMonth} · {tour.time}
            </span>
            <span className="font-display text-[#1a1a2e] text-lg font-semibold">${total}</span>
          </div>

          <button type="submit"
            className="w-full bg-[#e8a04a] hover:bg-[#d48f39] text-[#1a1a2e] font-semibold py-3.5 rounded-full text-sm tracking-wide hover:scale-[1.01] active:scale-[0.99] transition-all">
            Request to Book
          </button>

          <p className="text-center text-[#8090a8] text-xs leading-relaxed">
            No payment now · Deposit requested on confirmation
            <br />Free cancellation 48h before departure
          </p>
        </form>
      )}
    </div>
  );
}

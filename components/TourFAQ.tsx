"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

export default function TourFAQ({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      <p className="text-[#c9a05a] text-xs font-medium tracking-[0.18em] uppercase mb-5">
        Frequently Asked Questions
      </p>
      <dl className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-[#e0d8ce] rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#faf7f2] transition-colors"
            >
              <span className="font-semibold text-[#1a1a2e] text-sm pr-4">
                {faq.question}
              </span>
              <span
                className={`text-[#e8a04a] text-lg shrink-0 transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>
            {open === i && (
              <div className="px-5 pb-5">
                <p className="text-[#5a6070] text-sm leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </dl>
    </div>
  );
}

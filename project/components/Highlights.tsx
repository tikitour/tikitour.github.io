import { HIGHLIGHTS } from "@/lib/data";

export default function Highlights() {
  return (
    <section id="experience" className="bg-[#1a1a2e] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-xl">
          <p className="text-[#e8a04a] text-sm font-medium tracking-[0.18em] uppercase mb-3">
            What&apos;s included
          </p>
          <h2 className="font-display text-white text-4xl md:text-5xl font-light">
            Everything you need,
            <br />
            <em className="text-[#e8d4a0]">nothing you don&apos;t</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {HIGHLIGHTS.map((h) => (
            <div
              key={h.title}
              className="flex gap-5 p-6 rounded-2xl border border-white/[0.08] hover:border-[#e8a04a]/30 hover:bg-white/[0.03] transition-all"
            >
              <span className="text-3xl shrink-0 mt-0.5">{h.icon}</span>
              <div>
                <h3 className="font-display text-white text-xl font-semibold mb-2">
                  {h.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{h.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

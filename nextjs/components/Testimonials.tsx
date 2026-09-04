import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#ede5d8] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-[#c9a05a] text-sm font-medium tracking-[0.18em] uppercase mb-3">
            Guest stories
          </p>
          <h2 className="font-display text-[#1a1a2e] text-4xl md:text-5xl font-light">
            Days they still
            <br />
            <em>talk about</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-[#e8a04a] text-sm">
                    ★
                  </span>
                ))}
              </div>
              <p className="font-display text-[#3a3a4e] text-base italic leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center text-white text-xs font-semibold shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-[#1a1a2e] font-semibold text-sm">
                    {t.name}
                  </div>
                  <div className="text-[#8090a8] text-xs">{t.origin}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

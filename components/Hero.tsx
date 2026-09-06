import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1616421310226-7453165b353e?w=1800&h=1000&fit=crop&auto=format"
        alt="Palm trees lining a tropical Cambodia island beach"
        fill
        priority
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(26,26,46,0.65) 0%, rgba(26,26,46,0.3) 60%, rgba(20,60,80,0.5) 100%)",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-[#e8a04a] text-sm font-medium tracking-[0.2em] uppercase mb-6">
          Koh Rong Sanloem · Cambodia
        </p>
        <h1 className="font-display text-white text-5xl md:text-7xl font-light leading-tight mb-6">
          The island,
          <br />
          <span className="italic text-[#e8d4a0]">seen from the sea.</span>
        </h1>
        <p className="text-white/75 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Private skippered boat tours around one of Cambodia&apos;s most
          beautiful coastlines. Small groups, wild coves, unforgettable days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#tours"
            className="bg-[#e8a04a] text-[#1a1a2e] font-semibold px-8 py-4 rounded-full hover:bg-[#d48f39] hover:scale-[1.02] transition-all text-sm tracking-wide"
          >
            Explore Tours
          </a>
          <a
            href="#book"
            className="border border-white/40 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-sm tracking-wide font-medium"
          >
            Book a Date
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <span className="text-lg animate-bounce">↓</span>
      </div>
    </section>
  );
}

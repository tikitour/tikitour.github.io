import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { TOURS } from "@/lib/data";
import TourBookingPanel from "@/components/TourBookingPanel";
import TourFAQ from "@/components/TourFAQ";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TOURS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tour = TOURS.find((t) => t.slug === slug);
  if (!tour) return {};
  return {
    title: `${tour.name} — Aegéan Koh Rong Sanloem`,
    description: tour.longDescription.slice(0, 160),
  };
}

const DIFFICULTY_COLOR: Record<string, string> = {
  Easy: "bg-emerald-100 text-emerald-800",
  Moderate: "bg-amber-100 text-amber-800",
  Challenging: "bg-red-100 text-red-800",
};

export default async function TourPage({ params }: Props) {
  const { slug } = await params;
  const tour = TOURS.find((t) => t.slug === slug);
  if (!tour) notFound();

  const otherTours = TOURS.filter((t) => t.slug !== tour.slug);

  return (
    <div className="min-h-screen bg-[#f5f0e8] overflow-x-hidden">

      {/* MINI NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f0e8]/90 backdrop-blur-md border-b border-[#e0d8ce] px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-[#1a1a2e] hover:text-[#e8a04a] transition-colors text-sm font-medium">
          <span>←</span>
          <span>All Tours</span>
        </Link>
        <div className="font-display text-[#1a1a2e] text-xl font-semibold tracking-tight">
          Aegéan<span className="text-[#e8a04a]">.</span>
        </div>
        <Link href="#book"
          className="bg-[#e8a04a] text-[#1a1a2e] text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#d48f39] transition-colors hidden sm:block">
          Book Now
        </Link>
      </nav>

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[480px] flex items-end overflow-hidden pt-16">
        <Image
          src={tour.heroImage}
          alt={tour.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,26,46,0.85) 0%, rgba(26,26,46,0.2) 60%, transparent 100%)" }} />
        <div className="relative z-10 px-6 md:px-16 pb-12 max-w-4xl">
          <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${DIFFICULTY_COLOR[tour.difficulty]}`}>
            {tour.badge}
          </span>
          <h1 className="font-display text-white text-4xl md:text-6xl font-light leading-tight mb-3">
            {tour.name}
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-light italic font-display">
            {tour.tagline}
          </p>
        </div>
      </section>

      {/* QUICK STATS BAR */}
      <div className="bg-[#1a1a2e] px-6 py-5">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-6 md:gap-10 justify-center md:justify-start">
          {[
            { icon: "⏱", label: "Duration", val: tour.duration },
            { icon: "🕐", label: "Departs", val: tour.time },
            { icon: "👥", label: "Max guests", val: `${tour.maxGuests} people` },
            { icon: "📊", label: "Difficulty", val: tour.difficulty },
            { icon: "🧒", label: "Min age", val: tour.minAge === 0 ? "All ages" : `${tour.minAge}+` },
            { icon: "💰", label: "Price", val: `${tour.price} / person` },
          ].map(({ icon, label, val }) => (
            <div key={label} className="flex items-center gap-2.5">
              <span className="text-xl">{icon}</span>
              <div>
                <div className="text-white/40 text-xs">{label}</div>
                <div className="text-white text-sm font-semibold">{val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT + BOOKING SIDEBAR */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-[1fr_360px] gap-12 items-start">

        {/* LEFT COLUMN */}
        <div className="space-y-16">

          {/* Overview */}
          <div>
            <p className="text-[#c9a05a] text-xs font-medium tracking-[0.18em] uppercase mb-3">Overview</p>
            <p className="text-[#3a3a4e] text-lg leading-relaxed font-light">
              {tour.longDescription}
            </p>
          </div>

          {/* Itinerary */}
          <div>
            <p className="text-[#c9a05a] text-xs font-medium tracking-[0.18em] uppercase mb-6">Itinerary</p>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[52px] top-3 bottom-3 w-px bg-[#e0d8ce]" />
              <ol className="space-y-0">
                {tour.itinerary.map((stop, i) => (
                  <li key={i} className="flex gap-5 group">
                    <div className="flex flex-col items-center shrink-0 w-[52px]">
                      <div className="w-3 h-3 rounded-full border-2 border-[#e8a04a] bg-[#f5f0e8] mt-1.5 z-10 group-hover:bg-[#e8a04a] transition-colors" />
                    </div>
                    <div className="pb-8 flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-display text-[#e8a04a] text-sm font-semibold">{stop.time}</span>
                        <h3 className="text-[#1a1a2e] font-semibold text-base">{stop.title}</h3>
                      </div>
                      <p className="text-[#5a6070] text-sm leading-relaxed">{stop.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Includes / Not Included */}
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <p className="text-[#c9a05a] text-xs font-medium tracking-[0.18em] uppercase mb-4">What&apos;s Included</p>
              <ul className="space-y-2.5">
                {tour.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#3a3a4e]">
                    <span className="text-[#e8a04a] mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[#c9a05a] text-xs font-medium tracking-[0.18em] uppercase mb-4">Not Included</p>
              <ul className="space-y-2.5">
                {tour.notIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#5a6070]">
                    <span className="text-[#b0a89a] mt-0.5 shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Gallery */}
          <div>
            <p className="text-[#c9a05a] text-xs font-medium tracking-[0.18em] uppercase mb-4">Photo Gallery</p>
            <div className="grid grid-cols-2 gap-3">
              {tour.galleryImages.map((img, i) => (
                <div key={i} className={`relative overflow-hidden rounded-xl bg-[#c9b99a] ${i === 0 ? "col-span-2 h-60" : "h-44"}`}>
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <TourFAQ faqs={tour.faqs} />

        </div>

        {/* RIGHT COLUMN — Booking Panel */}
        <div className="lg:sticky lg:top-24">
          <TourBookingPanel tour={tour} />
        </div>

      </div>

      {/* OTHER TOURS */}
      <section className="bg-[#ede5d8] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c9a05a] text-xs font-medium tracking-[0.18em] uppercase mb-3">More experiences</p>
          <h2 className="font-display text-[#1a1a2e] text-3xl md:text-4xl font-light mb-10">
            Other tours you might love
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otherTours.map((t) => (
              <Link key={t.slug} href={`/tours/${t.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex">
                <div className="relative w-36 shrink-0 bg-[#1a3340]">
                  <Image src={t.image} alt={t.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-[#e8a04a] font-semibold tracking-wide">{t.badge}</span>
                    <h3 className="font-display text-[#1a1a2e] text-lg font-semibold mt-1 mb-1">{t.name}</h3>
                    <p className="text-[#5a6070] text-xs leading-relaxed line-clamp-2">{t.description}</p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-[#8090a8]">⏱ {t.duration} · 👥 Max {t.maxGuests}</span>
                    <span className="font-display text-[#e8a04a] font-semibold">{t.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a1a2e] py-10 px-6 text-center">
        <div className="font-display text-white text-xl font-semibold mb-2">
          Aegéan<span className="text-[#e8a04a]">.</span>
        </div>
        <p className="text-white/30 text-xs">
          Koh Rong Sanloem, Sihanoukville, Cambodia · info@aegean-tours.com
        </p>
      </footer>

    </div>
  );
}

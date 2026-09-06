import Image from "next/image";
import Link from "next/link";
import { TOURS } from "@/lib/data";

interface ToursProps {
  onSelectTour: (name: string) => void;
}

export default function Tours({ onSelectTour }: ToursProps) {
  return (
    <section id="tours" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <p className="text-[#c9a05a] text-sm font-medium tracking-[0.18em] uppercase mb-3">
          Choose your adventure
        </p>
        <h2 className="font-display text-[#1a1a2e] text-4xl md:text-5xl font-light">
          Three ways to
          <br />
          <em>know the island</em>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {TOURS.map((tour) => (
          <article
            key={tour.name}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
          >
            <div className="relative h-52 bg-[#1a3340]">
              <Image
                src={tour.image}
                alt={tour.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-[#e8a04a] text-[#1a1a2e] text-xs font-semibold px-3 py-1 rounded-full tracking-wide z-10">
                {tour.badge}
              </span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-display text-[#1a1a2e] text-xl font-semibold leading-tight">
                  {tour.name}
                </h3>
                <span className="font-display text-[#e8a04a] text-xl font-semibold ml-4 shrink-0">
                  {tour.price}
                </span>
              </div>
              <p className="text-[#5a6070] text-sm leading-relaxed mb-5">
                {tour.description}
              </p>
              <div className="flex gap-4 text-xs text-[#8090a8] mb-6">
                <span>⏱ {tour.duration}</span>
                <span>🕐 {tour.time}</span>
                <span>👥 Max {tour.maxGuests}</span>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/tours/${tour.slug}`}
                  className="flex-1 text-center border border-[#e0d8ce] text-[#5a6070] text-sm font-medium py-2.5 rounded-full hover:bg-[#f5f0e8] transition-colors tracking-wide"
                >
                  View Details
                </Link>
                <a
                  href="#book"
                  onClick={() => onSelectTour(tour.name)}
                  className="flex-1 text-center border-2 border-[#1a1a2e] text-[#1a1a2e] text-sm font-semibold py-2.5 rounded-full hover:bg-[#1a1a2e] hover:text-white transition-colors tracking-wide"
                >
                  Book Now
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

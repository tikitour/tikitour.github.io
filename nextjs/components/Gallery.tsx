import Image from "next/image";
import { GALLERY } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="text-[#c9a05a] text-sm font-medium tracking-[0.18em] uppercase mb-3">
          Out on the water
        </p>
        <h2 className="font-display text-[#1a1a2e] text-4xl md:text-5xl font-light">
          The view from here
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[180px]">
        {GALLERY.map((img, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-xl bg-[#c9b99a] ${img.span}`}
          >
            <Image
              src={img.url}
              alt={img.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

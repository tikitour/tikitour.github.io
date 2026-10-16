"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface HeroImage {
  url: string;
  alt: string;
}

interface TourHeroSlideshowProps {
  images: HeroImage[];
}

export default function TourHeroSlideshow({ images }: TourHeroSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {images.map((image, index) => (
        <Image
          key={image.url}
          src={image.url}
          alt={image.alt}
          fill
          priority={index === 0}
          sizes="100vw"
          aria-hidden={index !== activeIndex}
          className={`object-cover transition-opacity duration-1000 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </>
  );
}

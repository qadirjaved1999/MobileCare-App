"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type Slide = {
  id: string;
  title: string;
  subtitle?: string;
  priceTag?: string;
  cta?: { label: string; href: string };
  image?: { src: string; alt: string };
  bg?: string; // optional bg class if you want per-slide color
};

const AUTO_ADVANCE_MS = 4500;

export default function HeroCarousel() {

const banners = useMemo(
    () => [
      "/images/banners/airpods-banner.jpg",
      "/images/banners/iphone-banner.jpg",
      "/images/banners/mackbook-banner.jpg",
      "/images/banners/iphone-banner.jpg",
      "/images/banners/airpods-banner.jpg",
      "/images/banners/mackbook-banner.jpg",
    ],
    []
  );

  const total = banners.length;

  // index = left-most visible slide index (0..maxIndex)
  const [index, setIndex] = useState(0);

  // visible count depends on viewport width
  const [visible, setVisible] = useState(3);

  // pause autoplay while interacting
  const [isPaused, setIsPaused] = useState(false);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const hoverRef = useRef(false);
  const resizeObserverRef = useRef<number | null>(null);

  // determine visible count based on window.innerWidth
  useEffect(() => {
    function updateVisible() {
      if (typeof window === "undefined") return;
      const w = window.innerWidth;
      if (w < 640) setVisible(1); // mobile
      else if (w < 1024) setVisible(2); // md
      else setVisible(3); // lg+
    }
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  // compute max index (so there are 'visible' slides visible at once)
  const maxIndex = Math.max(0, total - visible);

  // autoplay
  useEffect(() => {
    if (isPaused) return;
    const iv = setInterval(() => {
      setIndex((prev) => {
        if (maxIndex === 0) return 0; // nothing to move
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(iv);
  }, [maxIndex, isPaused, visible]);

  // helper to go prev/next
  const goPrev = () => {
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  };
  const goNext = () => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  };

  // transform percent per slide
  const slideWidthPercent = 100 / visible;
  const translateX = -(index * slideWidthPercent);

  // keyboard left/right support
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [maxIndex]);

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => {
        setIsPaused(true);
        hoverRef.current = true;
      }}
      onMouseLeave={() => {
        setIsPaused(false);
        hoverRef.current = false;
      }}
    >
      <div className="relative h-48.5">
        <div className="absolute inset-0">
          <div className="h-full">
            <div
              ref={trackRef}
              className="h-full flex transition-transform duration-600 ease-in-out"
              style={{
                transform: `translateX(${translateX}%)`,
              }}
            >
              {banners.map((src, i) => (
                <div
                  key={src + i}
                  className="h-full flex-shrink-0 px-2"
                  style={{
                    width: `${slideWidthPercent}%`,
                  }}
                >
                  {/* card wrapper */}
                  <div className="h-full w-full overflow-hidden bg-white">
                    <div className="relative h-full w-full">
                      <Image
                        src={src}
                        alt={`Banner ${i + 1}`}
                        width={800}
                        height={480}
                        className="object-cover"
                        priority={i === index || (i >= index && i < index + visible)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
   
            {/* Prev/Next controls */}
            {/* <button
              aria-label="Predošlý slide"
              onClick={() => {
                goPrev();
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 1500);
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-gray-900 hover:bg-white shadow z-20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button> */}

            {/* <button
              aria-label="Ďalší slide"
              onClick={() => {
                goNext();
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 1500);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-gray-900 hover:bg-white shadow z-20"
            >
              <ChevronRight className="h-5 w-5" />
            </button> */}

            {/* Dots / pagination */}
            {/* <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20">
              number of pages = maxIndex + 1
              {Array.from({ length: maxIndex + 1 }).map((_, page) => (
                <button
                  key={page}
                  aria-label={`Page ${page + 1}`}
                  onClick={() => {
                    setIndex(page);
                    setIsPaused(true);
                    setTimeout(() => setIsPaused(false), 1500);
                  }}
                  className={`h-2 w-8 rounded-full transition ${
                    page === index
                      ? "bg-white"
                      : "bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

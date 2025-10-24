"use client";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const AUTO_ADVANCE_MS = 4500;

// __________Hero Carousel Component__________
export default function HeroCarousel() {
  // __________Banner images__________
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

  // __________Slide state__________
  const [index, setIndex] = useState(0); // current start index
  const [visible, setVisible] = useState(3); // visible slides count
  const [isPaused, setIsPaused] = useState(false); // autoplay pause flag

  const trackRef = useRef<HTMLDivElement | null>(null);
  const hoverRef = useRef(false);

  // __________Handle responsive slide count__________
  useEffect(() => {
    function updateVisible() {
      if (typeof window === "undefined") return;
      const w = window.innerWidth;
      if (w < 640) setVisible(1);
      else if (w < 1024) setVisible(2);
      else setVisible(3);
    }
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  // __________Max index (for looping)__________
  const maxIndex = Math.max(0, total - visible);

  // __________Autoplay slides__________
  useEffect(() => {
    if (isPaused) return;
    const iv = setInterval(() => {
      setIndex((prev) =>
        maxIndex === 0 ? 0 : prev >= maxIndex ? 0 : prev + 1
      );
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(iv);
  }, [maxIndex, isPaused, visible]);

  // __________Slide transform calculation__________
  const slideWidthPercent = 100 / visible;
  const translateX = -(index * slideWidthPercent);

  // __________Keyboard navigation__________
  // Manual navigation (wrapped in useCallback)
  const goPrev = useCallback(
    () => setIndex((i) => (i <= 0 ? maxIndex : i - 1)),
    [maxIndex]
  );

  const goNext = useCallback(
    () => setIndex((i) => (i >= maxIndex ? 0 : i + 1)),
    [maxIndex]
  );

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  return (
    // __________Carousel wrapper__________
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
            {/* __________Slide track__________ */}
            <div
              ref={trackRef}
              className="h-full flex transition-transform duration-600 ease-in-out"
              style={{ transform: `translateX(${translateX}%)` }}
            >
              {banners.map((src, i) => (
                <div
                  key={src + i}
                  className="h-full flex-shrink-0 px-2"
                  style={{ width: `${slideWidthPercent}%` }}
                >
                  {/* __________Slide item__________ */}
                  <div className="h-full w-full overflow-hidden bg-white">
                    <div className="relative h-full w-full">
                      <Image
                        src={src}
                        alt={`Banner ${i + 1}`}
                        width={800}
                        height={480}
                        className="object-cover"
                        priority={
                          i === index || (i >= index && i < index + visible)
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

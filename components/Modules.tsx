"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/slide-partnership.png",
    title: "AWS × MAIT Partnership",
    subtitle: "Faculty & Team Collaboration",
  },
  {
    image: "/slide-campus.png",
    title: "MAIT Campus",
    subtitle: "Our Learning Hub",
  },
  {
    image: "/slide-workshop.png",
    title: "AWS Workshop 2024",
    subtitle: "Cloud Computing Event",
  },
  {
    image: "/slide-hackathon.png",
    title: "AWS PartyRock Hackathon",
    subtitle: "Build & Innovate",
  },
];

export default function Modules() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Total slides including duplicates for seamless loop
  const extendedSlides = [...slides, ...slides, ...slides];

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  // Reset position seamlessly when reaching end of second set
  useEffect(() => {
    if (currentIndex >= slides.length * 2) {
      const timeout = setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = "none";
          setCurrentIndex(currentIndex - slides.length);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if (trackRef.current) {
                trackRef.current.style.transition =
                  "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
              }
            });
          });
        }
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const goToSlide = (direction: "prev" | "next") => {
    stopAutoPlay();
    setCurrentIndex((prev) =>
      direction === "next" ? prev + 1 : Math.max(prev - 1, 0)
    );
    startAutoPlay();
  };

  // Each card width + gap (percentage-based for responsiveness)
  const [cardWidthPercent, setCardWidthPercent] = useState(30);
  const gapPercent = 2;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardWidthPercent(85); // Mobile width
      } else if (window.innerWidth < 1024) {
        setCardWidthPercent(45); // Tablet width
      } else {
        setCardWidthPercent(30); // Desktop width
      }
    };
    handleResize(); // Initial set
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-label text-xs font-bold tracking-[0.15rem] uppercase mb-3 text-secondary">
              What We Do
            </h2>
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-4 text-on-surface">
              EXPAND YOUR ARSENAL
            </h2>
            <p className="text-lg leading-relaxed text-on-surface-variant">
              The tools, the community, and the knowledge you need to master
              the AWS infrastructure.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => goToSlide("prev")}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 bg-surface-container-highest border border-outline-variant text-on-surface hover:bg-primary hover:text-on-primary shadow-sm hover:shadow"
              aria-label="Previous slide"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button
              onClick={() => goToSlide("next")}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 bg-surface-container-highest border border-outline-variant text-on-surface hover:bg-primary hover:text-on-primary shadow-sm hover:shadow"
              aria-label="Next slide"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Progress Dots */}

      </div>

      {/* Carousel Track */}
      <div
        className="relative"
        onMouseEnter={() => {
          setIsHovered(true);
          stopAutoPlay();
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          startAutoPlay();
        }}
      >
        <div
          ref={trackRef}
          className="flex"
          style={{
            gap: `${gapPercent}vw`,
            paddingLeft: "6vw",
            transform: `translateX(-${currentIndex * (cardWidthPercent + gapPercent)}vw)`,
            transition:
              "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          {extendedSlides.map((slide, index) => {
            const isActive =
              index % slides.length === currentIndex % slides.length;
            return (
              <div
                key={index}
                className="relative flex-shrink-0 rounded-2xl overflow-hidden group cursor-pointer"
                style={{
                  width: `${cardWidthPercent}vw`,
                  aspectRatio: "4/3",
                  minHeight: "280px",
                  maxHeight: "420px",
                  transition: "transform 0.5s ease",
                  transform: isActive ? "scale(1)" : "scale(0.96)",
                  opacity: 1,
                }}
              >
                {/* Background Image */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="30vw"
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 bg-gradient-to-t from-black/50 to-transparent">
                  <h3
                    className="text-xl md:text-2xl font-headline font-bold mb-1 drop-shadow-md"
                    style={{ color: "#ffffff" }}
                  >
                    {slide.title}
                  </h3>
                  <p
                    className="text-sm font-body drop-shadow-md"
                    style={{ color: "rgba(255, 255, 255, 0.9)" }}
                  >
                    {slide.subtitle}
                  </p>
                </div>

                {/* Top-right active indicator */}
                {isActive && (
                  <div
                    className="absolute top-4 right-4 w-2 h-2 rounded-full"
                    style={{
                      background: "var(--color-primary)",
                      boxShadow: "0 0 8px var(--color-primary-fixed-dim)",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

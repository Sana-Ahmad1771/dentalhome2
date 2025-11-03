"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { CheckCircle } from "lucide-react";

export default function BeforeAfterSection() {
  const [dividerPosition, setDividerPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setDividerPosition(Math.max(0, Math.min(100, percent)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) handleMove(e.clientX);
    };
    const handleTouchMove = (e) => {
      if (isDragging && e.touches.length > 0) handleMove(e.touches[0].clientX);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="bg-muted py-24 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex flex-col lg:flex-row-reverse items-center gap-14 lg:gap-20">
        {/* LEFT CONTENT */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-dark-1">
            Real Transformations,<br />
            <span className="text-primary">Beautiful Smiles</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Experience the visible difference of our precision treatments — from gentle whitening
            to complete smile makeovers. Every transformation is crafted with care and confidence.
          </p>

          <ul className="space-y-3 text-base md:text-md">
            {[
              "Precision Whitening Treatments",
              "Custom Smile Makeovers",
              "Invisible Aligners",
              "Restorative Dentistry",
              "Confidence-Boosting Results",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-gray-700 font-medium"
              >
                <CheckCircle size={20} className="text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT IMAGE COMPARISON */}
        <div
          ref={containerRef}
          className="lg:w-1/2 relative w-full max-w-[900px] h-[450px] rounded-3xl overflow-hidden border border-primary/20 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,0.1)] select-none"
          onMouseDown={handleMouseDown}
          onTouchStart={() => setIsDragging(true)}
        >
          {/* BEFORE IMAGE */}
          <Image
            src="/images/before-image.jpg"
            alt="Before dental treatment"
            fill
            className="object-cover"
            priority
          />

          {/* AFTER IMAGE */}
          <div
            className="absolute inset-0 transition-all duration-200 ease-linear"
            style={{
              backgroundImage: `url('/images/after-image.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              maskImage: `linear-gradient(to left, black ${dividerPosition}%, transparent ${
                dividerPosition + 10
              }%)`,
              WebkitMaskImage: `linear-gradient(to left, black ${dividerPosition}%, transparent ${
                dividerPosition + 10
              }%)`,
            }}
          ></div>

          {/* DIVIDER LINE */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-primary/90 z-20 shadow-[0_0_10px_rgba(0,0,0,0.3)]"
            style={{ left: `${dividerPosition}%` }}
          ></div>

          {/* HANDLE BUTTON */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary text-white border-4 border-white flex items-center justify-center z-30 shadow-lg cursor-grab active:cursor-grabbing transition-transform duration-200 hover:scale-110"
            style={{ left: `calc(${dividerPosition}% - 24px)` }}
            onMouseDown={handleMouseDown}
            onTouchStart={() => setIsDragging(true)}
          >
            <div className="font-bold text-lg tracking-wider">|||</div>
          </div>

          {/* LABELS */}
          <div className="absolute top-4 left-4 bg-white/80 text-primary text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
            Before
          </div>
          <div className="absolute top-4 right-4 bg-primary/90 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
            After
          </div>
        </div>
      </div>
    </section>
  );
}

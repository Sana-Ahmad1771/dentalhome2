"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/images/hero-11.jpg",
    titleLine1: "Bright Smiles",
    titleLine2: "Lasting Confidence",
    desc: "Transform your dental health with expert care, gentle treatments, and advanced technology — for a smile that shines every day.",
    btnText: "Book Appointment",
    btnLink: "/appointment",
    align: "left",
  },
  {
    id: 2,
    image: "/images/hero-22.jpg",
    titleLine1: "Modern Dental Care",
    titleLine2: "You Can Trust",
    desc: "Experience pain-free dentistry with cutting-edge techniques and a caring team dedicated to your comfort and confidence.",
    btnText: "Learn More",
    btnLink: "/about",
    align: "right",
  },
];

export default function HeroSliderVariant() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section
      className="relative w-full overflow-hidden group"
      style={{ minHeight: "calc(100vh - 100px)" }}
    >
      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Navigation, EffectFade, Pagination]}
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1500}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[calc(100vh-100px)] flex items-center overflow-hidden">
              {/* Background */}
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{
                  scale: activeIndex === index ? 1 : 1.05,
                  opacity: activeIndex === index ? 1 : 0.9,
                }}
                transition={{ duration: 6, ease: "easeInOut" }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Soft Overlay */}
              <div
                className={`absolute inset-0 backdrop-brightness-[0.55] bg-linear-to-tr from-primary/60 via-secondary/30 to-transparent`}
              ></div>

              {/* Content */}
              <div className="relative z-10 w-full">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-16 xl:px-24 flex">
                  <div
                    className={`${
                      slide.align === "left"
                        ? "ml-0 mr-auto text-left"
                        : slide.align === "right"
                        ? "ml-auto mr-0 text-left"
                        : "mx-auto text-center"
                    } max-w-[600px] lg:max-w-[700px]`}
                  >
                    {/* Headings */}
                    <motion.h1
                      key={slide.titleLine1}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight"
                    >
                      {slide.titleLine1}
                      <br />
                      <span className="block">
                        {slide.titleLine2}
                      </span>
                    </motion.h1>

                    {/* Divider line */}
                    <div className="w-24 h-[3px] bg-accent/80 mt-6 mb-8 rounded-full"></div>

                    {/* Paragraph */}
                    <motion.p
                      key={slide.desc}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="text-white text-base sm:text-lg md:text-xl leading-relaxed max-w-[90%]"
                    >
                      {slide.desc}
                    </motion.p>

                    {/* Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.6 }}
                    >
                      <Link
                        href={slide.btnLink}
                        className="mt-8 inline-block bg-accent text-white font-semibold px-10 py-3 rounded-full shadow-md hover:bg-white hover:text-accent border border-accent transition-all duration-300"
                      >
                        {slide.btnText}
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows (Always Visible on Hover) */}
      <div className="absolute inset-0 z-20 flex justify-between items-center px-4 md:px-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="p-4 bg-white/70 text-primary border border-gray-200 rounded-full hover:bg-accent hover:text-white transition-all duration-300"
        >
          <FaAngleLeft size={22} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="p-4 bg-white/70 text-primary border border-gray-200 rounded-full hover:bg-accent hover:text-white transition-all duration-300"
        >
          <FaAngleRight size={22} />
        </button>
      </div>
    </section>
  );
}

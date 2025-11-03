"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import {
  FaMagic,
  FaCalendarCheck,
  FaTooth,
  FaAward,
  FaDollarSign,
  FaSpa,
} from "react-icons/fa";

// ================= Vertical Image Slider Component =================
function VerticalImageSlider({ images, scrollDirection, speed = 30 }) {
  const containerRef = useRef(null);
  const [distance, setDistance] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (containerRef.current) {
      setDistance(containerRef.current.scrollHeight / 2);
    }
  }, [images]);

  useEffect(() => {
    if (scrollDirection === "down") {
      controls.start({
        y: [0, -distance],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      });
    } else {
      controls.start({
        y: [-distance, 0],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      });
    }
  }, [scrollDirection, distance, controls, speed]);

  const imageList = [...images, ...images]; // duplicate for seamless scroll

  return (
    <div className="relative overflow-hidden w-full h-[700px]">
      <motion.div
        ref={containerRef}
        className="flex flex-col items-center gap-4"
        style={{ willChange: "transform" }}
        animate={controls}
      >
        {imageList.map((image, idx) => (
          <div
            key={idx}
            className="relative shrink-0 w-[300px] sm:w-[350px] md:w-[300px] h-[220px] sm:h-[250px] md:h-[300px] overflow-hidden rounded-2xl"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ================= Main Section =================
export default function ExperienceDentalSection() {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const lastScrollY = useRef(0);

  const features = [
    {
      id: 1,
      icon: <FaMagic className="text-2xl text-accent" />,
      title: "INSTANT RESULTS",
      description:
        "State-of-the-art technology delivering faster, more precise results.",
    },
    {
      id: 2,
      icon: <FaAward className="text-2xl text-accent" />,
      title: "DECADES OF EXPERIENCE",
      description: "Our team is led by renowned clinicians.",
    },
    {
      id: 3,
      icon: <FaCalendarCheck className="text-2xl text-accent" />,
      title: "ONE-CLICK BOOKING",
      description: "Open evenings/weekends, same/next day.",
    },
    {
      id: 4,
      icon: <FaDollarSign className="text-2xl text-accent" />,
      title: "TRANSPARENT PRICING",
      description:
        "Straightforward pricing, insurance eligible, no surprises or up-sells.",
    },
    {
      id: 5,
      icon: <FaTooth className="text-2xl text-accent" />,
      title: "PAIN-FREE TREATMENTS",
      description: "No needles. No drills. Just comfort-first dentistry.",
    },
    {
      id: 6,
      icon: <FaSpa className="text-2xl text-accent" />,
      title: "COMPLIMENTARY COMFORTS",
      description:
        "Unwind with eye masks, meditations, and massage boots—all on the house.",
    },
  ];

  const gallery = [
    { alt: "Dental Room 1", src: "/images/dental-room-1.jpg" },
    { alt: "Dental Room 2", src: "/images/dental-room-2.jpg" },
    { alt: "Dental Room 3", src: "/images/dental-room-3.jpg" },
    { alt: "Smiling Patient", src: "/images/smillingpatient-2.jpg" },
    { alt: "Dental Sink Area", src: "/images/dentalsinkarea.jpg" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsInView(isVisible);

        if (isVisible) {
          if (currentScrollY > lastScrollY.current) {
            setScrollDirection("down");
          } else if (currentScrollY < lastScrollY.current) {
            setScrollDirection("up");
          }
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24">
        {/* Header + Features + Vertical Slider */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Side */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-1 leading-tight mb-10">
              Experience Dental Done <br />
              <span className="text-primary">Differently</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-10">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-start gap-4">
                  <div className="bg-gray-3 text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary text-sm tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 text-sm mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Auto-scrolling Image Slider */}
          <VerticalImageSlider
            images={gallery}
            scrollDirection={isInView ? scrollDirection : "down"}
            speed={35}
          />
        </div>
      </div>
    </section>
  );
}

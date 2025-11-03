"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FaSmile,
  FaSyringe,
  FaUserMd,
  FaRegGrinBeam,
  FaCrown,
  FaTeethOpen,
  FaTooth,
} from "react-icons/fa";

import {
  GiToothbrush,
} from "react-icons/gi";


const MegaMenu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.classList.add("backdrop-active");
    else document.body.classList.remove("backdrop-active");
    return () => document.body.classList.remove("backdrop-active");
  }, [open]);

  const menuCategories = [
    {
      title: "General Dentistry",
      tagColor: "bg-primary text-white",
      icon: FaTooth,
      basePath: "/general-dentistry",
      description:
        "Comprehensive oral care focused on prevention and overall dental health.",
      items: [
        {
          name: "Dental Checkup & Cleaning",
          slug: "checkup-cleaning",
          desc: "Regular exams and professional cleanings to keep your smile healthy.",
          icon: GiToothbrush,
        },
        {
          name: "Tooth Fillings",
          slug: "tooth-fillings",
          desc: "Repair cavities and restore tooth structure with safe, durable fillings.",
          icon: FaUserMd,
        },
        {
          name: "Tooth Extraction",
          slug: "tooth-extraction",
          desc: "Gentle and precise extractions for damaged or decayed teeth.",
          icon: FaSyringe,
        },
      ],
    },
    {
      title: "Cosmetic Dentistry",
      tagColor: "bg-secondary text-white",
      icon: FaSmile,
      basePath: "/cosmetic-dentistry",
      description:
        "Enhance your confidence with aesthetic treatments designed for a perfect smile.",
      items: [
        {
          name: "Teeth Whitening",
          slug: "teeth-whitening",
          desc: "Brighten your smile with safe and effective whitening treatments.",
          icon: FaRegGrinBeam,
        },
        {
          name: "Porcelain Veneers",
          slug: "veneers",
          desc: "Transform your smile with custom-made, natural-looking veneers.",
          icon: FaCrown,
        },
        {
          name: "Smile Design",
          slug: "smile-design",
          desc: "Personalized smile makeovers using advanced digital design technology.",
          icon: FaSmile,
        },
      ],
    },
    {
      title: "Restorative & Implants",
      tagColor: "bg-secondary/80 text-white",
      icon: FaCrown,
      basePath: "/restorative-implants",
      description:
        "Restore your teeth’s function and beauty through advanced restorative care.",
      items: [
        {
          name: "Dental Implants",
          slug: "dental-implants",
          desc: "Permanent tooth replacements that look and function like natural teeth.",
          icon: FaTooth,
        },
        {
          name: "Crowns & Bridges",
          slug: "crowns-bridges",
          desc: "Rebuild and strengthen damaged or missing teeth with precision restorations.",
          icon: FaCrown,
        },
        {
          name: "Dentures",
          slug: "dentures",
          desc: "Custom-fitted dentures designed for comfort, stability, and natural appearance.",
          icon: FaTeethOpen,
        },
      ],
    },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Dropdown Button */}
      <button className="py-1 text-body text-primary hover:text-secondary cursor-pointer flex items-center font-medium">
        Our Treatments <span className="ml-1 transition-transform">▾</span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 top-60 bg-black/30 backdrop-blur-sm z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />

            {/* Mega Menu */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="fixed left-0 w-full bg-white shadow-2xl border-t border-[#e4e0d4] z-50 overflow-hidden"
              style={{ top: "130px" }}
            >
              <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 py-12 overflow-y-auto max-h-[85vh]">
                {/* Header */}
                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-primary mb-2">
                    Discover Dental Treatments
                  </h3>
                  <p className="text-dark/70 max-w-2xl leading-relaxed">
                    Explore expert dental care services designed to restore your
                    oral health and enhance your smile with confidence.
                  </p>
                </div>

                {/* Categories */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                  {menuCategories.map((cat, i) => (
                    <div key={i} className="relative z-50 py-6">
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-lg mb-4 ${cat.tagColor}`}
                      >
                        <cat.icon className="text-base" />
                        {cat.title}
                      </div>

                      <p className="text-sm text-dark/70 mb-5 leading-relaxed">
                        {cat.description}
                      </p>

                      <ul className="space-y-4">
                        {cat.items.map((item, j) => (
                          <motion.li
                            key={j}
                            whileHover={{ x: 5 }}
                            className="flex justify-between items-start border-b border-gray-300/70 pb-3 group"
                          >
                            <Link
                              href={`${cat.basePath}/${item.slug}`}
                              className="block w-full"
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <h5 className="font-semibold text-dark group-hover:text-primary text-sm md:text-base transition-colors">
                                    {item.name}
                                  </h5>
                                  <p className="text-xs text-dark/60 leading-snug">
                                    {item.desc}
                                  </p>
                                </div>
                                <item.icon className="text-secondary opacity-70 group-hover:opacity-100 transition-opacity text-lg mt-1" />
                              </div>
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MegaMenu;

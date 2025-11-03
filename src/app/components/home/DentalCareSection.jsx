"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DentalCareSection() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-linear-to-b from-white to-teal-50 overflow-hidden">
      {/* 🌿 Top Floating Image */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-10 right-[8%] hidden md:block"
      >
        <div className="relative w-[300px] h-[220px] rounded-[30px] overflow-hidden shadow-lg">
          <Image
            src="/images/hero-33.jpg"
            alt="Patient smiling"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </motion.div>

      {/* 🌿 Bottom Floating Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute bottom-10 left-[8%] hidden md:block"
      >
        <div className="relative w-[260px] h-[200px] rounded-[30px] overflow-hidden shadow-lg">
          <Image
            src="/images/cleaning.jpg"
            alt="Dental equipment"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </motion.div>

      {/* 🌟 Text Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-4 inline-block"
        >
          Modern Dental Solutions
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-dark-1 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
        >
          Your Smile,{" "}
          <span className="text-primary">Our Commitment</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-2xl md:text-3xl font-medium text-[#333]/80 mb-6"
        >
          Confidence. Care. Comfort.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[#444]/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Discover gentle, expert dental treatments designed around your comfort.
          From preventive care to smile makeovers — we use advanced technology
          for lasting results and truly personalized care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Link
            href="/services"
            className="inline-block bg-[#00b6c9] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#ff8b5f] transition-all duration-300"
          >
            View Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

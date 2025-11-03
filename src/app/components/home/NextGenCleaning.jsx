"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NextGenCleaning() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 grid md:grid-cols-2 gap-12 items-center">
        {/*  Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-dark-1 leading-tight mb-4">
            Next-Gen Cleaning.
            <br />
            <span className="text-primary">Swiss-Made Precision.</span>
          </h2>

          <p className="text-paragraph text-lg leading-relaxed mb-6">
            Swiss Airflow technology delivers a scientifically proven clean—no
            harsh scraping, minimal to no discomfort. Clinically shown to remove{" "}
            <strong className="text-accent">2× more bacteria</strong> and whiten
            teeth up to{" "}
            <strong className="text-accent">4 shades in one visit.</strong>
          </p>

          <Link
            href="/appointment"
             className="inline-block bg-accent text-white font-bold px-8 py-3 rounded-full shadow-md border border-transparent hover:bg-primary hover:text-light hover:shadow-xl transition-all duration-300"
         >
            Book Now
          </Link>
        </motion.div>

        {/* 🎥 Right Side - Video */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-xl"
        >
          <video
            src="/videos/dental-video.mp4" // 🧩 Replace with your actual video path
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </motion.div>
      </div>
    </section>
  );
}

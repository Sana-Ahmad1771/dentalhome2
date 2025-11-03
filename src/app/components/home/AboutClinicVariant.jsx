"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

export default function AboutClinicVariant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative bg-linear-to-b from-white to-teal-50 py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex flex-col lg:flex-row-reverse items-center gap-16 relative z-10">
        {/* Right (Visual Section with Video) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex-1 flex justify-center items-center"
        >
          <div className="relative w-full max-w-[550px] aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/about.jpg"
              alt="Dental care video thumbnail"
              fill
              className="object-cover"
            />

            {/* Overlay with Play Button */}
            <div className="absolute inset-0 bg-black/30 flex justify-center items-center">
              <button
                onClick={() => setIsOpen(true)}
                className="w-20 h-20 flex justify-center items-center bg-white/90 text-accent rounded-full shadow-lg hover:bg-accent hover:text-white transition-all duration-300"
              >
                <Play className="w-8 h-8" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Left (Content Section) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">
            About Our Clinic
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-1 leading-tight mb-6">
            Advanced Care, <br />
            <span className="text-primary">Gentle Precision</span>
          </h2>

          <p className="text-dark/80 text-base md:text-lg leading-relaxed mb-6 max-w-[600px]">
            We combine modern technology with compassionate care to make every
            visit comfortable and effective. From precision cleanings to
            full-smile transformations, our focus is on your long-term dental
            health.
          </p>

          <p className="text-dark/70 text-base md:text-lg leading-relaxed mb-10 max-w-[580px]">
            Discover how our expertise and Swiss-made precision tools redefine
            comfort and confidence in dentistry.
          </p>

          <button
            onClick={() => setIsOpen(true)}
            className="inline-block bg-accent text-white font-bold px-8 py-3 rounded-full shadow-md border border-transparent hover:bg-primary hover:text-light hover:shadow-xl transition-all duration-300"
          >
            Watch Video
          </button>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            >
              <video
                src="/videos/about-video.mp4"
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-white text-2xl bg-black/50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

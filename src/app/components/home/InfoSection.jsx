"use client";
import { motion } from "framer-motion";
import {
  FaHeartPulse,
  FaTooth,
  FaBolt,
  FaUserDoctor,
} from "react-icons/fa6";

const features = [
  {
    id: 1,
    icon: <FaHeartPulse />,
    title: "Cardiac Care",
    description: "Comprehensive heart checkups and treatments.",
  },
  {
    id: 2,
    icon: <FaTooth />,
    title: "Dental Care",
    description: "Advanced dental treatments and hygiene services.",
  },
  {
    id: 3,
    icon: <FaBolt />,
    title: "Emergency",
    description: "24/7 emergency services available anytime.",
  },
  {
    id: 4,
    icon: <FaUserDoctor />,
    title: "Expert Doctors",
    description: "Experienced doctors with international expertise.",
  },
];

const InfoSection = () => {
  return (
    <section className="py-20 bg-linear-to-b from-white to-[#f5f8fa] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="group bg-white shadow-md rounded-2xl p-8 text-center transition-all duration-500 border border-gray-100 hover:bg-primary hover:shadow-xl hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-5">
                <motion.div
                  className="text-4xl text-primary transition-all duration-500 group-hover:scale-125 group-hover:text-white"
                >
                  {feature.icon}
                </motion.div>
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2 transition-colors duration-500 group-hover:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-500 group-hover:text-white/90">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;

"use client";
import { useEffect, useState } from "react";
import { FaTooth, FaUniversity, FaUsers, FaMedal } from "react-icons/fa";

export default function StatsSection() {
  const stats = [
    {
      icon: <FaTooth />,
      value: 500,
      label: "Project Done",
      color: "#eb9166",
    },
    {
      icon: <FaUniversity />,
      value: 250,
      label: "Satisfied Clients",
      color: "#eb9166",
    },
    {
      icon: <FaUsers />,
      value: 120,
      label: "Active Experts",
      color: "#eb9166",
    },
    {
      icon: <FaMedal />,
      value: 50,
      label: "Experience Years",
      color: "#eb9166",
    },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const timers = stats.map((stat, i) => {
      let start = 0;
      const step = Math.ceil(stat.value / 50);
      return setInterval(() => {
        start += step;
        if (start >= stat.value) {
          start = stat.value;
          clearInterval(timers[i]);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = start;
          return updated;
        });
      }, 40);
    });

    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <section className="relative py-24 bg-primary overflow-hidden">
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center justify-center"
          >
            {/* Soft Glow Ring */}
            <div
              className="absolute inset-0 mx-auto w-48 h-48 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-all duration-500"
              style={{ background: stat.color }}
            ></div>

            {/* Card */}
            <div
              className="relative w-72 h-44 rounded-2xl bg-white border-2 shadow-[0_0_25px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center gap-2 transition-all duration-500 hover:scale-110 group-hover:bg-accent group-hover:border-transparent"
              style={{ borderColor: stat.color }}
            >
              <div
                className="text-4xl transition-all duration-500 text-primary group-hover:text-white"
              >
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-gray-800 transition-all duration-500 group-hover:text-white">
                {counts[index]}+
              </h3>
              <p className="text-gray-600 font-medium transition-all duration-500 group-hover:text-white/90">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";
import { FaTelegramPlane, FaLinkedinIn, FaSkype } from "react-icons/fa";

export default function TeamSection() {
  const team = [
    {
      id: 1,
      name: "Jessica Pearl",
      role: "DENTISTRY SPECIALIST",
      image: "/images/team-1.jpg",
    },
    {
      id: 2,
      name: "Ethan Carter",
      role: "DENTISTRY SPECIALIST",
      image: "/images/team-2.jpg",
    },
    {
      id: 3,
      name: "Olivia Reed",
      role: "DENTISTRY SPECIALIST",
      image: "/images/team-3.jpg",
    },
    {
      id: 4,
      name: "James Anderson",
      role: "DENTISTRY SPECIALIST",
      image: "/images/team-4.jpg",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 text-center">
        {/* Heading */}
        <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">
          Our Team
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-1 leading-tight mb-12">
          Our Skilled <span className="text-primary">Professionals</span>
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="group relative bg-white rounded-2xl p-2 shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-80 w-full rounded-2xl overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay with icons */}
                <div className="absolute inset-0 bg-secondary/70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-all duration-500">
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full hover:bg-white hover:text-secondary transition-all duration-300"
                  >
                    <FaTelegramPlane />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full hover:bg-white hover:text-secondary transition-all duration-300"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full hover:bg-white hover:text-secondary transition-all duration-300"
                  >
                    <FaSkype />
                  </a>
                </div>
              </div>

              {/* Name + Role */}
              <div className="py-6">
                <h3 className="text-lg font-semibold text-dark-1">
                  {member.name}
                </h3>
                <p className="text-paragraph text-sm leading-relaxed mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

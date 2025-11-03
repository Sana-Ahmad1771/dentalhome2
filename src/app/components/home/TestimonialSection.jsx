"use client";

import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Sarah",
      role: "Founder & CEO",
      image: "/images/client1.jpg",
      text: "There are many variations of passages available but the majority have suffered alteration in some form by injected.",
    },
    {
      name: "Farhan",
      role: "Founder & CEO",
      image: "/images/client2.jpg",
      text: "There are many variations of passages available but the majority have suffered alteration in some form by injected.",
    },
    {
      name: "Abdullah",
      role: "Founder & CEO",
      image: "/images/client3.jpg",
      text: "There are many variations of passages available but the majority have suffered alteration in some form by injected.",
    },
    {
      name: "Mariyam",
      role: "Founder & CEO",
      image: "/images/client4.jpg",
      text: "There are many variations of passages available but the majority have suffered alteration in some form by injected.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 text-center">
        {/* Heading */}
        <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">
          Testimonials
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-1 leading-tight mb-10">
          What Client <span className="text-primary">Say's</span>
        </h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true} // ✅ enables continuous looping
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-primary/20 shadow-sm rounded-2xl p-8 text-left relative flex flex-col justify-between h-full border border-secondary/20 hover:shadow-lg transition-all">
                <FaQuoteLeft className="text-secondary text-3xl mb-4" />
                <p className="text-paragraph mb-8">{item.text}</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full border-2 border-primary p-2 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-1">{item.name}</h4>
                    <p className="text-paragraph text-sm leading-relaxed mb-1">{item.role}</p>
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-accent rounded-b-2xl"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots Below Cards */}
        <div className="custom-pagination mt-8 flex justify-center gap-3"></div>
      </div>

      {/* Pagination Styling */}
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #bcf8ff; /* light version of primary */
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background-color:  #00b6c9; /* your dark blue secondary */
          transform: scale(1.3);
        }
      `}</style>
    </section>
  );
}

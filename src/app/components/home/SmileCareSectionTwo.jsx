"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/scrollbar";

const services = [
  {
    id: 1,
    title: "GLEAMFIT ALIGNERS",
    description: "3D scan, bite analysis, and custom aligner treatment.",
    btn: "BOOK CONSULTATION",
    img: "/images/glame.jpg",
    width: 300,
    height: 192,
  },
  {
    id: 2,
    title: "ADVANCED WHITENING",
    description: "Dentist-developed gel whitening treatment.",
    btn: "BOOK WHITENING",
    img: "/images/white-teeth.jpg",
    width: 300,
    height: 192,
  },
  {
    id: 3,
    title: "AIRFLOW® CLEANING",
    description: "Powerful clean. Comfort-first tech. Gentle by design.",
    btn: "BOOK CLEANING",
    img: "/images/cleaning.jpg",
    width: 300,
    height: 192,
  },
  {
    id: 4,
    title: "GLEAM EXAM & X-RAYS",
    description: "Advanced oral exam and comprehensive imaging.",
    btn: "BOOK EXAM & X-RAYS",
    img: "/images/oralexam.jpg",
    width: 300,
    height: 192,
  },
  {
    id: 5,
    title: "GLEAMGUARD",
    description: "The custom nightguard that protects your smile.",
    btn: "BOOK GLEAMGUARD",
    img: "/images/guard.jpg",
    width: 300,
    height: 192,
  },
  {
    id: 6,
    title: "ANTICAVITY",
    description: "NO drills.No Needles. Non-invasive cavity treatment.",
    btn: "BOOK GLEAMGUARD",
    img: "/images/anticavity.jpg",
    width: 300,
    height: 192,
  },
];

export default function SmileCareSection() {
  return (
    <section className="bg-white py-20 relative">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-1 leading-tight mb-2">
              All the Care <br /><span className="text-primary"> Your Smile Needs</span>
            </h2>
          </div>
          <p className="text-paragraph text-base md:text-lg leading-relaxed mb-6 max-w-lg">
            Expert-led, gentle care that supports your long-term health—because
            your mouth is connected to everything.
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Scrollbar]}
            slidesPerView={"auto"}
            spaceBetween={24}
            scrollbar={{
              el: ".custom-scrollbar",
              draggable: true,
            }}
            grabCursor={true}
            className="cards-swiper"
          >
            {services.map((service) => (
              <SwiperSlide
                key={service.id}
                className="w-[280px]! sm:w-[300px]! bg-primary/20 text-dark-1 rounded-2xl overflow-hidden flex flex-col justify-between"
              >
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-center mt-6 mb-4">
                    {service.title}
                  </h3>
                  <div className="relative w-full h-48">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 280px, 300px"
                      quality={75}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
                        '<svg width="300" height="192" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="192" fill="#f0f0f0"/></svg>'
                      ).toString('base64')}`}
                      className="object-cover rounded-2xl"
                    />
                  </div>
                  <p className="text-center text-paragraph text-sm leading-relaxed mt-4 px-4">
                    {service.description}
                  </p>
                </div>
                <div className="flex justify-center mt-6 mb-6">
                  <button className="inline-block bg-primary text-white font-semibold px-6 py-2 rounded-2xl shadow-md hover:bg-secondary hover:text-white transition-all duration-300">
                    {service.btn}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Scrollbar Below */}
          <div className="custom-scrollbar mt-6 mx-auto"></div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar {
          width: 60%;
          height: 4px;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          position: relative;
        }
        .swiper-scrollbar-drag {
          background: rgba(0, 0, 0, 0.5);
          border-radius: 10px;
          cursor: grab;
          transition: background 0.2s ease;
        }
        .swiper-scrollbar-drag:hover {
          background: rgba(0, 0, 0, 0.6);
        }
      `}</style>
    </section>
  );
}

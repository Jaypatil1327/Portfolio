"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";
import { X, ZoomIn, Award } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const certificatesList = [
  {
    title: "Applied Machine Learning in Python",
    issuer: "Coursera",
    image: "/images/coursera2.jpeg",
  },
  {
    title: "Data Structures & Algorithms Mastery",
    issuer: "LeetCode & Problem Solving",
    image: "/images/dsa1.png",
  },
  {
    title: "Google IT Support Professional",
    issuer: "Google",
    image: "/images/google_it.png",
  },
  {
    title: "Mastering C++ Programming",
    issuer: "Udemy",
    image: "/images/udemy.jpg",
  },
  {
    title: "Applied Machine Learning in Python",
    issuer: "Coursera",
    image: "/images/coursera2.jpeg",
  },
  {
    title: "Data Structures & Algorithms Mastery",
    issuer: "LeetCode & Problem Solving",
    image: "/images/dsa1.png",
  },
  {
    title: "Google IT Support Professional",
    issuer: "Google",
    image: "/images/google_it.png",
  },
  {
    title: "Mastering C++ Programming",
    issuer: "Udemy",
    image: "/images/udemy.jpg",
  },
];

function Slider() {
  const [activeCert, setActiveCert] = useState<{ title: string; issuer: string; image: string } | null>(null);

  return (
    <div className="w-full relative px-2 md:px-4">
      <Swiper
        modules={[Keyboard, Autoplay, Pagination]}
        keyboard={{ enabled: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        centeredSlides={true}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="w-full py-6 pb-10"
      >
        {certificatesList.map((cert, idx) => (
          <SwiperSlide key={idx} className="pb-8">
            {({ isActive }) => (
              <div
                onClick={() => setActiveCert(cert)}
                className={`
                  group cursor-pointer relative rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-md transition-all duration-500
                  ${isActive ? "scale-100 ring-1 ring-neutral-400 dark:ring-neutral-600 shadow-lg" : "scale-95 opacity-80"}
                `}
              >
                {/* Certificate Image Frame */}
                <div className="relative w-full h-48 sm:h-56 bg-neutral-100 dark:bg-neutral-950 flex items-center justify-center overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain p-2 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Zoom overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                    <ZoomIn className="w-4 h-4" />
                    <span className="text-xs font-semibold">View Certificate</span>
                  </div>
                </div>

                {/* Caption Bar */}
                <div className="p-3.5 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 space-y-0.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                    <Award className="w-3.5 h-3.5" />
                    <span>{cert.issuer}</span>
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-neutral-900 dark:text-white line-clamp-1">
                    {cert.title}
                  </h4>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fullscreen Certificate Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white dark:bg-neutral-900 rounded-3xl p-4 sm:p-6 border border-neutral-200 dark:border-neutral-800 shadow-2xl space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                  {activeCert.issuer}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">
                  {activeCert.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                className="p-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative w-full h-[55vh] bg-neutral-950 rounded-2xl overflow-hidden flex items-center justify-center">
              <Image
                src={activeCert.image}
                alt={activeCert.title}
                fill
                className="object-contain p-2"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Slider;

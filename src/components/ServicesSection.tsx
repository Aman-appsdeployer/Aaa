import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { ServiceCard } from "./ServiceCard";
import { servicesData } from "@/data";

export const ServicesSection: React.FC = () => {
  const swiperRef = useRef<any>(null); // Reference for Swiper instance
  let intervalId: ReturnType<typeof setTimeout> | null = null;


  const handleMouseEnter = () => {
    if (swiperRef.current) {
      // Start moving the slider on hover
      intervalId = setInterval(() => {
        swiperRef.current.slideNext(); // Slide to the next slide
      }, 5000); // Change slide every 5 second
    }
  };

  const handleMouseLeave = () => {
    if (intervalId) {
      clearInterval(intervalId); // Stop sliding when hover ends
      intervalId = null;
    }
  };

  return (
    <div
      className="rounded-none w-full max-w-[1200px] mx-auto relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Swiper Wrapper */}
      <Swiper
        modules={[Navigation]} // Include the Navigation module
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true} // Enable infinite scrolling
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
        className="my-swiper"
      >
        {servicesData.services.map((service, index) => (
          <SwiperSlide key={index}>
            <ServiceCard
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
              imageAlt={service.imageAlt}
              customStyles={service.customStyles}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="swiper-button-next text-white hidden lg:block"></div>
      <div className="swiper-button-prev text-white hidden lg:block"></div>
    </div>
  );
};

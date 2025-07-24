import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import img1 from "../../assets/images/school1.jpeg";
import img2 from "../../assets/images/school2.jpeg";
import img3 from "../../assets/images/school3.jpeg";
import img4 from "../../assets/images/school4.jpeg";
import img5 from "../../assets/images/school5.jpeg";
import img6 from "../../assets/images/school6.jpeg";
import img7 from "../../assets/images/school7.jpeg";
import img8 from "../../assets/images/school8.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const CreativeWorkSection = () => {
  return (
    <section className="relative z-10 py-20 px-6 md:px-20 overflow-hidden bg-[#0b0f1a]">
      {/* Glowing BG effect */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-green-500 opacity-30 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600 opacity-30 rounded-full blur-2xl animate-pulse-slow" />

      <div className="relative z-20 text-center text-white">
        <h2 className="text-6xl md:text-8xl anton-regular text-secondary  mb-2"> Portfolio</h2>
        <h3 className="text-4xl md:text-6xl anton-regular  mb-18">My Creative Work In School</h3>
      </div>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full max-w-6xl mx-auto"
      >
        {images.map((img, index) => (
          <SwiperSlide
            key={index}
            className="bg-[#151a28] rounded-2xl shadow-xl border border-gray-700 hover:shadow-green-500/40 transition duration-300 overflow-hidden"
            style={{ width: "300px", height: "auto" }}
          >
            <img
              src={img}
              alt={`Creative Work ${index + 1}`}
              className="w-full h-80 object-cover rounded-t-2xl"
            />
            <div className="p-4 text-white text-center">
              <h4 className="font-bold text-lg mb-1">School Event</h4>
              <p className="text-sm text-gray-300">Mockup, Design, Inspiration</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CreativeWorkSection;

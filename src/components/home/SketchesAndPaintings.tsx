import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../assets/images/p1.jpeg";
import img2 from "../../assets/images/p2.jpeg";
import img3 from "../../assets/images/p3.jpeg";
import img4 from "../../assets/images/p4.jpeg";
import img5 from "../../assets/images/p5.jpeg";
import img6 from "../../assets/images/p6.jpeg";
import img7 from "../../assets/images/p7.jpeg";
import img8 from "../../assets/images/p8.jpeg";
import img9 from "../../assets/images/p9.jpeg";
import img10 from "../../assets/images/p10.jpeg";
import img11 from "../../assets/images/p11.jpeg";
import img12 from "../../assets/images/p12.jpeg";
import img13 from "../../assets/images/p13.jpeg";
import img14 from "../../assets/images/p14.jpeg";
import img15 from "../../assets/images/p15.jpeg";
import img16 from "../../assets/images/p16.jpeg";

const paintingData = [
  { title: "Silent Awakening", category: "spiritual portrait painting", image: img1 },
  { title: "The Hidden Narrative", category: "optical illusion painting", image: img2 },
  { title: "Whispers of Dusk", category: "landscape painting, with acrylic paints on Paper", image: img3 },
  { title: "Silent Awakening", category: "spiritual portrait painting", image: img4 },
  { title: "Silent Awakening", category: "spiritual portrait painting", image: img5 },
  { title: "Silent Awakening", category: "spiritual portrait painting", image: img6 },
  { title: "Silent Awakening", category: "spiritual portrait painting", image: img7 },
  { title: "Silent Awakening", category: "spiritual portrait painting", image: img8 },
  { title: "Silent Awakening", category: "spiritual portrait painting", image: img9 },
  { title: "Silent Awakening", category: "spiritual portrait painting", image: img10 },
  { title: "Silent Awakening", category: "spiritual portrait painting", image: img11 },
  { title: "Silent Awakening", category: "spiritual portrait painting", image: img12 },
  { title: "Silent Awakening", category: "spiritual portrait painting", image: img13 },
  { title: "Silent Awakening", category: "spiritual portrait painting", image: img14 },
  { title: "Silent Awakening", category: "spiritual portrait painting", image: img15 },
  { title: "Silent Awakening", category: "spiritual portrait painting", image: img16 },
];

const SketchesAndPaintings = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="relative z-10 py-20 px-6 md:px-20 overflow-hidden bg-[#0b0f1a] text-white">
      {/* Glowing Background */}
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-green-500 opacity-20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-700 opacity-25 rounded-full blur-2xl animate-pulse-slow" />

      {/* Headings */}
      <div className="relative z-20 text-center mb-16">
        <h2 className="text-4xl md:text-8xl text-secondary anton-regular mb-5">Sketches & Painting</h2>
        <h3 className="text-3xl md:text-5xl anton-regular text-white md:py-6">My Some Beautiful Creativity Paintings & Sketches</h3>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="w-full max-w-7xl mx-auto"
      >
        {paintingData.map((item, index) => (
          <SwiperSlide
            key={index}
            className="group bg-[#151a28] rounded-3xl overflow-hidden border border-gray-700 hover:shadow-green-400/40 transition duration-500"
          >
            <div
              className="relative overflow-hidden cursor-zoom-in"
              onClick={() => setSelectedImage(item.image)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>
            <div className="p-6 text-center">
              <p className="text-sm text-green-400 mb-1">{item.category}</p>
              <h4 className="font-bold text-xl text-white">"{item.title}"</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Full Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full View"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl border border-white"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
};

export default SketchesAndPaintings;

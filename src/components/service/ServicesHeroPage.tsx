import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { motion } from "framer-motion";

import service1 from "../../assets/images/p5.jpeg";
import service2 from "../../assets/images/p11.jpeg";
import service3 from "../../assets/images/school7.jpeg";
import service4 from "../../assets/images/school8.jpeg";

const ServicesHeroPage = () => {
  return (
    <section className="relative bg-[#0B0E1E] text-white overflow-hidden py-20 px-4 md:px-20">
      {/* 💫 Glowing background blobs */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-fuchsia-500 opacity-20 blur-3xl rounded-full z-0 animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-purple-500 opacity-20 blur-3xl rounded-full z-0 animate-pulse" />

      {/* 🧑‍🎨 Header */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-fuchsia-400 py-20 md:py-30">
          Creative Art Services
        </h1>
        <p className="-mt-6 text-lg md:text-xl text-gray-300">
          Discover workshops, sketching tutorials, and personalized mentorship by{" "}
          <span className="text-white font-semibold">Shivani Chauhan</span>.
        </p>
      </motion.div>

      {/* ✨ Swiper Gallery */}
      <div className="relative z-10 mt-12">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="max-w-4xl mx-auto"
        >
          {[service1, service2, service3, service4].map((img, i) => (
            <SwiperSlide
              key={i}
              className="bg-white rounded-xl overflow-hidden w-[220px] md:w-[260px]"
            >
              <img
                src={img}
                alt={`Art ${i + 1}`}
                className="w-full h-[200px] md:h-[500px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 📝 Teacher Message Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="relative z-10 max-w-5xl mx-auto mt-16 px-4 md:px-8 py-10 bg-[#11182e] rounded-2xl border border-fuchsia-500/10 shadow-lg"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-fuchsia-300 text-center mb-6">
          A Message from Shivani Chauhan
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-7 font-serif whitespace-pre-line">
          {`In a world rushing toward results and recognition, art gently reminds us to pause… to observe… and to feel. As a drawing teacher, I don’t just teach how to draw — I guide students on a journey of self-expression, creativity, and confidence.

Every child, teen, or adult who walks into my class carries their own story — some are shy with their lines, unsure of where to begin. Others are bold, wild with colors, seeking refinement. I welcome them all. Because art has no prerequisites — only passion and curiosity.

Drawing is not just a skill. It is a language.
A language that doesn’t require words to speak, yet has the power to say everything. Through lines, shading, contrast, and imagination, we discover our own voice — one that often gets lost in textbooks or timelines.

My goal is to awaken that voice.

In my years of teaching, I’ve seen how a single pencil can build not just sketches, but self-worth. I’ve watched hesitant hands grow steadier with each class. I’ve seen eyes light up when a student realizes they created something beautiful from nothing but paper and feeling.

I teach techniques, yes — from fundamentals like line, shape, and perspective to advanced portrait, charcoal rendering, and modern illustration. But I also teach patience, observation, and joy. Because art is not about perfection — it is about expression.

Why drawing?
Because drawing teaches us how to truly “see.”
Not just look at the world, but observe it. The folds in a sleeve, the shadows across a cheek, the light between leaves — drawing turns the ordinary into art, and the unnoticed into meaning.

In my classes, students are encouraged to explore, to make mistakes, to reimagine. We don’t chase speed. We chase clarity, creativity, and confidence. Whether you are a beginner holding a pencil for the first time or a young artist hoping to sharpen your skill, you will find in me not just a teacher, but a mentor who walks with you — stroke by stroke.

I believe in slow teaching, deep learning, and joyful creativity.
Our sessions are designed not only to build technique but to boost self-esteem, reduce stress, and develop an emotional connection with art. There is no rush — because creativity blooms when we give it space.

Workshops, one-on-one guidance, curated exercises, and feedback — I offer more than training. I offer an experience.

In every class, I remind my students:
“Your sketch is your truth. Don’t compare it. Don’t erase it. Own it.”

And over time, their lines grow stronger. Not just on paper, but in life.

As a teacher, I’m proud to say I’ve mentored over 100+ aspiring artists, some of whom have gone on to participate in exhibitions, competitions, or simply found joy in sketching their thoughts. That, to me, is success — because art empowers.

So, if you're searching for more than just drawing lessons — if you're looking for a place to breathe, to create, and to feel seen — welcome. You belong here.

Let’s sketch your story. Let’s color your dreams. Let’s grow not only as artists but as humans who observe, feel, and express with courage.

With love & creativity,
– Shivani Chauhan
Drawing Educator | Art Guide | Creative Soul`}
        </p>
      </motion.div>

      {/* 🎨 Services Cards */}
      <div className="relative z-10 mt-20 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Portrait Masterclass",
            desc: "Lifelike portraits with pencil, charcoal & pastels.",
          },
          {
            title: "Sketching Bootcamp",
            desc: "Step-by-step sketching for beginners to pros.",
          },
          {
            title: "Art Therapy",
            desc: "Mindful art to relieve stress and heal emotions.",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-[#161B30] p-5 rounded-xl shadow-lg border border-fuchsia-500/10 hover:border-fuchsia-400/40 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-fuchsia-300">
              {card.title}
            </h3>
            <p className="text-gray-300 mt-2 text-sm">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* 💬 Thought Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="relative z-10 text-center mt-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          “Art is not what you see, but what you make others see.”
        </h2>
        <p className="mt-3 text-sm md:text-base text-gray-400">– Shivani Chauhan</p>
      </motion.div>
    </section>
  );
};

export default ServicesHeroPage;

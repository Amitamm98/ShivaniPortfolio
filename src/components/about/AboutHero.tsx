import { motion } from "framer-motion";
import teacherImg from "../../assets/images/teacher2.avif";
import cvImage from "../../assets/images/shivaniCVpdf.pdf";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B0E1E] text-white py-20 px-5 md:px-20 max-w-[1536px] mx-auto">
      {/* 🔮 Animated Glowing Background */}
      <div className="absolute  -left-40 w-[500px] h-[500px] bg-purple-600 opacity-20 blur-[200px] rounded-full animate-pulse-slow z-0" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-fuchsia-600 opacity-25 blur-[180px] rounded-full animate-pulse-slow z-0" />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-5xl md:text-7xl font-bold mb-16 z-10 relative md:my-40"
      >
        About <span className="text-fuchsia-400">Shivani Chauhan</span>
      </motion.h2>

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* 🖼️ Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <img
            src={teacherImg}
            alt="Drawing Teacher Shivani"
            className="w-full rounded-xl shadow-xl border border-fuchsia-500"
          />
        </motion.div>

        {/* 📝 Description & CV */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h3 className="text-3xl md:text-4xl font-semibold">
            Passionate Drawing Educator 🎨
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Hello, I’m <span className="text-fuchsia-400 font-medium">Shivani Chauhan</span>,
            a dedicated drawing teacher with over 2 years of experience nurturing creative minds.
            My goal is to make every student fall in love with art — whether it’s pencil sketching,
            charcoal drawing, or colorful creations.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            I specialize in helping beginners find their confidence while challenging advanced students
            to refine their techniques. My classes are more than just lessons — they’re journeys into
            imagination, observation, and emotion.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            I believe in a hands-on, heart-led approach where students not only learn how to draw, but also
            express who they are through their art. I conduct personalized sessions, themed workshops,
            and creative contests to keep learning fun and engaging.
          </p>

          {/* 📄 View CV Inline */}
          <a
            href={cvImage}
            target=""
            className="inline-block bg-gradient-to-r from-fuchsia-600 to-purple-700 hover:opacity-90 transition px-6 py-3 rounded-lg text-lg font-semibold"
          >
            View My CV
          </a>
        </motion.div>
      </div>

      {/* ✨ Skill Cards */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 z-10 relative"
      >
        {[
          {
            title: "Sketching & Portraits",
            desc: "Mastery in pencil shading, realistic sketches, and charcoal depth.",
          },
          {
            title: "Creative Workshops",
            desc: "Hosted 20+ vibrant sessions encouraging creative exploration in kids & adults.",
          },
          {
            title: "Student-Centered Learning",
            desc: "Tailored guidance for every skill level with patience and passion.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-[#14172a] border border-fuchsia-800 rounded-xl p-6 hover:shadow-fuchsia-500/30 hover:shadow-xl transition-all"
          >
            <h4 className="text-xl font-bold mb-2 text-fuchsia-400">{card.title}</h4>
            <p className="text-gray-300">{card.desc}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default AboutHero;

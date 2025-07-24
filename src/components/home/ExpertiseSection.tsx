import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "Graphite & Charcoal",
    percent: 95,
    color: "bg-blue-500",
  },
  {
    name: "Watercolors / Acrylics",
    percent: 85,
    color: "bg-orange-400",
  },
  {
    name: "Art Composition & Perspective",
    percent: 75,
    color: "bg-pink-500",
  },
];

const stats = [
  {
    title: "Fabric Paintings, Stone Paintings and Crafts.",
    value: 80,
    color: "text-pink-400 border-pink-400",
  },
  {
    title: "Lippan Art, Mandala Art, Sketches",
    value: 56,
    color: "text-green-400 border-green-400",
  },
  {
    title: "Wall paintings",
    value: 60,
    color: "text-orange-400 border-orange-400",
  },
  {
    title: "Canvas Paintings.",
    value: 70,
    color: "text-cyan-400 border-cyan-400",
  },
];

const ExpertiseSection: React.FC = () => {
  return (
    <section className="bg-black text-white px-7 md:px-20 py-16" id="expertise ">
      <motion.h2 
        initial={{ opacity: 0, x: -30 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-7xl md:text-8xl anton-regular text-secondary mb-2 flex justify-center items-center py-10 "
      >
         Expertise
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-5xl anton-regular mb-6 text-white py-6"
      >
        My Skills & Tools
      </motion.h3>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#EAEAEA] text-base leading-relaxed">
            Art is more than marks on a page — it’s a language of emotion, thought,
            and imagination. As a drawing teacher, I believe every student holds a
            story waiting to be expressed through line, form, and shade. Whether
            it’s a bold charcoal sketch or a gentle pencil line, each stroke
            captures not just technique, but a moment, a feeling, a truth. I teach
            not only how to draw — but how to see. To observe the world with
            wonder, to find beauty in simplicity, and to translate thought into
            visual poetry.
          </p>
          <br />
          <p className="text-[#EAEAEA] text-base leading-relaxed">
            From the first contour to the final detail, I guide learners through
            foundational skills, gesture drawing, shading techniques, perspective,
            and composition. But more importantly, I nurture confidence and
            creativity. Because in art, there are no mistakes—only new directions.
            Every erased line teaches patience. Every attempt reveals growth. And
            every drawing shows progress. In my classes, students don’t just learn
            to draw objects. They learn to draw emotion. To sketch joy. To shade
            sorrow. To express what words sometimes cannot.
          </p>
          <br />
          <p className="text-[#EAEAEA] text-base leading-relaxed">
            I use a range of tools—from graphite pencils and charcoal sticks to
            watercolors and digital tablets—helping learners find the medium that
            feels most like home. Through live demos, feedback sessions, and
            personal mentorship, I create a space where artists of all ages can
            flourish. I’ve led workshops, built creative curriculums, and mentored
            budding artists into confident creators. Some now teach others. Some
            freelance. Some just draw for joy. And that, to me, is success.
          </p>
          <br />
          <p className="text-[#EAEAEA] text-base leading-relaxed">
            Because every artist has a voice, and every line they draw tells a part
            of their story. And my purpose is to help that story unfold—one pencil
            stroke at a time. 🎨✏️
          </p>

          <button className="font-kindsans-bold flex group  relative z-20 py-20">
            <p className="py-4 px-5 bg-secondary text-white hover:bg-fuchsia-700 text-xl">
              Rate Me
            </p>
            <div className="bg-[#D00003] p-[10px]">
              <div className="size-10 flex justify-center items-center border border-white rounded-full group-hover:bg-white transition-all duration-500">
                <svg
                  width="14"
                  height="6"
                  viewBox="0 0 14 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.205 4.60289L12.983 2.82488C13.042 2.76594 13.0751 2.68599 13.0751 2.60263C13.0751 2.51927 13.042 2.43932 12.983 2.38038L11.205 0.602371C11.1611 0.558277 11.105 0.528222 11.044 0.516016C10.9829 0.50381 10.9197 0.510002 10.8621 0.533807C10.8046 0.557613 10.7555 0.59796 10.7209 0.649734C10.6864 0.701507 10.668 0.762375 10.668 0.824622L10.6685 2.28837L0.314696 2.28792V2.91734L10.6685 2.91689L10.668 4.38064C10.668 4.44289 10.6864 4.50375 10.7209 4.55553C10.7555 4.6073 10.8046 4.64765 10.8621 4.67145C10.9197 4.69526 10.9829 4.70145 11.044 4.68925C11.105 4.67704 11.1611 4.64698 11.205 4.60289Z"
                    className="fill-[#F5F5F5] group-hover:fill-[#F20003] transition-all duration-500"
                  />
                </svg>
              </div>
            </div>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span className="text-sm font-bold">{skill.percent}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percent}%` }}
                    transition={{ duration: 1 }}
                    className={`${skill.color} h-3 rounded-full`}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-10">
            {stats.map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className={`border-2 ${item.color} p-4 rounded-xl text-center hover:shadow-xl hover:shadow-${item.color.split(" ")[0]}/40 transition-all`}
              >
                <p className="text-3xl font-bold mb-2">{item.value}</p>
                <p className="text-sm text-white font-medium leading-tight">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;

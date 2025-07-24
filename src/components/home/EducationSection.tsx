import React from "react";
import { motion } from "framer-motion";
import certificate1 from "../../assets/images/c1.jpeg"
import certificate2 from "../../assets/images/c2.jpeg"
import certificate3 from "../../assets/images/c3.jpeg"

const timeline = [
  {
    year: "2023 – 2025",
    heading: "Teaching Experience",
    entries: [
      "Two Years teaching Experience in ",
      "Public Inter Collage.Doiwala",
      "",
    ],
    color: "bg-yellow-400",
  },
  {
    year: "2021 -2023",
    heading: "A Bachelor of Education",
    entries: ["A Bachelor of Education", "HNB Garhwal university"],
    color: "bg-green-500",
  },
   {
    year: "2019 -2021",
    heading: "Mastering",
    entries: ["Master of Arts", "HNB Garhwal university"],
    color: "bg-green-500",
  },
  {
    year: "2016 – 2019",
    heading: "Graduation",
    entries: ["Bachelor of Arts", "HNB Garhwal university"],
    color: "bg-yellow-400",
  },
  {
    year: "2014 – 2016",
    heading: "School Qualifications",
    entries: ["High School – Uttarakhand Board", "Intermediate – Uttarakhand Board"],
    color: "bg-green-500",
  },
];

const EducationSection: React.FC = () => {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-20">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <h2 className="text-6xl md:text-8xl anton-regular text-secondary mb-1"> Teaching & Education</h2>
        <h3 className="text-2xl md:text-5xl anton-regular text-white py-6">My Education and Teaching Journey</h3>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-xl border border-gray-700 shadow-lg bg-[#1A1B2E] hover:shadow-green-500/20 transition-all"
            >
              <div className="flex justify-between items-center mb-3">
                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${item.color} text-black`}>{item.year}</span>
                <h4 className="text-2xl anton-regular text-white">{item.heading}</h4>
              </div>
              <ul className="list-disc list-inside text-gray-300 text-sm pl-4">
                {item.entries.map((entry, idx) => (
                  <li key={idx}>{entry}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 items-center"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={certificate1}
            alt="Talent Certificate"
            className="w-full max-w-sm rounded-xl shadow-lg hover:shadow-yellow-400/30 transition duration-300"
          />
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={certificate2}
            alt="Board Certificate"
            className="w-full max-w-sm rounded-xl shadow-lg hover:shadow-green-400/30 transition duration-300"
          />
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={certificate3}
            alt="Board Certificate"
            className="w-full max-w-sm rounded-xl shadow-lg hover:shadow-green-400/30 transition duration-300"
          />
        </motion.div>
        
      </div>
    </section>
  );
};

export default EducationSection;

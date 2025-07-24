import teacher from "../../assets/images/teacher.avif";
import cvImage from "../../assets/images/shivaniCVpdf.pdf"; // 👈 replace with your actual CV image path
import { motion } from "motion/react";

const HomeAboutMe = () => {
  return (
    <div className="relative max-w-[1536px] mx-auto bg-[#0B0E1E] overflow-hidden">
      {/* 🔮 Glowing background orbs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600 opacity-20 blur-3xl rounded-full z-0 animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-fuchsia-600 opacity-20 blur-3xl rounded-full z-0 animate-pulse" />

      <div className="relative z-10 flex justify-center items-center py-38 md:py-30">
        <h1 className="anton-regular text-secondary text-6xl md:text-8xl">About Me.</h1>
      </div>

      <div className="relative z-10 md:flex flex-row gap-15 pb-8 -my-16 md:-my-4">
        <div className="mx-4 md:mx-18 w-[300px] md:w-[650px]">
          <motion.img
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full"
            src={teacher}
          />
        </div>

        <div>
          <h1 className="text-white anton-regular text-4xl md:text-5xl py-7 md:py-0 px-5 md:px-0">
            Unleash Your Creativity
          </h1>
          <p className="text-white font-semibold text-2xl py-8 px-5 md:px-0">
            A Passionate Drawing Educator with over 2+ years<br />of experience nurturing creative minds and bringing<br />
            imagination to life through lines, shades, and strokes.
          </p>
          <p className="text-white text-lg py-4 px-5 md:px-0">
            Currently I’m guiding students across various skill levels,<br />
            I specialize in sketching, portrait drawing, charcoal art, and<br />
            modern illustration. I've mentored 100+ budding artists and<br />
            hosted multiple workshops, fostering confidence and<br />
            expression through art.
          </p>

          {/* 📂 Download CV Button: Opens first then lets user download */}
          <a
            href={cvImage}
            target="_blank"
            rel="noopener noreferrer"
            className="font-kindsans-bold flex group relative z-20 py-20 md:py-40 px-5 md:px-0"
          >
            <p className="py-4 px-5 bg-secondary text-white hover:bg-fuchsia-700 text-xl">
              Download CV
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutMe;

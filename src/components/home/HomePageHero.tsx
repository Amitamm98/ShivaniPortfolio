import { useNavigate } from "react-router-dom";
import bg from "../../assets/images/HeroBg4.jpg";
import img from "../../assets/images/simmy.png";
import { motion } from "motion/react";


const HomePageHero = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[900px] relative overflow-hidden bg-black">
      <img src={bg} className="w-full object-cover opacity-50 h-full" alt="" />

      <div className="absolute h-full w-full flex flex-col md:flex-row justify-center items-center md:items-center -top-40 md:top-0 px-4 md:px-0">
        <div className="mt-24 md:mt-20 text-center md:text-left z-20">
          <h2 className="anton-regular text-4xl md:text-[50px] text-white/90 tracking-[2%] md:leading-[210px]">
            Drwaing Professor.
          </h2>
          <p className="anton-regular text-3xl md:text-8xl text-emerald-300 hover:text-fuchsia-400 my-2 md:my-0">
            SHIVANI
          </p>
          <p className="anton-regular text-white mt-4 text-sm md:text-base">
            All students can learn and succeed, but not in the same way and not<br className="hidden sm:block" /> in the same day
          </p>

          <button
            className="font-kindsans-bold flex justify-center md:justify-start items-center group mx-auto md:ml-6 mt-6 md:mt-8"
            onClick={() => {
              navigate("/transport");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <p className="py-3 px-4 bg-primary text-white hover:bg-fuchsia-700 text-sm md:text-base">
              BIOGRAPHY RATE.ME
            </p>
            <div className="bg-[#D00003] p-2">
              <div className="w-8 h-8 flex justify-center items-center border border-white rounded-full group-hover:bg-white transition-all duration-500">
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
        </div>
          <motion.img
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute z-20 right-0 md:right-40 top-150 md:top-60 bottom-0 opacity-90"
            src={img}
          />
      
      </div>
    </div>
  );
};

export default HomePageHero;

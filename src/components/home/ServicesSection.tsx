// components/ServicesSection.tsx
import { motion } from "framer-motion";
import { FaPencilRuler, FaUserAlt, FaBrain, FaChalkboardTeacher } from "react-icons/fa";

const services = [
  {
    icon: <FaPencilRuler size={40} />,
    title: "Drawing & Sketching Classes",
    description:
      "Learn the foundations of drawing—from basic lines to full compositions. Perfect for beginners and hobbyists.",
  },
  {
    icon: <FaUserAlt size={40} />,
    title: "Portrait Art & Charcoal Techniques",
    description:
      "Master the art of portraiture, facial expressions, and advanced shading techniques using graphite and charcoal.",
  },
  {
    icon: <FaBrain size={40} />,
    title: "Art for Mindfulness & Creativity",
    description:
      "Integrating art therapy techniques to help students improve focus, reduce stress, and express emotions through creativity.",
  },
  {
    icon: <FaChalkboardTeacher size={40} />,
    title: "Portfolio Building & Art Workshops",
    description:
      "Guidance for students preparing professional portfolios for art schools or careers. Includes critiques, exhibitions, and demo sessions.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const ServicesSection = () => {
  return (
    <section className="bg-black py-20 px-6 md:px-16 text-white">
      <div className="text-center mb-12">
        <p className=" text-secondary anton-regular uppercase text-6xl md:text-8xl"> My Services </p>
        <h2 className="text-3xl md:text-5xl anton-regular text-white mt-10">What Can I Do Best?</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-primary p-6 rounded-2xl border border-secondary hover:shadow-lg hover:shadow-green-400/20 hover:scale-[1.03] transition-all duration-300"
          >
            <div className="mb-4 flex items-center justify-center text-secondary">
              {service.icon}
            </div>
            <h3 className="text-lg anton-regular mb-3">{service.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

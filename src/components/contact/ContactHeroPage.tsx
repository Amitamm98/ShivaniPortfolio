import { motion } from "framer-motion";
import bg from "../../assets/images/wp2568619.webp"; // Your background image

const ContactHeroPage = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 py-60"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Glowing background overlays */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl w-full bg-[#12172D]/80 backdrop-blur-md rounded-3xl p-8 md:p-12 text-white shadow-2xl"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-fuchsia-400">
            Let’s Connect
          </h2>
          <p className="mt-2 text-gray-300 text-lg">
            Get in touch for art classes, workshops, or creative collaborations.
          </p>
        </div>

        {/* Contact Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-[#1F233E] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all hover:ring-2 hover:ring-fuchsia-300"
            />
          </div>
          <div className="col-span-1">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-[#1F233E] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all hover:ring-2 hover:ring-fuchsia-300"
            />
          </div>
          <div className="col-span-2">
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-[#1F233E] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all hover:ring-2 hover:ring-fuchsia-300"
            />
          </div>
          <div className="col-span-2 text-center">
            <button
              type="submit"
              className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white py-3 px-8 rounded-full font-semibold shadow-lg hover:shadow-fuchsia-400/40 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-10 text-center text-gray-400 text-sm">
          <p>Email: <span className="text-white">artbyshivani@gmail.com</span></p>
          <p>Phone: <span className="text-white">+91 98765 43210</span></p>
          <p className="italic mt-2">“Every sketch is a step closer to your story.”</p>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactHeroPage;

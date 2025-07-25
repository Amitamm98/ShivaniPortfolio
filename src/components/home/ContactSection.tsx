import { motion } from "framer-motion";
import { easeOut } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: easeOut,
    },
  }),
};

const ContactSection = () => {
  return (
    <section className="relative overflow-hidden bg-black py-24 px-6 sm:px-10 md:px-16 text-white">

      {/* BACKGROUND EFFECT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 2 }}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-green-400 blur-3xl opacity-25 pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-start">

        {/* Educator Info */}
        <motion.div
          variants={fadeInUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-primary backdrop-blur-xl border border-secondary p-8 rounded-2xl shadow-md transition hover:shadow-secondary"
        >
          <h2 className="text-5xl anton-regular text-secondary leading-tight">
            Drawing Techniques <span className="text-white">Educator</span>
          </h2>
          <div className="mt-4 h-[3px] w-28 bg-gradient-to-r from-green-400 via-purple-500 to-pink-500 rounded-full" />
          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            🎨 "As a Drawing Techniques Educator, I help aspiring artists turn
            blank pages into powerful visual stories — not just drawing, but
            seeing, feeling, and expressing every emotion through every stroke."
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-primary backdrop-blur-lg border border-secondary p-8 rounded-2xl space-y-6 shadow-md transition hover:shadow-secondary"
        >
          <h3 className="text-3xl anton-regular text-white">Drop Me A Line</h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder=" "
                required
                className="peer w-full bg-transparent border-b border-gray-500 py-3 px-2 text-white placeholder-transparent focus:outline-none focus:border-green-400"
              />
              <label className="absolute left-2 top-3 text-sm text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm transition-all">
                Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder=" "
                required
                className="peer w-full bg-transparent border-b border-gray-500 py-3 px-2 text-white placeholder-transparent focus:outline-none focus:border-green-400"
              />
              <label className="absolute left-2 top-3 text-sm text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm transition-all">
                Email
              </label>
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder=" "
              className="peer w-full bg-transparent border-b border-gray-500 py-3 px-2 text-white placeholder-transparent focus:outline-none focus:border-green-400"
            />
            <label className="absolute left-2 top-3 text-sm text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm transition-all">
              Subject
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder=" "
              className="peer w-full bg-transparent border-b border-gray-500 py-3 px-2 text-white placeholder-transparent focus:outline-none focus:border-green-400"
            />
            <label className="absolute left-2 top-3 text-sm text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm transition-all">
              Phone
            </label>
          </div>

          <div className="relative">
            <textarea
              rows={4}
              placeholder=" "
              className="peer w-full bg-transparent border-b border-gray-500 py-3 px-2 text-white placeholder-transparent resize-none focus:outline-none focus:border-green-400"
            />
            <label className="absolute left-2 top-3 text-sm text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm transition-all">
              Message
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full sm:w-fit px-8 py-3 bg-gradient-to-r from-green-400 via-purple-500 to-pink-500 text-black font-semibold rounded-lg shadow hover:shadow-xl transition duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;

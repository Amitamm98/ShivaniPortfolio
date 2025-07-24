import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#0B0E1E] text-white px-6 py-16 relative overflow-hidden">
      {/* Glowing Circle Background */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-800 opacity-20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-600 opacity-20 blur-3xl rounded-full pointer-events-none" />

      {/* Center Content */}
      <div className="max-w-7xl mx-auto text-center space-y-10">
        <h2 className="text-4xl md:text-5xl anton-regular text-white">Let’s Connect Creatively</h2>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm md:text-base">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-[#12182f] rounded-2xl p-5 border border-gray-800 hover:border-purple-600 transition duration-300">
            <div className="flex items-center gap-3 justify-center">
              <FaPhone className="text-yellow-400 text-lg" />
              <p>+917248216285</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-[#12182f] rounded-2xl p-5 border border-gray-800 hover:border-green-500 transition duration-300">
            <div className="flex items-center gap-3 justify-center">
              <FaEnvelope className="text-green-400 text-lg" />
              <p>sc557299@gmail.com</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-[#12182f] rounded-2xl p-5 border border-gray-800 hover:border-blue-400 transition duration-300">
            <div className="flex items-center gap-3 justify-center">
              <FaWhatsapp className="text-green-500 text-lg" />
              <p>Whatsapp: 7248216285</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-[#12182f] rounded-2xl p-5 border border-gray-800 hover:border-pink-400 transition duration-300">
            <div className="flex items-center gap-3 justify-center">
              <FaInstagram className="text-pink-500 text-lg" />
              <p>Shivanichau722.in</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-[#12182f] rounded-2xl p-5 border border-gray-800 hover:border-blue-300 transition duration-300 col-span-full sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 justify-center">
              <FaLinkedinIn className="text-blue-400 text-lg" />
              <p>linkedin/Shivani Chauhan</p>
            </div>
          </motion.div>
        </div>

        {/* Footer Links */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-400">
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li>Control</li>
              <li>Scalability & Efficiency</li>
              <li>Leadership Qualities</li>
              <li>Teaching Skills</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Work</li>
              <li>Journey</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>Art Studies</li>
              <li>Paintings</li>
              <li>I’m a Teacher</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Address</h4>
            <ul className="space-y-2">
              <li>Lacchiwala</li>
              <li>Doiwala</li>
              <li>Dehradun</li>
              <li>Uttarakhand</li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-6 text-xl text-gray-400">
          {[
            { icon: <FaInstagram />, color: "hover:text-pink-500" },
            { icon: <FaLinkedinIn />, color: "hover:text-blue-400" },
            { icon: <FaWhatsapp />, color: "hover:text-green-500" },
          ].map((social, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.2 }}
              className={`cursor-pointer transition duration-300 ${social.color}`}
            >
              {social.icon}
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-xs text-gray-600">© {new Date().getFullYear()} Made by: TECHQILLA(pvt).Design By: Amit Rana. For: Shivani Chauhan All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

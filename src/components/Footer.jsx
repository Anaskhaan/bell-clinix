import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#303a73] text-white">
      <motion.div
        className="container mx-auto px-2 sm:px-4 py-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
        <motion.div variants={fadeInVariants} className="space-y-2 sm:text-left">
  <div className="flex justify-start space-x-2">
    <img
      src="logo.webp"
      alt="Nexflow Logo"
      width={150}
      height={150}
      className="mb-4"
    />
  </div>
  <p className="text-sm text-white w-72  sm:mx-2">
    Streamline your revenue cycle with our comprehensive medical
    billing services, ensuring maximum reimbursement and minimal
    denials.
  </p>

  <div className="flex justify-start sm:justify-start space-x-3">
    {[Facebook, Linkedin, Instagram, Twitter].map((Icon, idx) => (
      <motion.a
        key={idx}
        href="#"
        className="bg-white rounded-full p-2 hover:bg-gray-100 shadow transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Icon className="w-4 h-4 text-[#3FA69B]" />
      </motion.a>
    ))}
  </div>
</motion.div>


          <motion.div variants={fadeInVariants} className="space-y-4 ">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <nav className="flex font-semibold flex-col space-y-2">
              {["Home", "About us", "Get Demo", "Contact Us"].map((text, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  className="text-white hover:text-gray-300 transition-all duration-300 ease-in-out"
                  whileHover={{ x: 5 }}
                >
                  {text}
                </motion.a>
              ))}
            </nav>
          </motion.div>

         
          <motion.div variants={fadeInVariants} className="space-y-4">
            <h3 className="text-lg font-bold">Contact Detail</h3>
            {/* <p className="text-white">Lorem Ipsum Dolor Sit Amet Consectetur.</p> */}
            <div className="space-y-3">
              {[
                { icon: Mail, text: "info@bellclinix.com" },
                { icon: Phone, text: "+44 7563 087 497" },
                { icon: MapPin, text: "2301 EMANCIPATION HWY STE 101 FREDERICKSBURG VA 22401" },
              ].map(({ icon: Icon, text }, idx) => (
                <motion.div key={idx} className="flex items-center  space-x-2" variants={fadeInVariants}>
                  <div className="bg-white rounded-full p-1 transition-all duration-300 hover:scale-110">
                    <Icon className="w-4 h-4 text-[#56bafc]" />
                  </div>
                  <span className="text-white">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

     
      <motion.div
        className="mt-6 bg-[#303a73] border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
        viewport={{ once: true }}
      >
        <div className="max-w-[1440px] h-[40px] mx-auto py-2 px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-white text-center sm:text-left">
            © 2025 BellClinix. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end space-x-6">
            {[
              { text: "Website Policies", to: "/terms" },
              { text: "Privacy Policies", to: "/privacypolicy" },
              { text: "Cookies Policies", to: "#" },
            ].map(({ text, to }, idx) => (
              <motion.a
                key={idx}
                href={to}
                className="text-white underline transition-all duration-300 hover:text-gray-300"
                whileHover={{ scale: 1.1 }}
              >
                {text}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}


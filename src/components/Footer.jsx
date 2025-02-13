import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Instagram } from "lucide-react";

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
    <footer className="w-full bg-black text-white">
      <motion.div
        className="container lg:px-2 xl:px-2 px-0 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
          {/* Logo Section */}
          <motion.div variants={fadeInVariants} className="space-y-4">
            <img
              src="logo.svg"
              alt="bellclinix Logo"
              className="lg:h-20 xl:h-32 h-10 ml-7 w-auto"
            />
            <p className="text-sm">
              2301 Emancipation Hwy,Ste 101, Fredericksburg, VA 22401, USA
            </p>
            <div className="flex space-x-4">
              {[Facebook, Linkedin, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-white hover:text-gray-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInVariants} className="space-y-4">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Who We Are", path: "/about" },
                { name: "What We Do", path: "/services" },
                { name: "Contact Us", path: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-white hover:underline hover:text-gray-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Details */}
          <div className=" flex flex-col items-start text-left">
            <motion.div variants={fadeInVariants} className="space-y-4">
              <h3 className="text-lg font-bold text-white">Office</h3>
              <p
                href="https://maps.app.goo.gl/VRt1e6Ctj5HvHa1TA"
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-sm"
              >
                {" "}
                2301 Emancipation Hwy,Ste 101, Fredericksburg, VA 22401, USA
              </p>
            </motion.div>

            {/* Mailing Address */}
            <motion.div variants={fadeInVariants} className="py-4 space-y-4">
              <h3 className="text-lg font-bold p">Mailing Address</h3>
              <p>
                PO Box 7774
                <br />
                Jackson, WY 83002
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="tel:+447563087497"
                className="hover:text-[#56bafc] text-white  duration-300 ease-in-out flex items-center"
              >
                +447563087497
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:info@bellclinix.com"
                className="flex items-center hover:text-[#56bafc] text-white  duration-300 ease-in-out"
              >
                info@bellclinix.com
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-6 bg-black border-t border-gray-700 py-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; 2025 BellClinix. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

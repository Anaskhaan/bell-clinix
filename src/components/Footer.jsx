import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

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
        className="container mx-auto px-1 py-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {/* Logo Section */}
          <motion.div variants={fadeInVariants} className="space-y-4">
          <img
  src="logo.webp"
  alt="FMG Logo"
  className="h-auto w-44 sm:w-48 md:w-56 lg:w-44"
/>

            <p className="text-sm">
              Located in Jackson Hole, WY
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
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {["Who We Are", "What We Do", "Portfolio", "Articles", "Contact"].map((link, index) => (
                <li key={index}>
                  <Link
                    to="#"
                    className="text-white hover:underline hover:text-gray-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div variants={fadeInVariants} className="space-y-4">
            <h3 className="text-lg font-bold">Contact FMG</h3>
            <p>Phone: 307-543-5084</p>
            <p>Email: info@frederickmtngroup.com</p>
          </motion.div>

          {/* Mailing Address */}
          <motion.div variants={fadeInVariants} className="space-y-4">
            <h3 className="text-lg font-bold">Mailing Address</h3>
            <p>
              175 S King St<br />
              Suite 100<br />
              Jackson, WY 83001
            </p>
            <p>Mailing Address:</p>
            <p>
              PO Box 7774<br />
              Jackson, WY 83002
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="mt-6 bg-black border-t border-gray-700 py-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">© 2025 Frederick Mountain Group. All rights reserved.</p>
        
        </div>
      </motion.div>
    </footer>
  );
}

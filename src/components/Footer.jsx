import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Facebook,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
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

const socialLinks = [
  {
    Icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61572966675832",
    label: "Facebook",
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/company/bell-clinix/",
    label: "LinkedIn",
  },
  {
    Icon: Instagram,
    href: "https://www.instagram.com/bellclinix/",
    label: "Instagram",
  },
];

const quickLinks = [
  { name: "Who We Are", path: "/about" },
  { name: "What We Do", path: "/services" },
  { name: "Contact Us", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-black text-white">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:-ml-2 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div variants={fadeInVariants} className="space-y-6 ">
            <Link to="/" className="block">
              <img src="/logo.svg" className="h-12 w-auto ml-2 lg:ml-0" />
            </Link>
            <p className=" text-md  text-gray-300">
              Maximizing Revenue, Minimizing Hassle – Focus on patient comfort
              and well-being
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  target="_blank"
                  rel="noreferrer"
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-gray-800"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInVariants} className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span className="hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={fadeInVariants} className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Office</h3>
            <div className="space-y-4">
              <a
                href="https://maps.app.goo.gl/yEn6xN12tAHrBffz6"
                target="_blank"
                rel="noreferrer"
                className="flex items-start space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>
                  2301 Emancipation Hwy, Ste 101, Fredericksburg, VA 22401, USA
                </span>
              </a>
            </div>
          </motion.div>

          {/* Contact Details */}
          <motion.div variants={fadeInVariants} className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="tel:+15123684647"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>+15 123 684 647</span>
              </a>
              <a
                href="mailto:info@bellclinix.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-300 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>info@bellclinix.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Copyright Section */}
      <motion.div
        className="border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} BellClinix. All rights reserved.
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

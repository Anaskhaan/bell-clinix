import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Oops, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="bg-[#f0f4f8] py-10">
      <motion.div
        className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white shadow-xl rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-6 text-[#0303a7]">
            Contact Us - Medical Billing Solutions
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <label
                htmlFor="name"
                className="block text-lg font-medium text-[#0303a7] mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 text-lg border-2 border-[#0303a7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0303a7]"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <label
                htmlFor="email"
                className="block text-lg font-medium text-[#0303a7] mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 text-lg border-2 border-[#0303a7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0303a7]"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <label
                htmlFor="message"
                className="block text-lg font-medium text-[#0303a7] mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-4 text-lg border-2 border-[#0303a7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0303a7]"
                rows="6"
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button
                type="submit"
                className="bg-[#0303a7] text-white py-4 px-8 rounded-lg text-lg hover:bg-[#56bafc] transition-all"
              >
                Send Message
              </button>
            </motion.div>
          </form>

          {/* Status Message */}
          {status && (
            <motion.p
              className="mt-4 text-center text-lg font-medium text-[#0303a7]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {status}
            </motion.p>
          )}
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-[#0303a7]">
            Contact Info
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <p className="text-lg text-[#0303a7]">+1 234 567 890</p>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-lg text-[#0303a7]">
                123 Medical St., City, Country
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-lg text-[#0303a7]">
                contact@medicalbilling.com
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6">
            <h4 className="text-lg font-bold mb-2 text-[#0303a7]">Follow Us</h4>
            <div className="flex space-x-6">
              <a href="#" target="_blank" className="text-[#0303a7]">
                {/* Placeholder for GitHub */}
              </a>
              <a href="#" target="_blank" className="text-[#0303a7]">
                {/* Placeholder for LinkedIn */}
              </a>
              <a href="#" target="_blank" className="text-[#0303a7]">
                {/* Placeholder for Twitter */}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;

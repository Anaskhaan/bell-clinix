import React from 'react'
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div>
      <div
        className="relative bg-[url('https://images.pexels.com/photos/4088352/pexels-photo-4088352.jpeg')] bg-cover w-full bg-center h-screen"
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative flex flex-col justify-center items-start p-8 sm:p-16 text-white h-full">
          <motion.p
            className="text-4xl sm:text-5xl font-semibold max-w-lg sm:max-w-md mx-auto sm:mx-0 text-left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Efficient <span className="text-gray-900">&</span> Secure Medical
            Billing Solutions
          </motion.p>

          <motion.p
            className="text-xl text-white mt-4 lg:w-1/2 w-full mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Streamline your revenue cycle with our comprehensive medical billing
            services, ensuring maximum reimbursement and minimal denials.
          </motion.p>
          <Link to="/contact">
            <motion.button
              className="mt-4 flex items-center justify-center bg-white text-black p-3 rounded-3xl w-44 sm:w-auto mx-auto sm:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              whileHover={{ scale: 1.1 }}
            >
              Contact us{" "}
              <ArrowRight className="bg-gray-900 rounded-full text-white ml-4" />
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero

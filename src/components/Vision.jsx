import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const Vision = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className=" min-h-screen flex items-center justify-center p-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-11/12 max-w-7xl">
        {/* Image Section */}
        <div className="relative flex justify-center items-center">
          <motion.img
            src="/vv.webp"
            alt="Healthcare professionals"
            className="w-full h-auto object-cover rounded-3xl shadow-2xl border-4 border-white"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>

        {/* Vision Content */}
        <div className="text-[#303a73] p-12 bg-white rounded-3xl shadow-2xl text-center flex flex-col justify-center">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-extrabold mb-6 flex items-center justify-center text-blue-900"
          >
            <Eye className="inline-block mr-3 animate-bounce" size={40} />
            Our Vision
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.2 }}
            className="lg:text-lg text-md text-gray-700 mb-6 text-left leading-relaxed"
          >
            BellClinix aims to revolutionize healthcare revenue management by
            providing innovative solutions, ensuring seamless billing processes,
            and enhancing financial growth for healthcare providers.
          </motion.p>

          <ul className="list-disc text-left text-gray-700 lg:text-lg text-md space-y-3 pl-6">
            <li>
              Empowering healthcare providers with seamless billing solutions.
            </li>
            <li>Enhancing financial growth through accuracy and compliance.</li>
            <li>Driving innovation in medical revenue management.</li>
            <li>Ensuring exceptional patient care remains the priority.</li>
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8"
          >
            <Target
              className="text-[#303a73] mx-auto animate-pulse"
              size={52}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Vision;

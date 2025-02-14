import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const Vision = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex items-center justify-center py-2 md:p-6 lg:p-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 w-11/12 max-w-7xl">
        {/* Image Section */}
        <div className="relative flex justify-center items-center">
          <motion.img
            src="/vv.webp"
            alt="Healthcare professionals"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full lg:h-auto xl:h-auto 2xl:h-auto h-72  object-contain rounded-3xl shadow-2xl border-4 border-white"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>

        {/* Vision Content */}
        <div className="text-[#303a73] p-6 bg-white rounded-3xl shadow-2xl text-center flex flex-col justify-center">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 flex items-center justify-center text-blue-900"
          >
            <Eye
              className="inline-block mr-2 sm:mr-3 animate-bounce"
              size={30}
              sm:size={35}
              md:size={40}
            />
            Our Vision
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.2 }}
            className="text-md sm:text-md md:text-lg text-gray-700 mb-4 sm:mb-6 text-justify leading-relaxed"
          >
            BellClinix aims to revolutionize healthcare revenue management by
            providing innovative solutions, ensuring seamless billing processes,
            and enhancing financial growth for healthcare providers.
          </motion.p>

          <ul className="list-disc text-left text-gray-700 text-md sm:text-md md:text-lg space-y-2 sm:space-y-3 pl-4 sm:pl-6">
            <li>
              Empowering healthcare providers with seamless billing solutions.
            </li>
            <li>Enhancing financial growth through accuracy and compliance.</li>
            <li>Driving innovation in medical revenue management.</li>
            <li>Ensuring exceptional patient care remains the priority.</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Vision;

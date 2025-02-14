// import { motion } from "framer-motion";
// import { Eye } from "lucide-react";

// const Vision = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, ease: "easeOut" }}
//       className="flex items-center justify-center py-2 md:p-6 lg:p-8"
//     >
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 w-11/12 max-w-7xl">
//         {/* Image Section */}
//         <div className="relative flex justify-center items-center">
//           <motion.img
//             src="/vv.webp"
//             alt="Healthcare professionals"
//             className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full lg:h-auto xl:h-auto 2xl:h-auto h-72  object-contain rounded-3xl shadow-2xl border-4 border-white"
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//           />
//         </div>

//         {/* Vision Content */}
//         <div className="text-[#303a73] p-6 bg-white rounded-3xl shadow-2xl text-center flex flex-col justify-center">
//           <motion.h1
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 flex items-center justify-center text-blue-900"
//           >
//             <Eye
//               className="inline-block mr-2 sm:mr-3 animate-bounce"
//               size={30}
//               sm:size={35}
//               md:size={40}
//             />
//             Our Vision
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 1.2 }}
//             className="text-md sm:text-md md:text-lg text-gray-700 mb-4 sm:mb-6 text-justify leading-relaxed"
//           >
//             BellClinix aims to revolutionize healthcare revenue management by
//             providing innovative solutions, ensuring seamless billing processes,
//             and enhancing financial growth for healthcare providers.
//           </motion.p>

//           <ul className="list-disc text-left text-gray-700 text-md sm:text-md md:text-lg space-y-2 sm:space-y-3 pl-4 sm:pl-6">
//             <li>
//               Empowering healthcare providers with seamless billing solutions.
//             </li>
//             <li>Enhancing financial growth through accuracy and compliance.</li>
//             <li>Driving innovation in medical revenue management.</li>
//             <li>Ensuring exceptional patient care remains the priority.</li>
//           </ul>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Vision;

import { motion } from "framer-motion";
import { Eye, Target, ArrowRight } from "lucide-react";

const Vision = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex items-center justify-center py-12 px-4 md:py-20"
    >
      <div className="flex lg:flex-row-reverse xl:flex-row-reverse 2xl:flex-row-reverse flex-col gap-12 w-full max-w-7xl">
        {/* Mission Section */}
        <motion.div
          variants={itemVariants}
          className="order-2 lg:order-1 flex flex-col justify-center space-y-8 p-8 bg-gradient-to-br from-indigo-50 via-blue-50 to-white rounded-[2rem] shadow-xl border border-blue-100"
        >
          <motion.div variants={itemVariants} className="space-y-2">
            <div className="flex items-center space-x-3 mb-2">
              <Target className="text-indigo-600 w-8 h-8" />
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <div className="h-1 w-20 bg-indigo-600 rounded-full" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 leading-relaxed"
          >
            To transform healthcare financial management through cutting-edge
            technology and unparalleled service, making revenue cycle management
            effortless for healthcare providers.
          </motion.p>

          <motion.div variants={itemVariants} className="space-y-4">
            {[
              "Streamlining medical billing processes with AI-powered solutions",
              "Maximizing revenue through intelligent claim management",
              "Reducing administrative burden on healthcare providers",
              "Building lasting partnerships with healthcare organizations",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3 bg-white/80 p-4 rounded-xl backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Vision Content */}
        <motion.div
          variants={itemVariants}
          className="order-1 lg:order-2 flex flex-col justify-center space-y-8 p-8 bg-white rounded-[2rem] shadow-xl"
        >
          <motion.div variants={itemVariants} className="space-y-2">
            <div className="flex items-center space-x-3 mb-2">
              <Eye className="text-blue-600 w-8 h-8" />
              <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <div className="h-1 w-20 bg-blue-600 rounded-full" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 leading-relaxed"
          >
            BellClinix aims to revolutionize healthcare revenue management by
            providing innovative solutions, ensuring seamless billing processes,
            and enhancing financial growth for healthcare providers.
          </motion.p>

          <motion.div variants={itemVariants} className="space-y-4">
            {[
              "Empowering healthcare providers with seamless billing solutions",
              "Enhancing financial growth through accuracy and compliance",
              "Driving innovation in medical revenue management",
              "Ensuring exceptional patient care remains the priority",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3 bg-blue-50 p-4 rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Vision;

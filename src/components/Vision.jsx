import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const Vision = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-gray-100 min-h-screen flex items-center justify-center px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-11/12 max-w-7xl">
       
       
      <div className="relative flex justify-center items-center">
          <motion.img
            src="/vv.webp"
            alt="Healthcare professionals"
            className="w-full h-auto object-cover rounded-2xl shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          
         
        </div>
        {/* Vision Content */}
        <div className=" text-[#303a73] p-10 rounded-2xl shadow-2xl text-center flex flex-col justify-center">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bold mb-6 flex items-center justify-center"
          >
            <Eye
              className="inline-block mr-2  animate-bounce lg:text-4xl text-xs"
              size={32}
            />
            Our Vision
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.2 }}
            className="lg:text-lg text-md text-left text-gray-700 mb-8 "
          >
            BellClinix&apos;s think tanks foresee being the leading force in
            transforming healthcare revenue management. We envision a future where
            healthcare providers seamlessly navigate the complexities of billing,
            achieving financial prosperity while delivering exceptional patient
            care. Through our innovative solutions, relentless dedication, and
            unwavering commitment to excellence, we aspire to set new standards in
            efficiency, accuracy, and compliance within the medical billing
            industry. Our ultimate goal is to empower healthcare organizations to
            thrive financially, enabling them to focus entirely on enhancing
            patient outcomes and driving innovation in healthcare delivery.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8"
          >
            <Target className="text-[#303a73] mx-auto animate-pulse" size={48} />
          </motion.div>
        </div>

       
       
      </div>
    </motion.div>
  );
};

export default Vision;

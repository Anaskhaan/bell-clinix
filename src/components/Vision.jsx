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
      <div className="flex lg:flex-row-reverse xl:flex-row-reverse 2xl:flex-row-reverse flex-col gap-12 w-full max-w-5xl">
        {/* Mission Section */}
        <motion.div
          variants={itemVariants}
          className="order-2 lg:order-1 flex flex-col justify-center space-y-8 p-8 bg-gradient-to-br from-indigo-50 via-blue-50 to-white rounded-[2rem] shadow-xl border border-blue-100"
        >
          <motion.div variants={itemVariants} className="space-y-2">
            <div className="flex items-center space-x-3 mb-2">
              <Target className="text-indigo-600 w-8 h-8" />
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                Our Mission
              </h2>
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
        {/* <motion.div
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
        </motion.div> */}
      </div>
    </motion.div>
  );
};

export default Vision;

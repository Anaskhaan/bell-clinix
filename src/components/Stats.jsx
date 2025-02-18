import { useEffect, useState } from "react";
import { CheckCircle, CreditCard, Smile, Star } from "lucide-react";
import { motion } from "framer-motion";

const Stats = () => {
  const statData = [
    {
      icon: CheckCircle,
      title: "Claim Approval",
      targetValue: 97,
      description:
        "Streamlined and efficient claim approval process ensuring quick resolutions and transparency for your convenience.",
    },
    {
      icon: CreditCard,
      title: "Fast Reimbursements",
      targetValue: 96,
      description:
        "Quick and hassle-free reimbursements, ensuring you receive your payments without delay.",
    },
    {
      icon: Smile,
      title: "Payer-Provider-Patient Satisfaction",
      targetValue: 99,
      description:
        "Enhancing satisfaction for payers, providers, and patients through seamless communication, transparency, and efficient service.",
    },
    {
      icon: Star,
      title: "Overall Score",
      targetValue: 98,
      description:
        "An aggregate rating that reflects the overall performance and quality of service based on key metrics and feedback.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-10 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-[1920px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Performance Benchmarks
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering excellence through measurable performance and continuous
            improvement
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row gap-4 justify-center items-stretch px-4"
        >
          {statData.map(
            ({ icon: Icon, title, targetValue, description }, index) => {
              const [value, setValue] = useState(0);

              useEffect(() => {
                let startValue = 0;
                const increment = targetValue / 100;
                const timer = setInterval(() => {
                  startValue += increment;
                  if (startValue >= targetValue) {
                    setValue(targetValue);
                    clearInterval(timer);
                  } else {
                    setValue(Math.round(startValue));
                  }
                }, 30);
                return () => clearInterval(timer);
              }, [targetValue]);

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.02,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  className="relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 w-full lg:w-1/4 min-h-[300px] flex flex-col"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500" />
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 bg-indigo-50 rounded-lg">
                        <Icon size={28} className="text-black" />
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.5,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="text-3xl font-bold text-gray-700"
                      >
                        {value}%
                      </motion.div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                      {description}
                    </p>
                  </div>
                </motion.div>
              );
            }
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;

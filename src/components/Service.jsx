import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { services } from "./Helpers/Data";
const Services = () => {
  const navigate = useNavigate();

  const handleLearnMore = (title) => {
    navigate(`/services/${encodeURIComponent(title)}`);
  };

  return (
    <div className="min-h-screen bg-[#303a73] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-white text-center mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="relative w-full h-auto rounded-2xl p-6 cursor-pointer bg-white shadow-lg hover:bg-blue-400 hover:text-white transition-all duration-300 ease-in-out"
            >
              <div
                className="relative h-full flex flex-col justify-between z-10"
                onClick={() => handleLearnMore(service.title)}
              >
                <div>
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-[#303a73] group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-opacity-90 group-hover:text-white">
                    {service.description}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-gray-800 group-hover:text-white">
                    Key Features:
                  </p>
                  <ul className="mt-2 list-disc list-inside text-gray-600 group-hover:text-gray-100">
                    {service.list.map((item, index) => (
                      <li key={index} className="text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="self-start px-4 py-2 bg-[#303a73] rounded-full text-white font-semibold flex items-center gap-2 mt-4">
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

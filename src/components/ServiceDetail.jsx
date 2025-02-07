import { useParams } from "react-router-dom";
import { serviceDetails } from "./Helpers/Data";
import { ArrowRightCircle } from "lucide-react";
import { useEffect } from "react";

const ServiceDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { serviceTitle } = useParams();
  const service = serviceDetails.find(
    (service) => service.title === decodeURIComponent(serviceTitle)
  );

  if (!service)
    return (
      <h1 className="text-center mt-10 text-2xl text-red-500">
        Service not found!
      </h1>
    );

  return (
    <div className="min-h-screen p-44 bg-black text-white">
      <div className="max-w-4xl mx-auto text-left">
        {/* Header with Background */}
        <h1 className="text-5xl font-bold text-white mb-6">{service.title}</h1>
        <p className="text-lg text-gray-300 mb-8">{service.details}</p>
        <div className="text-center mb-4">
          <a href="/contact">
            <button className="bg-[#56bafc] text-black font-semibold py-3 px-8 rounded-xl text-lg flex items-center justify-center space-x-3 transform transition-all duration-300 hover:scale-105 hover:bg-[#303a73]">
              <span>Learn More</span>
              <ArrowRightCircle />
            </button>
          </a>
        </div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {service.cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#303a73] p-6 shadow-lg rounded-lg text-center transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-center text-4xl text-[#56bafc] mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {card.title}
              </h3>
              <p className="text-sm text-gray-200">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
      </div>
    </div>
  );
};

export default ServiceDetail;

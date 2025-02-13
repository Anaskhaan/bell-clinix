import { Link, useParams } from "react-router-dom";
import { serviceDetails } from "./Helpers/Data";
import { ArrowLeft, ArrowRightCircle } from "lucide-react";
import { useEffect } from "react";

const ServiceDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="min-h-screen lg:py-28 py-36 px-6 md:px-44 bg-black text-white">
      <div className="max-w-4xl mx-auto text-left">
        {/* Header */}
        <Link className=" group" to="/">
          <button className=" relative flex items-center justify-center hover:text-[#56bafc] duration-300 ease-in-out my-4 text-white">
            <ArrowLeft /> Back to Home Page
            <span className="absolute bottom-0 left-0 h-0.5 bg-[#56bafc] w-0 group-hover:w-full duration-300"></span>
          </button>
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {service.title}
        </h1>
        <p className="text-base md:text-lg text-gray-300 mb-8">
          {service.details}
        </p>

        {/* Learn More Button */}
        <div className="text-center mb-8">
          <a href="/contact">
            <button className="bg-[#56bafc] text-black font-semibold py-3 px-8 rounded-xl text-lg flex items-center justify-center space-x-3 transform transition-all duration-300 hover:scale-105 hover:bg-[#303a73]">
              <span>Learn More</span>
              <ArrowRightCircle />
            </button>
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {service.cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#303a73]  p-6 shadow-lg rounded-lg text-center transform transition-all duration-300 hover:scale-105 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-center text-4xl text-[#56bafc] mb-4">
                  {card.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">
                  {card.title}
                </h3>
                <p className="text-md md:text-base text-gray-200 mb-4">
                  {card.description}
                </p>
              </div>
              {card.list && (
                <div className="mt-auto">
                  <p className="text-md font-semibold text-white text-left mb-1">
                    Key Features:
                  </p>
                  <ul className="text-sm md:text-base text-gray-300 text-left list-disc pl-5">
                    {card.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;

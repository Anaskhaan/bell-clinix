// import { Link, useParams } from "react-router-dom";
// import { serviceDetails } from "./Helpers/Data";
// import { ArrowLeft, ArrowRightCircle } from "lucide-react";
// import { useEffect } from "react";

// const ServiceDetail = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const { serviceTitle } = useParams();
//   const service = serviceDetails.find(
//     (service) => service.title === decodeURIComponent(serviceTitle)
//   );

//   if (!service)
//     return (
//       <h1 className="text-center mt-10 text-2xl text-red-500">
//         Service not found!
//       </h1>
//     );

//   return (
//     <div className="min-h-screen lg:py-28 py-36 px-6 md:px-44 bg-black text-white">
//       <div className="max-w-4xl mx-auto text-left">
//         {/* Header */}
//         <Link className="group" to="/services">
//           <button className="relative flex items-center justify-center hover:text-[#56bafc] duration-300 ease-in-out my-4 text-white">
//             <ArrowLeft /> Back to Services
//             <span className="absolute bottom-0 left-0 h-0.5 bg-[#56bafc] w-0 group-hover:w-full duration-300"></span>
//           </button>
//         </Link>
//         <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
//           {service.title}
//         </h1>
//         <span className=" text-white text-justify max-w-2xl">
//           {service.span()}
//         </span>

//         {/* Details List */}
//         <ul className="text-base md:text-lg space-y-4 list-none text-white mb-8 mt-6  ">
//           {service.details.map((detail, index) => (
//             <li
//               className="text-white p-2 bg-gray-700 rounded-lg hover:scale-105 transform transition-all duration-500 "
//               key={index}
//             >
//               {detail}{" "}
//             </li>
//           ))}
//         </ul>

//         {/* Learn More Button */}
//         <div className="text-center mb-8">
//           <a href="/contact">
//             <button className="bg-[#56bafc] text-black font-semibold py-3 px-8 rounded-xl text-lg flex items-center justify-center space-x-3 transform transition-all duration-300 hover:scale-105 hover:bg-[#303a73]">
//               <span>Learn More</span>
//               <ArrowRightCircle />
//             </button>
//           </a>
//         </div>

//         {/* Cards Grid */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {serviceDetails.cards?.map((card, index) => (
//             <div
//               key={index}
//               className={`bg-[#303a73]/90 rounded-2xl shadow-xl overflow-hidden mb-8
//                        transform transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20
//                        ${
//                          index % 2 === 0
//                            ? "lg:translate-x-8"
//                            : "lg:-translate-x-8"
//                        }`}
//             >
//               <div
//                 className={`flex flex-col lg:flex-row ${
//                   index % 2 === 1 ? "lg:flex-row-reverse" : ""
//                 }`}
//               >
//                 <div
//                   className="w-full lg:w-1/2 p-8 sm:p-10 flex flex-col items-center lg:items-start justify-center
//                              bg-gradient-to-br from-[#3a4680] to-[#303a73]"
//                 >
//                   <div className="text-[#56bafc] mb-6 bg-white/10 p-4 rounded-xl">
//                     {card.icon}
//                   </div>
//                   <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center lg:text-left">
//                     {card.title}
//                   </h3>
//                   <p className="text-gray-300 text-center lg:text-left">
//                     {card.description}
//                   </p>
//                 </div>

//                 <div className="w-full lg:w-1/2 p-8 sm:p-10 bg-[#2a3369]">
//                   <div className="h-full flex flex-col">
//                     <div>
//                       <h4 className="text-xl text-[#56bafc] font-semibold mb-4">
//                         Key Features:
//                       </h4>
//                       <ul className="space-y-3">
//                         {card.list.map((item, i) => (
//                           <li key={i} className="flex items-center text-white">
//                             <span className="w-2 h-2 bg-[#56bafc] rounded-full mr-3" />
//                             {item}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceDetail;

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
        <Link className="group" to="/services">
          <button className="relative flex items-center justify-center hover:text-[#56bafc] duration-300 ease-in-out my-4 text-white">
            <ArrowLeft /> Back to Services
            <span className="absolute bottom-0 left-0 h-0.5 bg-[#56bafc] w-0 group-hover:w-full duration-300"></span>
          </button>
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {service.title}
        </h1>
        <span className=" text-white text-justify max-w-2xl">
          {service.span()}
        </span>

        {/* Details List */}
        <ul className="text-base md:text-lg space-y-4 list-none text-white mb-8 mt-6">
          {service.details.map((detail, index) => (
            <li
              className="text-white p-2 bg-gray-700 rounded-lg hover:scale-105 transform transition-all duration-500"
              key={index}
            >
              {detail}
            </li>
          ))}
        </ul>

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {service.cards?.map((card, index) => (
            <div
              key={index}
              className={`bg-[#303a73]/90 rounded-2xl shadow-xl overflow-hidden mb-8
                       transform transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20
                       ${
                         index % 2 === 0
                           ? "lg:translate-x-8"
                           : "lg:-translate-x-8"
                       }`}
            >
              <div
                className={`flex flex-col lg:flex-row ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className="w-full lg:w-1/2 p-8 sm:p-10 flex flex-col items-center lg:items-start justify-center
                             bg-gradient-to-br from-[#3a4680] to-[#303a73]"
                >
                  <div className="text-[#56bafc] mb-6 bg-white/10 p-4 rounded-xl">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center lg:text-left">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-center lg:text-left">
                    {card.description}
                  </p>
                </div>

                <div className="w-full lg:w-1/2 p-8 sm:p-10 bg-[#2a3369]">
                  <div className="h-full flex flex-col">
                    <div>
                      <h4 className="text-xl text-[#56bafc] font-semibold mb-4">
                        Key Features:
                      </h4>
                      <ul className="space-y-3">
                        {card.list.map((item, i) => (
                          <li key={i} className="flex items-center text-white">
                            <span className="w-2 h-2 bg-[#56bafc] rounded-full mr-3" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;

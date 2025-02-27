import { useEffect, useState } from "react";
import { ArrowRight, ClipboardPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const slides = [
  {
    headline: "Prime Medical Billing",
    subheadline: "Solutions for US Providers",
    description:
      "Experience seamless and reliable billing services with our team of dedicated professionals. Accuracy and efficiency are our top priorities.",
  },
  {
    headline: "Prime Medical Billing",
    subheadline: "Solutions for US Providers",
    description:
      "Experience seamless and reliable billing services with our team of dedicated professionals. Accuracy and efficiency are our top priorities.",
  },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      if (currentIndex > 1) {
        setCurrentIndex(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Helmet>
        <title>
          BellClinix | Trusted Medical Solutions for US Healthcare Providers
        </title>
        <meta
          name="description"
          content="BellClinix helps healthcare providers optimize revenue with expert medical billing, coding, AR and denial management, audits, credentialing, and IT solutions."
        />
      </Helmet>

      <div className="absolute inset-0">
        <img
          src="/hero_converted.webp"
          alt="Healthcare professionals"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70" />
      </div>

      <div className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full overflow-hidden">
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {[...slides, slides[0]].map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="max-w-3xl">
                    <div className="transform transition-all duration-1000 opacity-100 translate-y-0">
                      <div className="mb-2 animate-bounce">
                        <ClipboardPlus className="h-12 w-12 text-pink-500" />
                      </div>
                      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                        {slide.headline}
                        <span className="block text-blue-300">
                          {slide.subheadline}
                        </span>
                      </h1>
                      <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
                        {slide.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/contact">
                          <button className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:scale-105 focus:outline-none focus:ring-blue-500">
                            Book an Appointment
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                          </button>
                        </Link>
                        <Link to="/services">
                          <button className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-blue-100 border-2 border-blue-100/30 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-blue-100/50">
                            Learn More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

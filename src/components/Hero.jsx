import { useEffect, useState } from "react";
import { ArrowRight, ClipboardPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen  ">
      <Helmet>
        <title>
          BellClinix | Trusted Medical Solutions for US Healthcare Providers
        </title>
        <meta
          name="description"
          content="BellClinix helps healthcare providers optimize revenue with expert medical billing, coding, AR and denial management, audits, credentialing, and IT solutions."
        />
        <meta
          name="keywords"
          content="medical billing company,
                    digital billing services,
                    medical billing,
                    medical billing services,
                    medical billing coding,
                    medical billing and coding,
                    medical coding,
                    medical and billing,
                    medical bill,
                    revenue cycle management,
                    rcm services,
                    revenue cycle management services,
                    rcm in medical billing,
                    revenue cycle management in medical billing,
                    healthcare providers,
                    Healthcare professionals,
"
        />
      </Helmet>
      <div className="absolute inset-0  ">
        <img
          src="/hero_converted.webp"
          alt="Healthcare professionals"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-black bg-opacity-70" />
      </div>

      {/* Hero Content */}
      <div className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            {/* Animated Elements */}
            <div
              className={`transform lg:mt-20 2xl:mt-28 xl:mt-24 mt-0 transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Floating Icon */}
              <div className=" mb-2  animate-bounce">
                <ClipboardPlus className="h-12 w-12 text-pink-500" />
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 ">
                Prime Medical Billing
                <span className="block text-blue-300">
                  Solutions for US Providers
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
                Experience seamless and reliable billing services with our team
                of dedicated professionals. Accuracy and efficiency are our top
                priorities.
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <button className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:scale-105 focus:outline-none  focus:ring-blue-500 ">
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

            {/* Floating Design Elements */}
            <div className="absolute top-20 right-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-40 w-32 h-32 bg-pink-500/10 rounded-full filter blur-2xl animate-pulse delay-700" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

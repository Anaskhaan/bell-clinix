import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import SwiperDemo from "./SwiperDemo";

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
            <div>
              <SwiperDemo />
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

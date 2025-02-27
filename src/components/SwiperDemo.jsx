import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ClipboardPlus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function InfiniteSwiper({
  items,
  swipeSpeed = 3000,
  transitionDuration = 300,
  pauseOnHover = false,
  className,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef(null);
  const itemsWithClones = [...items, ...items.slice(0, 1)];

  useEffect(() => {
    if (isPaused || items.length <= 1) return;
    const interval = setInterval(() => {
      handleNext();
    }, swipeSpeed);
    return () => clearInterval(interval);
  }, [isPaused, items.length, swipeSpeed]);

  useEffect(() => {
    if (currentIndex === items.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, transitionDuration);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, items.length, transitionDuration]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === items.length ? 0 : prev + 1));
  };

 

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        ref={trackRef}
        className="flex"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? `transform ${transitionDuration}ms ease-in-out` : "none",
        }}
      >
        {itemsWithClones.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {item}
          </div>
        ))}
      </div>

      
    </div>
  );
}

export default function SwiperDemo() {
  const items = [
    <div key="1" className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <div className="lg:mt-20 2xl:mt-28 xl:mt-24 mt-0 transition-all duration-1000">
            <div className="mb-2 animate-bounce">
              <ClipboardPlus className="h-12 w-12 text-pink-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Prime Medical Billing
              <span className="block text-blue-300">Solutions for US Providers</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
              Experience seamless and reliable billing services with our team of dedicated professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <button className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:scale-105">
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
    </div>,
    <div key="2" className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
     <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <div className="lg:mt-20 2xl:mt-28 xl:mt-24 mt-0 transition-all duration-1000">
            <div className="mb-2   animate-bounce">
              <ClipboardPlus className="h-12 w-12 text-pink-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Driving Excellence
              <span className="block text-blue-300">We Help Practices Grow
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
            BellClinix offers result-oriented, AI-powered RCM solutions turning complexity in clarity. Ensuring compliance and measurable financial improvement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <button className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:scale-105">
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
    </div>,
  ];

  return (
    <div className="mx-auto max-w-3xl space-y-8 p-4">
      <InfiniteSwiper items={items} swipeSpeed={3000} />
    </div>
  );
}

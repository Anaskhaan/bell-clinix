import { useEffect, useState } from "react";
import { Home, Briefcase, Info, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const tabs = [
  { name: "Home", path: "/", icon: <Home size={40} /> },
  { name: "What We Do", path: "/services", icon: <Briefcase size={40} /> },
  { name: "Who We Are", path: "/about", icon: <Info size={40} /> },
  { name: "Contact Us", path: "/contact", icon: <Mail size={40} /> },
];

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");
  const [logoPosition, setLogoPosition] = useState("flex-1");
  const [color, setCOlor] = useState("text-white");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgColor("bg-[#fff]");
      setLogoPosition("justify-start");
      setCOlor("text-black");
    } else {
      setBgColor("bg-transparent");
      setLogoPosition("lg:justify-center sm:justify-start");
      setCOlor("text-white");
    }
  };

  const moveUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleTabClick = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="relative">
      <div
        className={`  ${bgColor} duration-300 ease-in-out fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-2 z-50`}
      >
        <div
          className={`flex ${logoPosition} w-full transition-all duration-300`}
        >
          <Link onClick={moveUp} to="/">
            <img
              src="/logo.svg"
              alt="Logo"
              className="lg:h-20 h-12 p-1 mt-2 w-auto"
            />
          </Link>
        </div>

        <button
          onClick={toggleSidebar}
          className={`bg-transparent focus:outline-none relative z-50 `}
        >
          <div
            className={`hamburger flex flex-col  justify-between w-8 h-5 transition-all duration-300 ease-in-out ${
              isSidebarOpen ? "open" : ""
            }`}
          >
            {/* Top Line */}
            <div
              className={`h-[2px] mb-1 ${
                color.split("-")[1] === "black" ? "bg-black" : "bg-white"
              } transition-all duration-300 ease-in-out ${
                isSidebarOpen ? "scale-x-0" : "scale-x-100"
              } origin-right`}
            ></div>

            {/* Middle Line */}
            <div
              className={`h-[2px] mb-1 ${
                color.split("-")[1] === "black" ? "bg-black" : "bg-white"
              } transition-all duration-500 ease-in-out ${
                isSidebarOpen ? "scale-x-0" : "scale-x-100"
              } origin-right`}
            ></div>
            <div
              className={`h-[2px] ${
                color.split("-")[1] === "black" ? "bg-black" : "bg-white"
              } transition-all duration-500 ease-in-out ${
                isSidebarOpen ? "scale-x-0" : "scale-x-90"
              } origin-right`}
            ></div>

            {/* Bottom Line 1 (forming the top part of the cross) */}
            <div
              className={`h-[2px] ${
                color.split("-")[1] === "black" ? "bg-black" : "bg-white"
              } transition-all duration-500 ease-in-out ${
                isSidebarOpen
                  ? "rotate-[45deg] translate-y-[8.2px] scale-x-100"
                  : "scale-x-0"
              } origin-right`}
            ></div>

            {/* Bottom Line 2 (forming the bottom part of the cross) */}
            <div
              className={`h-[2px] ${
                color.split("-")[1] === "black" ? "bg-black" : "bg-white"
              } transition-all duration-500 ease-in-out ${
                isSidebarOpen
                  ? "rotate-[-45deg] translate-y-[6px] translate-x-2 scale-x-100"
                  : "scale-x-0"
              } origin-left`}
            ></div>
          </div>
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#303a73] text-white z-40 transform transition-transform duration-500 ${
          isSidebarOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
        style={{ transition: "all 0.5s ease-in-out" }}
      >
        <div className="flex flex-col justify-center items-center h-full space-y-5">
          {tabs.map((tab, index) => (
            <Link
              key={index}
              to={tab.path}
              className="lg:text-6xl text-3xl hover:text-[#56bafc]"
              onClick={handleTabClick}
            >
              <motion.div
                className="flex items-center group space-x-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 100 }}
                animate={
                  isSidebarOpen
                    ? {
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.2 + index * 0.1, duration: 0.4 },
                      }
                    : { opacity: 0, y: 100 }
                }
              >
                {tab.icon}
                <h1 className="relative font-custom duration-300 group">
                  {tab.name}

                  <span className="absolute bottom-0 left-0 h-0.5 bg-[#56bafc] w-0 group-hover:w-full duration-300"></span>
                </h1>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

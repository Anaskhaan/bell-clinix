import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const tabs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgColor("bg-[#303a73]");
    } else {
      setBgColor("bg-[#56bafc]");
    }
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

  return (
    <div className="relative">
      <div
        className={`  ${bgColor} duration-300 ease-in-out fixed top-0 left-0 right-0 flex justify-between items-center p-4 z-50  `}
      >
        <div className="text-2xl font-bold text-center flex-1 sm:flex-none">
          <img src="logo.webp" alt="Logo" className="h-10 w-auto" />
        </div>

        <div className="hidden sm:flex space-x-6">
          {tabs.map((tab, index) => (
            <div key={index}>
              <Link to={tab.path} className="text-lg text-white ">
                {tab.name}
              </Link>
            </div>
          ))}
        </div>

        <button
          onClick={toggleSidebar}
          className="sm:hidden text-gray-800 bg-transparent focus:outline-none"
        >
          {isSidebarOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
        <div className="">
          <button className=" text-white  flex items-center justify-center  border rounded-3xl py-1 gap-2 px-4">
            Get a Quote <ArrowRight className=" mt-1" />
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-900 text-white z-40 transform transition-transform duration-500 ${
          isSidebarOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
        style={{ transition: "all 0.5s ease-in-out" }}
      >
        <div className="flex flex-col justify-center items-center h-full space-y-10">
          {tabs.map((tab, index) => (
            <Link key={index} to={tab.path} className="text-5xl ">
              {tab.name}{" "}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

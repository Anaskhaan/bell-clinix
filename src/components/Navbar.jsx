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
  const [logoPosition, setLogoPosition] = useState("flex-1");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgColor("bg-[#303a73]");
      setLogoPosition("flex-1");
    } else {
      setBgColor("bg-transparent");
      setLogoPosition("sm:flex-none");
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

  // Close sidebar when a tab is clicked
  const handleTabClick = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="relative">
      <div
        className={`  ${bgColor} duration-300 ease-in-out fixed top-0 left-0 right-0 flex justify-between items-center p-6 z-50`}
      >
        <div></div>
        <div className={`text-2xl font-bold text-center ${logoPosition}`}>
          <Link onClick={moveUp} to="/">
            <img src="logo.webp" alt="Logo" className="h-16 w-auto" />
          </Link>
        </div>

        <button
          onClick={toggleSidebar}
          className="text-white bg-transparent focus:outline-none"
        >
          {isSidebarOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#303a73] text-white z-40 transform transition-transform duration-500 ${
          isSidebarOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
        style={{ transition: "all 0.5s ease-in-out" }}
      >
        <div className="flex flex-col justify-center items-center h-full space-y-10">
          {tabs.map((tab, index) => (
            <Link
              key={index}
              to={tab.path}
              className="text-5xl"
              onClick={handleTabClick} // Close sidebar on tab click
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

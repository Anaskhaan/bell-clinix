import { useState } from "react";
import { Cross, Menu, X } from "lucide-react";

const tabs = ["Who We Are", "What We Do", "Services", "Contact Us"];

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-4  shadow-md z-50">
        <div className="text-2xl font-bold text-center flex-1   ">
          <img src="logo.webp" alt="" />
        </div>
        <button
          onClick={toggleSidebar}
          className="text-white focus:border-none"
        >
          {isSidebarOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-900 text-white z-40 transform transition-transform duration-500 ${
          isSidebarOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
        style={{ transition: "all 0.5s ease-in-out" }}
      >
        <div className="flex flex-col justify-center items-center h-full space-y-6">
          {tabs.map((tab, index) => (
            <button key={index} className="text-2xl hover:text-gray-400">
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

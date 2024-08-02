import React from "react";
import { FaHome, FaChartPie, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="hidden md:block w-64 bg-gray-800 p-4">
      <nav className="flex flex-col space-y-4">
        <a href="/" className="flex items-center space-x-2 text-lg">
          <FaHome />
          <span>Dashboard</span>
        </a>
        <a href="/" className="flex items-center space-x-2 text-lg">
          <FaChartPie />
          <span>Analytics</span>
        </a>
        <a href="/" className="flex items-center space-x-2 text-lg">
          <FaCog />
          <span>Settings</span>
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;

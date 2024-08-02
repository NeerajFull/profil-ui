import React from "react";
import { FaBell, FaEnvelope, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="flex space-x-4">
        <FaBell className="text-xl" />
        <FaEnvelope className="text-xl" />
        <FaUserCircle className="text-xl" />
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import "./Navbar.css";
import { FaInfinity } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="navbar">
      <p className="logo-name">Travel Ula</p>
      <FaInfinity />
      <button>
        <CiMenuFries />
      </button>
    </nav>
  );
};

export default Navbar;

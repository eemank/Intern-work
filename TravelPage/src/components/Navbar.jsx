import React, { useState } from 'react';
import logo from "../assets/images/logo.webp";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleclick = () => {
    alert("button clicked");
  };

  return (
    <nav className="relative z-20">

      {/* Main Container */}
      <div className="flex justify-between items-center max-w-[7.5xl] mx-auto px-4 md:px-1 md:pr-22">

        {/* Logo */}
        <div className="flex items-center h-14">
          <img
            src={logo}
            alt="logo"
            className="h-8 md:pl-26"
          />
        </div>

        {/* Desktop Menu (UNCHANGED spacing) */}
        <div className="hidden md:flex justify-between items-center text-black gap-18">
          <a href="#destination">Destination</a>
          <a href="#hotesls">Hotels</a>
          <a href="#flights">Flights</a>
          <a href="#bookings">Bookings</a>
          <button onClick={handleclick} className="cursor-pointer">
            Login
          </button>
          <button className="border-2 cursor-pointer border-black px-4 rounded">
            Signup
          </button>
          <select>
            <option>EN</option>
            <option>FR</option>
          </select>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-white shadow-md">
          <a href="#destination">Destination</a>
          <a href="#hotesls">Hotels</a>
          <a href="#flights">Flights</a>
          <a href="#bookings">Bookings</a>
          <button onClick={handleclick}>Login</button>
          <button className="border-2 border-black px-4 rounded">
            Signup
          </button>
          <select>
            <option>EN</option>
            <option>FR</option>
          </select>
        </div>
      )}

    </nav>
  );
};

export default Navbar;

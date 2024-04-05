import React, { useState } from "react";
import logo from "../assets/icons/logo.svg";
import { Link } from "react-router-dom";



const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

  return (
    <div className="w-full h-14 md:h-20 shadow-lg shadow-gray-1000 bg-gray-900 flex justify-between items-center px-3 md:px-8">
      <div className="flex justify-start items-center">
        <img src={logo} alt="Logo" className=" -ml-4 w-24 md:w-28" />
        <p className="hidden md:block font-bold text-white font-custom text-3xl text-inherit -ml-9 -mb-2 align-bottom">
          niconn
        </p>
      </div>
      
      {/* right side  */}
        <div className="flex gap-x-4 md:gap-x-6">
        <Link to="/login">
            <button className="p-2 md:px-4 text-xs md:text-base bg-emerald-600 rounded-lg text-black font-semibold hover:bg-opacity-90"> Sign In</button>
        </Link>
        <Link to="/registration">
            <button className="p-2 md:px-4 text-xs md:text-base bg-emerald-600 rounded-lg text-black font-semibold hover:bg-opacity-90"> Sign Up</button>
        </Link>
        </div>
        
    </div>
  );
};

export default Navbar;

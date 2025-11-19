import React from "react";
import logo from '../assets/images/logo1.png';

const Navbar = () => {
  return (
    <>

   
    <div id="navbar" className="bg-green-300 rounded-3xl p-6 shadow-lg sticky  left-0 w-full z-50 space-y-6">
    
      <div className="flex items-center justify-between">
        {/* <!-- Logo and Back Button --> */}
        <div className="flex items-center space-x-4">
          
          <div className="flex items-center space-x-2">

            <img src={logo} className="h-8" alt="Logo" />
          </div>
        </div>

        {/* <!-- Navigation Menu --> */}
        <nav id="navMenu" className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-sage-700 hover:text-sage-900 font-medium">Home</a>
          <a href="#projects" className="text-sage-700 hover:text-sage-900 font-medium">Projects</a>
          <a href="#about" className="text-sage-700 hover:text-sage-900 font-medium">About Me</a>
          <a href="#blog" className="text-sage-700 hover:text-sage-900 font-medium">Blog</a>
          <a href="#services" className="text-sage-700 hover:text-sage-900 font-medium">Services</a>
        </nav>

        {/* <!-- Sign In Button --> */}
        <button  className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-full font-medium transition-colors flex items-center space-x-2">
           <a href="#contact">Contact Me</a>
          
        </button>
      </div>
    </div>
   
    </>
  );
};

export default Navbar;

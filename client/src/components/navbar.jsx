import React from "react";
const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/assets/images/logo.png"
            alt="Logo"
            className="h-8 w-8"
          />
          <span className="text-lg font-bold text-blue-600">
            DeliveryPro
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Services
          </a>
          <a
            href="#pricing"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Pricing
          </a>
          <a
            href="#ContactUs"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Contact
          </a>
        </nav>

        {/* Call to Action Button */}
        <div>
          <a
            href="#get-started"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
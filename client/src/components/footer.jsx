import React from "react";

const Footer = () => {
  return (

    <footer className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        {/* Contact Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <span>📞 2345 2132 3432</span>
            </li>
            <li>
              <span>✉️ abc@gmail.com</span>
            </li>
            <li>
              <span>🌐 Facebook</span>
            </li>
            <li>
              <span>📸 Instagram</span>
            </li>
            <li>
              <span>💼 LinkedIn</span>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">About</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about-us" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#help" className="hover:underline">
                Help
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#improving-lives" className="hover:underline">
                Improving Lives
              </a>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#global-carrier" className="hover:underline">
                Our Global Carrier Network
              </a>
            </li>
            <li>
              <a href="#partner" className="hover:underline">
                Become A Partner
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:underline">
                Privacy & Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Additional Info */}
        <div>
          <h3 className="font-bold text-lg mb-4">More Info</h3>
          <ul className="space-y-2">
            <li>
              <a href="#cash-on-delivery" className="hover:underline">
                Cash On Delivery
              </a>
            </li>
            <li>
              <a href="#packaging" className="hover:underline">
                Packaging Advice
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

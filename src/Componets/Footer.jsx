import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"; // Importing icons from react-icons
import Logo from '../assets/10assimentwebsite logo.png'; // Your website logo

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-indigo-900 to-gray-900  text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Top: Logo and Info */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <img src={Logo} alt="Website Logo" className="w-30 h-24" />
            <div className="text-lg font-semibold">
              <h1>Crowdcube</h1>
              <p className="text-sm font-semibold w-1/3 ">Crowdcube's timeline involves pre-launch, active campaign phase, closing, and post-campaign investor engagement.</p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex space-x-8 mb-6 md:mb-0">
            <div>
              <h3 className="font-semibold text-xl mb-3">Quick Links</h3>
              <ul>
                <li><a href="/" className="hover:text-blue-400">Home</a></li>
                <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
                <li><a href="/services" className="hover:text-blue-400">Services</a></li>
                <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-3">Social Media</h3>
              <ul className="flex space-x-6">
                {/* Using React Icons for social media links */}
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                    <FaFacebook size={24} />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                    <FaTwitter size={24} />
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                    <FaLinkedin size={24} />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                    <FaInstagram size={24} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom: Contact Info and Copyright */}
        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-sm">
          <p className="text-gray-400">Contact: info@yourwebsite.com</p>
          <p className="text-gray-400">© {new Date().getFullYear()} Your Website Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

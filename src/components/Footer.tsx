import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Globe className="h-7 w-7 text-white" />
              <span className="ml-2 text-xl font-bold text-white">Offbeats</span>
            </Link>
            <p className="text-sm mb-6 opacity-70">
              Discover the world's most amazing places with Offbeats. We help you find, plan and enjoy extraordinary travel experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-white transition-colors">Africa</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Asia</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Europe</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">North America</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">South America</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Oceania</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-white transition-colors">Beach Getaways</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Mountain Escapes</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">City Breaks</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Cultural Tours</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Luxury Resorts</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Adventure Travel</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Offbeats. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <select className="bg-gray-800 text-gray-300 rounded py-1 px-2 text-sm border border-gray-700">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

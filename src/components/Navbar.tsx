
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src="/lovable-uploads/f8250dd6-05ce-48b4-adeb-70a93e14d13c.png" 
                alt="Offbeats Logo" 
                className="h-10 w-10" 
              />
              <span className="ml-2 text-xl font-bold text-explorea-forest">Offbeats</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/destinations" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-explorea-forest hover:bg-gray-100">
              Destinations
            </Link>
            <Link to="/categories" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-explorea-forest hover:bg-gray-100">
              Categories
            </Link>
            <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-explorea-forest hover:bg-gray-100">
              About
            </Link>
            
            <div className="ml-4 flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" className="ml-2">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </div>
          </div>
          
          <div className="flex md:hidden items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="pt-2 pb-3 space-y-1 px-4">
            <Link to="/destinations" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-explorea-forest hover:bg-gray-100">
              Destinations
            </Link>
            <Link to="/categories" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-explorea-forest hover:bg-gray-100">
              Categories
            </Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-explorea-forest hover:bg-gray-100">
              About
            </Link>
            <div className="flex space-x-2 mt-4">
              <Button variant="outline" size="sm" className="flex-1">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Heart className="h-4 w-4 mr-2" />
                Favorites
              </Button>
            </div>
            <Button className="w-full mt-2 bg-explorea-forest hover:bg-explorea-forest/90">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

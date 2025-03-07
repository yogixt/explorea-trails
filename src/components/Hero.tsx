
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-section min-h-[80vh] flex items-center justify-center text-white">
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Discover Your Next Adventure
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto">
          Explore breathtaking destinations, plan your perfect trip, and create memories that will last a lifetime.
        </p>
        
        <div className="relative max-w-md mx-auto">
          <div className="flex bg-white rounded-full overflow-hidden shadow-lg">
            <input 
              type="text" 
              className="w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" 
              placeholder="Where to next?"
            />
            <Button className="bg-explorea-forest hover:bg-explorea-forest/90 rounded-full m-1">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-explorea-forest">
            Popular Destinations
          </Button>
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-explorea-ocean">
            Travel Guides
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Heart, Search, Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Sample data
const allDestinations = [
  {
    id: 1,
    name: "Alpine Mountains",
    location: "Switzerland",
    image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
    rating: 4.8,
    category: "Mountain",
    description: "Stunning mountain views with crystal clear lakes and lush green valleys."
  },
  {
    id: 2,
    name: "Coastal Paradise",
    location: "Greece",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    rating: 4.7,
    category: "Beach",
    description: "Beautiful white sand beaches with crystal clear turquoise waters."
  },
  {
    id: 3,
    name: "Ancient Forests",
    location: "Canada",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    rating: 4.6,
    category: "Nature",
    description: "Majestic old-growth forests with towering trees and abundant wildlife."
  },
  {
    id: 4,
    name: "Misty Mountains",
    location: "New Zealand",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    rating: 4.9,
    category: "Mountain",
    description: "Dramatic mountain landscapes shrouded in mist with breathtaking views."
  },
  {
    id: 5,
    name: "Historic City",
    location: "Italy",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    rating: 4.7,
    category: "City",
    description: "Ancient architecture and rich cultural heritage in a vibrant city setting."
  },
  {
    id: 6,
    name: "Tropical Island",
    location: "Indonesia",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    rating: 4.8,
    category: "Beach",
    description: "Pristine beaches, lush jungles, and crystal-clear waters teeming with marine life."
  },
  {
    id: 7,
    name: "Canyon Adventure",
    location: "United States",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    rating: 4.6,
    category: "Nature",
    description: "Vast canyons carved by ancient rivers, offering spectacular views and hiking trails."
  },
  {
    id: 8,
    name: "Northern Lights",
    location: "Iceland",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    rating: 4.9,
    category: "Nature",
    description: "Witness the magical aurora borealis dancing across the northern night sky."
  }
];

const categories = ["All", "Beach", "Mountain", "Nature", "City"];
const sortOptions = ["Popularity", "Rating: High to Low", "Rating: Low to High", "A-Z", "Z-A"];

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  
  const filteredDestinations = allDestinations
    .filter(dest => 
      (searchTerm === '' || 
        dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.location.toLowerCase().includes(searchTerm.toLowerCase())
      ) &&
      (selectedCategory === 'All' || dest.category === selectedCategory)
    )
    .sort((a, b) => {
      switch(sortBy) {
        case "Rating: High to Low":
          return b.rating - a.rating;
        case "Rating: Low to High":
          return a.rating - b.rating;
        case "A-Z":
          return a.name.localeCompare(b.name);
        case "Z-A":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <div className="bg-explorea-forest text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Amazing Destinations</h1>
            <p className="text-lg md:text-xl max-w-2xl opacity-90">
              Discover beautiful places around the world and plan your next unforgettable journey
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search destinations by name or location"
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex gap-2">
                    <Filter className="h-4 w-4" />
                    {selectedCategory}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {categories.map((category) => (
                    <DropdownMenuItem 
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex gap-2">
                    Sort: {sortBy}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {sortOptions.map((option) => (
                    <DropdownMenuItem 
                      key={option}
                      onClick={() => setSortBy(option)}
                    >
                      {option}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-gray-600">
              Showing {filteredDestinations.length} of {allDestinations.length} destinations
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDestinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white">
                    <Heart className="h-5 w-5 text-gray-600 hover:text-explorea-sunset" />
                  </button>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex items-center text-white">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{destination.location}</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="pt-4">
                  <Link to={`/destination/${destination.id}`}>
                    <h3 className="font-bold text-lg mb-2 hover:text-explorea-forest">{destination.name}</h3>
                  </Link>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="ml-1 text-sm font-medium">{destination.rating}</span>
                    </div>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-600">{destination.category}</span>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">{destination.description}</p>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <Button 
                    asChild
                    variant="outline" 
                    className="w-full border-explorea-forest text-explorea-forest hover:bg-explorea-forest hover:text-white"
                  >
                    <Link to={`/destination/${destination.id}`}>
                      Explore
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {filteredDestinations.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No destinations found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filters to find what you're looking for.</p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Destinations;

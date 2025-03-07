
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

type Destination = {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  description: string;
};

const destinations: Destination[] = [
  {
    id: 1,
    name: "Alpine Mountains",
    location: "Switzerland",
    image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
    rating: 4.8,
    description: "Stunning mountain views with crystal clear lakes and lush green valleys."
  },
  {
    id: 2,
    name: "Coastal Paradise",
    location: "Greece",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    rating: 4.7,
    description: "Beautiful white sand beaches with crystal clear turquoise waters."
  },
  {
    id: 3,
    name: "Ancient Forests",
    location: "Canada",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    rating: 4.6,
    description: "Majestic old-growth forests with towering trees and abundant wildlife."
  },
  {
    id: 4,
    name: "Misty Mountains",
    location: "New Zealand",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    rating: 4.9,
    description: "Dramatic mountain landscapes shrouded in mist with breathtaking views."
  }
];

const FeaturedDestinations = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Destinations</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our handpicked selection of breathtaking destinations around the world
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {destinations.map((destination) => (
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
                <span className="text-sm text-gray-600">Excellent</span>
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
      
      <div className="mt-12 text-center">
        <Button asChild className="bg-explorea-forest hover:bg-explorea-forest/90">
          <Link to="/destinations">
            View all destinations
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default FeaturedDestinations;

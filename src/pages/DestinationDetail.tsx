
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, Star, Users, Heart, Share2, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

// Mock data for a single destination
const getDestination = (id: string) => {
  return {
    id: parseInt(id),
    name: id === "1" ? "Alpine Mountains" : 
          id === "2" ? "Coastal Paradise" : 
          id === "3" ? "Ancient Forests" : 
          "Misty Mountains",
    location: id === "1" ? "Switzerland" : 
             id === "2" ? "Greece" : 
             id === "3" ? "Canada" : 
             "New Zealand",
    image: id === "1" ? "https://images.unsplash.com/photo-1458668383970-8ddd3927deed" : 
           id === "2" ? "https://images.unsplash.com/photo-1500375592092-40eb2168fd21" : 
           id === "3" ? "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86" : 
           "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    rating: id === "1" ? 4.8 : 
            id === "2" ? 4.7 : 
            id === "3" ? 4.6 : 
            4.9,
    description: id === "1" ? "Stunning mountain views with crystal clear lakes and lush green valleys. Switzerland's Alpine region offers breathtaking landscapes, charming villages, and world-class hiking trails. Experience the beauty of the mountains in all seasons, from snow-covered peaks in winter to flower-filled meadows in summer." : 
                 id === "2" ? "Beautiful white sand beaches with crystal clear turquoise waters. Greece's coastal regions provide a perfect escape with their stunning beaches, ancient ruins, and delicious Mediterranean cuisine. Enjoy island hopping, snorkeling in pristine waters, and watching spectacular sunsets." : 
                 id === "3" ? "Majestic old-growth forests with towering trees and abundant wildlife. Canada's ancient forests are home to diverse ecosystems, offering opportunities for hiking, wildlife watching, and connecting with nature. Explore moss-covered trails, crystal-clear streams, and breathtaking viewpoints." : 
                 "Dramatic mountain landscapes shrouded in mist with breathtaking views. New Zealand's misty mountains create a mystical atmosphere that feels like stepping into another world. Perfect for photography enthusiasts, hikers, and anyone seeking to experience the raw beauty of nature.",
    attractions: [
      { name: "Main Viewpoint", rating: 4.9, reviews: 128 },
      { name: "Local Village", rating: 4.7, reviews: 93 },
      { name: "Historic Site", rating: 4.6, reviews: 75 },
      { name: "Natural Wonder", rating: 4.8, reviews: 112 }
    ],
    reviews: [
      { user: "Alex", date: "March 2023", rating: 5, text: "Absolutely beautiful place! The views are breathtaking and the local cuisine is amazing." },
      { user: "Maya", date: "February 2023", rating: 4, text: "Great destination with lots to see. Would highly recommend visiting in the spring." },
      { user: "Carlos", date: "January 2023", rating: 5, text: "One of the best travel experiences I've had. The landscapes are even more stunning in person." }
    ]
  };
};

const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const destination = getDestination(id || "1");
  
  const handleFavorite = () => {
    toast({
      title: "Added to favorites",
      description: `${destination.name} has been added to your favorites!`,
      duration: 3000,
    });
  };
  
  const handleShare = () => {
    toast({
      title: "Share link copied",
      description: "Destination link has been copied to clipboard!",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <div className="relative h-[50vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <img 
            src={destination.image} 
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full z-20 p-8 bg-gradient-to-t from-black/80 to-transparent">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center text-white mb-2">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-lg">{destination.location}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{destination.name}</h1>
              <div className="flex items-center text-white space-x-2">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1">{destination.rating}</span>
                </div>
                <span>•</span>
                <span className="text-sm">{destination.attractions.length} attractions</span>
                <span>•</span>
                <span className="text-sm">{destination.reviews.length} reviews</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <Tabs defaultValue="overview">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="attractions">Attractions</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">About {destination.name}</h2>
                    <p className="text-gray-700 leading-relaxed">
                      {destination.description}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Location Information</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start">
                        <Globe className="h-5 w-5 text-gray-500 mt-1 mr-3" />
                        <div>
                          <h4 className="font-medium">Getting There</h4>
                          <p className="text-sm text-gray-600 mt-1">Information about how to reach {destination.name} in {destination.location}, including nearby airports, transportation options, and travel times.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Best Time to Visit</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 text-gray-500 mt-1 mr-3" />
                        <div>
                          <h4 className="font-medium">Seasonal Information</h4>
                          <p className="text-sm text-gray-600 mt-1">Details about the best seasons to visit {destination.name}, weather conditions throughout the year, and any special events or festivals.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="attractions">
                  <h2 className="text-2xl font-bold mb-4">Popular Attractions</h2>
                  <div className="space-y-4">
                    {destination.attractions.map((attraction, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center">
                          <h3 className="font-semibold">{attraction.name}</h3>
                          <div className="flex items-center text-sm">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="ml-1">{attraction.rating}</span>
                            <span className="text-gray-500 ml-1">({attraction.reviews} reviews)</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          A popular attraction in {destination.name} that visitors love to explore.
                        </p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Traveler Reviews</h2>
                    <Button>Write a Review</Button>
                  </div>
                  
                  <div className="space-y-6">
                    {destination.reviews.map((review, index) => (
                      <div key={index} className="border-b pb-6 last:border-b-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="font-medium">{review.user}</span>
                            <p className="text-sm text-gray-500">{review.date}</p>
                          </div>
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                        </div>
                        <p className="mt-3 text-gray-700">{review.text}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="md:w-1/3">
              <div className="bg-white border rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Plan Your Visit</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Best season</span>
                    <span className="font-medium">May-September</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Recommended stay</span>
                    <span className="font-medium">3-5 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Languages</span>
                    <span className="font-medium">English, Local</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Currency</span>
                    <span className="font-medium">Local Currency</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full bg-explorea-forest hover:bg-explorea-forest/90">
                    <Calendar className="h-4 w-4 mr-2" />
                    Plan a Trip
                  </Button>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" onClick={handleFavorite}>
                      <Heart className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" onClick={handleShare}>
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DestinationDetail;

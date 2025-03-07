
import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Navigation, Compass, Camera, Hotel, Map } from 'lucide-react';

type Category = {
  id: number;
  name: string;
  icon: React.ElementType;
  color: string;
};

const categories: Category[] = [
  {
    id: 1,
    name: "Beach Getaways",
    icon: Navigation,
    color: "bg-blue-500"
  },
  {
    id: 2,
    name: "Mountain Escapes",
    icon: Compass,
    color: "bg-emerald-600"
  },
  {
    id: 3,
    name: "City Breaks",
    icon: Map,
    color: "bg-purple-600"
  },
  {
    id: 4,
    name: "Cultural Tours",
    icon: Camera,
    color: "bg-amber-500"
  },
  {
    id: 5,
    name: "Luxury Resorts",
    icon: Hotel,
    color: "bg-rose-500"
  },
  {
    id: 6,
    name: "Adventure Travel",
    icon: Plane,
    color: "bg-indigo-600"
  }
];

const Categories = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore by Category</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect trip based on your interests and preferences
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group"
            >
              <div className="flex flex-col items-center">
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mb-4 text-white transform transition-transform group-hover:scale-110`}>
                  <category.icon className="h-7 w-7" />
                </div>
                <span className="text-center font-medium text-gray-900 group-hover:text-explorea-forest">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

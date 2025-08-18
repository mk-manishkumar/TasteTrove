import React from "react";
import { Clock, Heart, Star } from "lucide-react";

export interface RestaurantType {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  image: string;
  offer: string;
}

interface Props {
  restaurants: RestaurantType[];
}

const FeaturedRestaurantsSection: React.FC<Props> = ({ restaurants }) => (
  <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Restaurants</h2>
        <p className="text-xl text-gray-600">Top-rated restaurants near you</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {restaurants.map((r) => (
          <div key={r.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
            <div className="relative overflow-hidden">
              <img src={r.image} alt={r.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-semibold">{r.offer}</div>
              <button className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-red-500 hover:bg-white hover:scale-110 transition-all">
                <Heart size={16} />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{r.name}</h3>
              <p className="text-gray-600 mb-4">{r.cuisine}</p>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1">
                  <Star className="text-yellow-400 fill-current" size={16} />
                  <span className="font-semibold">{r.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <Clock size={16} />
                  <span>{r.deliveryTime}</span>
                </div>
                <div className="font-semibold text-green-600">{r.deliveryFee}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedRestaurantsSection;

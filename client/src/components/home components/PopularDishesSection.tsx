import React from "react";
import { Star } from "lucide-react";
import { Button } from "../ui/button";

export interface DishType {
  id: number;
  name: string;
  restaurant: string;
  price: number;
  rating: number;
  image: string;
}

interface Props {
  dishes: DishType[];
}

const PopularDishesSection: React.FC<Props> = ({ dishes }) => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Dishes</h2>
        <p className="text-xl text-gray-600">Most loved dishes by our customers</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {dishes.map((d) => (
          <div key={d.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
            <div className="relative overflow-hidden">
              <img src={d.image} alt={d.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-1">{d.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{d.restaurant}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="text-yellow-400 fill-current" size={14} />
                  <span className="text-sm font-semibold">{d.rating}</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">${d.price}</div>
              </div>
              <Button className="w-full mt-4 bg-gradient-to-r from-red-500 to-orange-400 text-white py-7 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">Add to Cart</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PopularDishesSection;

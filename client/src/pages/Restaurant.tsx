import React, { useState, useEffect } from "react";
import { Star, Clock, MapPin, Heart, Filter, Search, SlidersHorizontal, Grid3X3, List, Truck, Award, Flame, DollarSign, ChevronDown, X } from "lucide-react";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const Restaurant = () => {
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [deliveryFilter, setDeliveryFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState(new Set());

  // Mock restaurants data
  const restaurants = [
    {
      id: 1,
      name: "Mario's Italian Kitchen",
      cuisine: "Italian",
      cuisines: ["Italian", "Pizza", "Pasta"],
      rating: 4.8,
      reviewCount: 1247,
      deliveryTime: "25-35 min",
      deliveryFee: 0,
      minOrder: 15,
      distance: 2.5,
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
      coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=200&fit=crop",
      description: "Authentic Italian cuisine with fresh ingredients and traditional recipes",
      priceRange: "$$",
      offers: ["30% OFF on orders above $25"],
      tags: ["Popular", "Free Delivery"],
      isOpen: true,
      promoted: true,
    },
    {
      id: 2,
      name: "Dragon Palace",
      cuisine: "Chinese",
      cuisines: ["Chinese", "Asian", "Noodles"],
      rating: 4.6,
      reviewCount: 856,
      deliveryTime: "20-30 min",
      deliveryFee: 2.99,
      minOrder: 12,
      distance: 1.8,
      image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=400&h=300&fit=crop",
      coverImage: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&h=200&fit=crop",
      description: "Traditional Chinese dishes with modern presentation",
      priceRange: "$$",
      offers: ["Buy 1 Get 1 on selected items"],
      tags: ["Fast Delivery"],
      isOpen: true,
      promoted: false,
    },
    {
      id: 3,
      name: "Burger Haven",
      cuisine: "American",
      cuisines: ["American", "Burgers", "Fast Food"],
      rating: 4.7,
      reviewCount: 2103,
      deliveryTime: "15-25 min",
      deliveryFee: 0,
      minOrder: 10,
      distance: 0.9,
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
      coverImage: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=200&fit=crop",
      description: "Gourmet burgers made with premium ingredients",
      priceRange: "$",
      offers: ["20% OFF on weekdays"],
      tags: ["Popular", "Free Delivery"],
      isOpen: true,
      promoted: true,
    },
    {
      id: 4,
      name: "Spice Route",
      cuisine: "Indian",
      cuisines: ["Indian", "Curry", "Vegetarian"],
      rating: 4.9,
      reviewCount: 743,
      deliveryTime: "30-40 min",
      deliveryFee: 1.99,
      minOrder: 20,
      distance: 3.2,
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
      coverImage: "https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?w=600&h=200&fit=crop",
      description: "Authentic Indian spices and flavors from various regions",
      priceRange: "$$",
      offers: [],
      tags: ["Highest Rated", "Spicy"],
      isOpen: true,
      promoted: false,
    },
    {
      id: 5,
      name: "Sushi Zen",
      cuisine: "Japanese",
      cuisines: ["Japanese", "Sushi", "Asian"],
      rating: 4.5,
      reviewCount: 432,
      deliveryTime: "35-45 min",
      deliveryFee: 3.99,
      minOrder: 25,
      distance: 4.1,
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
      coverImage: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&h=200&fit=crop",
      description: "Fresh sushi and Japanese delicacies prepared by expert chefs",
      priceRange: "$$$",
      offers: ["Free delivery on orders above $40"],
      tags: ["Premium"],
      isOpen: true,
      promoted: false,
    },
    {
      id: 6,
      name: "Taco Fiesta",
      cuisine: "Mexican",
      cuisines: ["Mexican", "Tacos", "Latin"],
      rating: 4.4,
      reviewCount: 621,
      deliveryTime: "20-30 min",
      deliveryFee: 2.49,
      minOrder: 15,
      distance: 2.7,
      image: "https://images.unsplash.com/photo-1565299585323-38174c4a6c2d?w=400&h=300&fit=crop",
      coverImage: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&h=200&fit=crop",
      description: "Vibrant Mexican flavors with fresh ingredients and bold spices",
      priceRange: "$",
      offers: ["Happy Hour: 50% off drinks"],
      tags: ["Spicy", "Vegetarian Options"],
      isOpen: false,
      promoted: false,
    },
    {
      id: 7,
      name: "Mediterranean Delight",
      cuisine: "Mediterranean",
      cuisines: ["Mediterranean", "Greek", "Healthy"],
      rating: 4.6,
      reviewCount: 387,
      deliveryTime: "25-35 min",
      deliveryFee: 0,
      minOrder: 18,
      distance: 1.5,
      image: "https://images.unsplash.com/photo-1544948503-7ad532ac9c7e?w=400&h=300&fit=crop",
      coverImage: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=200&fit=crop",
      description: "Healthy Mediterranean dishes with fresh vegetables and olive oil",
      priceRange: "$$",
      offers: [],
      tags: ["Healthy", "Free Delivery"],
      isOpen: true,
      promoted: false,
    },
    {
      id: 8,
      name: "BBQ Master",
      cuisine: "BBQ",
      cuisines: ["BBQ", "American", "Grilled"],
      rating: 4.7,
      reviewCount: 934,
      deliveryTime: "30-40 min",
      deliveryFee: 1.99,
      minOrder: 22,
      distance: 3.8,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
      coverImage: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&h=200&fit=crop",
      description: "Smoky BBQ flavors with tender meats and signature sauces",
      priceRange: "$$",
      offers: ["Weekend Special: Free sides"],
      tags: ["Popular"],
      isOpen: true,
      promoted: true,
    },
    {
      id: 9,
      name: "Veggie Paradise",
      cuisine: "Vegetarian",
      cuisines: ["Vegetarian", "Vegan", "Healthy"],
      rating: 4.5,
      reviewCount: 298,
      deliveryTime: "20-30 min",
      deliveryFee: 0,
      minOrder: 12,
      distance: 1.2,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      coverImage: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=200&fit=crop",
      description: "Plant-based cuisine with creative and flavorful preparations",
      priceRange: "$",
      offers: ["10% off for new customers"],
      tags: ["Vegetarian", "Healthy", "Free Delivery"],
      isOpen: true,
      promoted: false,
    },
    {
      id: 10,
      name: "Coffee & More",
      cuisine: "Cafe",
      cuisines: ["Cafe", "Coffee", "Desserts"],
      rating: 4.3,
      reviewCount: 567,
      deliveryTime: "15-25 min",
      deliveryFee: 1.49,
      minOrder: 8,
      distance: 0.6,
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
      coverImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=200&fit=crop",
      description: "Artisan coffee, pastries, and light bites in a cozy atmosphere",
      priceRange: "$",
      offers: ["Buy 2 Get 1 Free on coffee"],
      tags: ["Fast Delivery", "Desserts"],
      isOpen: true,
      promoted: false,
    },
  ];

  const cuisineTypes = ["Italian", "Chinese", "American", "Indian", "Japanese", "Mexican", "Mediterranean", "BBQ", "Vegetarian", "Cafe"];

  // Filter and sort restaurants
  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) || restaurant.cuisines.some((cuisine) => cuisine.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCuisine = selectedCuisines.length === 0 || selectedCuisines.some((cuisine) => restaurant.cuisines.includes(cuisine));

    const matchesPrice = priceRange === "all" || restaurant.priceRange === priceRange;

    const matchesDelivery = deliveryFilter === "all" || (deliveryFilter === "free" && restaurant.deliveryFee === 0) || (deliveryFilter === "fast" && parseInt(restaurant.deliveryTime) <= 25);

    return matchesSearch && matchesCuisine && matchesPrice && matchesDelivery && restaurant.isOpen;
  });

  const sortedRestaurants = [...filteredRestaurants].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "deliveryTime":
        return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
      case "distance":
        return a.distance - b.distance;
      case "popular":
      default:
        return (b.promoted ? 1 : 0) - (a.promoted ? 1 : 0) || b.reviewCount - a.reviewCount;
    }
  });

  const toggleFavorite = (restaurantId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(restaurantId)) {
      newFavorites.delete(restaurantId);
    } else {
      newFavorites.add(restaurantId);
    }
    setFavorites(newFavorites);
  };

  const toggleCuisine = (cuisine) => {
    setSelectedCuisines((prev) => (prev.includes(cuisine) ? prev.filter((c) => c !== cuisine) : [...prev, cuisine]));
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCuisines([]);
    setPriceRange("all");
    setDeliveryFilter("all");
    setSortBy("popular");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-500 to-orange-400 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Amazing Restaurants</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">From local favorites to trending hotspots, find your next great meal</p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
                <input type="text" placeholder="Search restaurants, cuisines, or dishes..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-16 pr-6 py-4 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/20 shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Controls */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Filter Controls */}
            <div className="flex items-center gap-4 flex-wrap">
              <button onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                <SlidersHorizontal size={18} />
                <span>Filters</span>
                {(selectedCuisines.length > 0 || priceRange !== "all" || deliveryFilter !== "all") && <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">{selectedCuisines.length + (priceRange !== "all" ? 1 : 0) + (deliveryFilter !== "all" ? 1 : 0)}</span>}
              </button>

              {/* Quick Filters */}
              <div className="flex items-center gap-2 flex-wrap">
                <button onClick={() => setDeliveryFilter(deliveryFilter === "free" ? "all" : "free")} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${deliveryFilter === "free" ? "bg-green-100 text-green-700 border border-green-300" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                  Free Delivery
                </button>
                <button onClick={() => setDeliveryFilter(deliveryFilter === "fast" ? "all" : "fast")} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${deliveryFilter === "fast" ? "bg-blue-100 text-blue-700 border border-blue-300" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                  Fast Delivery
                </button>
              </div>

              {/* Clear Filters */}
              {(selectedCuisines.length > 0 || priceRange !== "all" || deliveryFilter !== "all" || searchQuery) && (
                <button onClick={clearFilters} className="text-red-500 hover:text-red-600 text-sm font-medium">
                  Clear all
                </button>
              )}
            </div>

            {/* Sort & View Controls */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="deliveryTime">Fastest Delivery</option>
                  <option value="distance">Nearest</option>
                </select>
              </div>

              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <button onClick={() => setViewMode("grid")} className={`p-2 transition-colors ${viewMode === "grid" ? "bg-red-500 text-white" : "text-gray-600 hover:bg-gray-100"}`}>
                  <Grid3X3 size={18} />
                </button>
                <button onClick={() => setViewMode("list")} className={`p-2 transition-colors ${viewMode === "list" ? "bg-red-500 text-white" : "text-gray-600 hover:bg-gray-100"}`}>
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Extended Filters */}
          {showFilters && (
            <div className="mt-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Cuisines */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Cuisines</h4>
                  <div className="flex flex-wrap gap-2">
                    {cuisineTypes.map((cuisine) => (
                      <button key={cuisine} onClick={() => toggleCuisine(cuisine)} className={`px-3 py-1 rounded-full text-sm transition-all ${selectedCuisines.includes(cuisine) ? "bg-red-500 text-white" : "bg-white text-gray-700 border border-gray-300 hover:border-red-300"}`}>
                        {cuisine}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Price Range</h4>
                  <div className="space-y-2">
                    {[
                      { value: "all", label: "All Prices" },
                      { value: "$", label: "$ - Budget Friendly" },
                      { value: "$$", label: "$$ - Moderate" },
                      { value: "$$$", label: "$$$ - Premium" },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center gap-2">
                        <input type="radio" name="priceRange" value={option.value} checked={priceRange === option.value} onChange={(e) => setPriceRange(e.target.value)} className="text-red-500 focus:ring-red-500" />
                        <span className="text-sm text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Delivery Options */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Delivery</h4>
                  <div className="space-y-2">
                    {[
                      { value: "all", label: "All Options" },
                      { value: "free", label: "Free Delivery" },
                      { value: "fast", label: "Fast Delivery (≤25 min)" },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center gap-2">
                        <input type="radio" name="deliveryFilter" value={option.value} checked={deliveryFilter === option.value} onChange={(e) => setDeliveryFilter(e.target.value)} className="text-red-500 focus:ring-red-500" />
                        <span className="text-sm text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            Showing {sortedRestaurants.length} of {restaurants.filter((r) => r.isOpen).length} restaurants
          </p>
        </div>
      </div>

      {/* Restaurants Grid/List */}
      <div className="container mx-auto px-6 pb-20">
        <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}>
          {sortedRestaurants.map((restaurant) => (
            <div key={restaurant.id} className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group ${viewMode === "list" ? "flex" : ""}`}>
              {/* Restaurant Image */}
              <div className={`relative overflow-hidden ${viewMode === "list" ? "w-80 h-48" : "h-48"}`}>
                <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                {/* Overlay Elements */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                    {restaurant.promoted && <span className="bg-gradient-to-r from-red-500 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-semibold">Promoted</span>}
                    {restaurant.offers.length > 0 && <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Offer Available</span>}
                  </div>
                  <button onClick={() => toggleFavorite(restaurant.id)} className={`w-10 h-10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 ${favorites.has(restaurant.id) ? "bg-red-500 text-white" : "bg-white/20 text-white hover:bg-white/30"}`}>
                    <Heart size={18} fill={favorites.has(restaurant.id) ? "currentColor" : "none"} />
                  </button>
                </div>

                {restaurant.deliveryFee === 0 && (
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Truck size={12} />
                      Free Delivery
                    </span>
                  </div>
                )}
              </div>

              {/* Restaurant Info */}
              <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{restaurant.name}</h3>
                    <p className="text-gray-600">{restaurant.cuisines.join(" • ")}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="font-semibold">{restaurant.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">({restaurant.reviewCount}+)</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{restaurant.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {restaurant.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className={`text-xs px-2 py-1 rounded-full ${tag === "Popular" ? "bg-red-100 text-red-700" : tag === "Free Delivery" ? "bg-green-100 text-green-700" : tag === "Fast Delivery" ? "bg-blue-100 text-blue-700" : tag === "Highest Rated" ? "bg-yellow-100 text-yellow-700" : tag === "Premium" ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-700"}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Delivery Info */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{restaurant.deliveryTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{restaurant.distance} km</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign size={14} />
                    <span>Min ${restaurant.minOrder}</span>
                  </div>
                </div>

                {/* Offers */}
                {restaurant.offers.length > 0 && (
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
                    <p className="text-orange-700 text-sm font-medium">🎉 {restaurant.offers[0]}</p>
                  </div>
                )}

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-red-500 to-orange-400 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">View Menu</button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedRestaurants.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No restaurants found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
            <button onClick={clearFilters} className="bg-gradient-to-r from-red-500 to-orange-400 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Clear Filters
            </button>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Restaurant;

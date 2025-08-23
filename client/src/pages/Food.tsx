import { useState } from "react";
import { Star, Clock, Heart, Plus, Search, Grid, List } from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const FoodsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [favorites, setFavorites] = useState(new Set());

  // Comprehensive food items from different cuisines
  const foodItems = [
    // Indian Cuisine
    {
      id: 1,
      name: "Butter Chicken",
      cuisine: "Indian",
      price: 16.99,
      rating: 4.8,
      reviewCount: 342,
      image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      restaurant: "Spice Garden",
      deliveryTime: "25-35 min",
      description: "Tender chicken in rich, creamy tomato-based sauce with aromatic spices",
    },
    {
      id: 2,
      name: "Biryani",
      cuisine: "Indian",
      price: 18.99,
      rating: 4.7,
      reviewCount: 289,
      image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      restaurant: "Royal Palace",
      deliveryTime: "35-45 min",
      description: "Fragrant basmati rice layered with spiced meat and aromatic herbs",
    },
    {
      id: 3,
      name: "Masala Dosa",
      cuisine: "Indian",
      price: 12.99,
      rating: 4.6,
      reviewCount: 156,
      image: "https://images.unsplash.com/photo-1694241105511-84b9d2fa84fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      restaurant: "South Indian Express",
      deliveryTime: "20-30 min",
      description: "Crispy fermented crepe filled with spiced potato curry",
    },

    // Chinese Cuisine
    {
      id: 4,
      name: "Kung Pao Chicken",
      cuisine: "Chinese",
      price: 15.99,
      rating: 4.5,
      reviewCount: 234,
      image: "https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      restaurant: "Dragon Palace",
      deliveryTime: "20-30 min",
      description: "Spicy stir-fried chicken with peanuts, vegetables and chili peppers",
    },
    {
      id: 5,
      name: "Sweet & Sour Pork",
      cuisine: "Chinese",
      price: 17.99,
      rating: 4.4,
      reviewCount: 187,
      image: "https://images.unsplash.com/photo-1559847844-d721426d6edc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      restaurant: "Golden Wok",
      deliveryTime: "25-35 min",
      description: "Crispy pork pieces in tangy sweet and sour sauce with pineapple",
    },
    {
      id: 6,
      name: "Fried Rice",
      cuisine: "Chinese",
      price: 13.99,
      rating: 4.3,
      reviewCount: 312,
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      restaurant: "Wok This Way",
      deliveryTime: "15-25 min",
      description: "Wok-tossed rice with vegetables, eggs and choice of protein",
    },

    // Continental Cuisine
    {
      id: 7,
      name: "Grilled Salmon",
      cuisine: "Continental",
      price: 24.99,
      rating: 4.9,
      reviewCount: 143,
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      restaurant: "Ocean Grill",
      deliveryTime: "30-40 min",
      description: "Fresh Atlantic salmon grilled to perfection with lemon herb butter",
    },
    {
      id: 8,
      name: "Beef Steak",
      cuisine: "Continental",
      price: 28.99,
      rating: 4.8,
      reviewCount: 198,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      restaurant: "Prime Cut",
      deliveryTime: "35-45 min",
      description: "Premium ribeye steak cooked to your liking with garlic mashed potatoes",
    },
    {
      id: 9,
      name: "Chicken Cordon Bleu",
      cuisine: "Continental",
      price: 21.99,
      rating: 4.6,
      reviewCount: 167,
      image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      restaurant: "European Bistro",
      deliveryTime: "40-50 min",
      description: "Breaded chicken breast stuffed with ham and Swiss cheese",
    },

    // Japanese Cuisine
    {
      id: 10,
      name: "Sushi Platter",
      cuisine: "Japanese",
      price: 32.99,
      rating: 4.9,
      reviewCount: 278,
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      restaurant: "Tokyo Sushi Bar",
      deliveryTime: "25-35 min",
      description: "Assorted fresh sushi rolls with wasabi, ginger and soy sauce",
    },
    {
      id: 11,
      name: "Ramen Bowl",
      cuisine: "Japanese",
      price: 14.99,
      rating: 4.7,
      reviewCount: 456,
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      restaurant: "Noodle House",
      deliveryTime: "20-30 min",
      description: "Rich tonkotsu broth with fresh noodles, pork belly and soft-boiled egg",
    },
    {
      id: 12,
      name: "Tempura",
      cuisine: "Japanese",
      price: 18.99,
      rating: 4.5,
      reviewCount: 134,
      image: "https://images.unsplash.com/photo-1606710547288-4462e40be1e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      restaurant: "Sakura Kitchen",
      deliveryTime: "25-35 min",
      description: "Light and crispy battered vegetables and prawns with dipping sauce",
    },

    // South American Cuisine
    {
      id: 13,
      name: "Ceviche",
      cuisine: "South American",
      price: 19.99,
      rating: 4.8,
      reviewCount: 89,
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      restaurant: "Lima Flavors",
      deliveryTime: "15-25 min",
      description: "Fresh fish marinated in citrus juices with onions, cilantro and peppers",
    },
    {
      id: 14,
      name: "Empanadas",
      cuisine: "South American",
      price: 16.99,
      rating: 4.6,
      reviewCount: 123,
      image: "https://images.unsplash.com/photo-1625938145312-c6f46767abb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      restaurant: "Buenos Aires Cafe",
      deliveryTime: "20-30 min",
      description: "Golden pastries filled with seasoned beef, onions and spices",
    },
    {
      id: 15,
      name: "Brazilian BBQ",
      cuisine: "South American",
      price: 26.99,
      rating: 4.7,
      reviewCount: 167,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      restaurant: "Churrasco Grill",
      deliveryTime: "35-45 min",
      description: "Grilled meats served with traditional sides and chimichurri sauce",
    },

    // Additional items for variety
    {
      id: 16,
      name: "Pad Thai",
      cuisine: "Thai",
      price: 15.99,
      rating: 4.6,
      reviewCount: 234,
      image: "https://images.unsplash.com/photo-1559314809-0f31657499fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      restaurant: "Bangkok Street",
      deliveryTime: "25-35 min",
      description: "Stir-fried rice noodles with shrimp, tofu, bean sprouts and peanuts",
    },
    {
      id: 17,
      name: "Margherita Pizza",
      cuisine: "Italian",
      price: 18.99,
      rating: 4.8,
      reviewCount: 312,
      image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      restaurant: "Italiano Bistro",
      deliveryTime: "25-35 min",
      description: "Classic pizza with fresh tomato sauce, mozzarella and basil",
    },
    {
      id: 18,
      name: "Fish Tacos",
      cuisine: "Mexican",
      price: 14.99,
      rating: 4.5,
      reviewCount: 189,
      image: "https://images.unsplash.com/photo-1565299585323-38174c4a6040?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      restaurant: "Taco Loco",
      deliveryTime: "20-30 min",
      description: "Grilled fish with cabbage slaw, pico de gallo and chipotle mayo",
    },
  ];

  const cuisines = ["all", "Indian", "Chinese", "Continental", "Japanese", "South American", "Thai", "Italian", "Mexican"];

  // Filter foods based on search and cuisine
  const filteredFoods = foodItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.restaurant.toLowerCase().includes(searchQuery.toLowerCase()) || item.cuisine.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCuisine = selectedCuisine === "all" || item.cuisine === selectedCuisine;

    return matchesSearch && matchesCuisine;
  });

  const toggleFavorite = (itemId: unknown) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(itemId)) {
      newFavorites.delete(itemId);
    } else {
      newFavorites.add(itemId);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      {/* Hero Section */}
      <div className="relative h-80 pt-26 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Food Background" className="w-full h-full object-cover mix-blend-overlay opacity-30" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">All Foods</h1>
            <p className="text-xl mb-4 opacity-90">Discover delicious cuisines from around the world</p>
            <div className="flex items-center space-x-4 text-sm">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">{filteredFoods.length} dishes available</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">{cuisines.length - 1} cuisines</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Controls Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 gap-6">
          {/* Search Bar */}
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input type="text" placeholder="Search foods, restaurants, or cuisines..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white shadow-lg" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* View Mode Toggle */}
            <div className="flex border border-gray-300 rounded-xl overflow-hidden bg-white shadow-lg">
              <button onClick={() => setViewMode("grid")} className={`p-3 transition-all duration-200 ${viewMode === "grid" ? "bg-gradient-to-r from-red-500 to-orange-500 text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}>
                <Grid className="w-5 h-5" />
              </button>
              <button onClick={() => setViewMode("list")} className={`p-3 transition-all duration-200 ${viewMode === "list" ? "bg-gradient-to-r from-red-500 to-orange-500 text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}>
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Cuisine Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {cuisines.map((cuisine) => (
              <button key={cuisine} onClick={() => setSelectedCuisine(cuisine)} className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${selectedCuisine === cuisine ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg" : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 shadow-md"}`}>
                {cuisine === "all" ? "All Cuisines" : cuisine}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredFoods.length} of {foodItems.length} dishes
            {selectedCuisine !== "all" && ` in ${selectedCuisine} cuisine`}
          </p>
        </div>

        {/* Food Items Grid/List */}
        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-6"}>
          {filteredFoods.map((item) => (
            <div key={item.id} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${viewMode === "list" ? "flex" : ""}`}>
              {/* Food Image */}
              <div className={`relative ${viewMode === "list" ? "w-64 h-40 flex-shrink-0" : "h-56"}`}>
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />

                {/* Cuisine Badge */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">{item.cuisine}</div>

                {/* Favorite Button */}
                <button onClick={() => toggleFavorite(item.id)} className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 shadow-lg hover:scale-110">
                  <Heart className={`w-5 h-5 ${favorites.has(item.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
                </button>
              </div>

              {/* Food Details */}
              <div className="p-6 flex-1">
                <div className="mb-3">
                  <h3 className="font-bold text-xl mb-1 text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.restaurant}</p>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>

                {/* Rating and Delivery Time */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-sm">{item.rating}</span>
                    <span className="text-gray-500 text-sm">({item.reviewCount})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{item.deliveryTime}</span>
                  </div>
                </div>

                {/* Price and Add Button */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-800">${item.price}</span>
                  <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-3 rounded-xl hover:from-red-600 hover:to-orange-600 transform hover:scale-110 transition-all duration-200 shadow-lg">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredFoods.length === 0 && (
          <div className="text-center py-16">
            <div className="text-8xl mb-6">🍽️</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">No dishes found</h3>
            <p className="text-gray-600 mb-6 text-lg">Try searching with different keywords or select a different cuisine</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCuisine("all");
              }}
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-red-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Show All Foods
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default FoodsPage;

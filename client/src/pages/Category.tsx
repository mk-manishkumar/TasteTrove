import React, { useState, useEffect } from "react";
import { Search, Grid, List } from "lucide-react";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  // Mock categories
  const mockCategories = [
    {
      _id: "1",
      title: "Pizza",
      imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      itemCount: 45,
    },
    {
      _id: "2",
      title: "Burgers",
      imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      itemCount: 32,
    },
    {
      _id: "3",
      title: "Indian",
      imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      itemCount: 67,
    },
    {
      _id: "4",
      title: "Chinese",
      imageUrl: "https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      itemCount: 28,
    },
    {
      _id: "5",
      title: "Italian",
      imageUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      itemCount: 41,
    },
    {
      _id: "6",
      title: "Japanese",
      imageUrl: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      itemCount: 23,
    },
    {
      _id: "7",
      title: "Mexican",
      imageUrl: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      itemCount: 35,
    },
    {
      _id: "8",
      title: "Thai",
      imageUrl: "https://images.unsplash.com/photo-1559314809-0f31657499fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      itemCount: 19,
    },
    {
      _id: "9",
      title: "Desserts",
      imageUrl: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      itemCount: 52,
    },
    {
      _id: "10",
      title: "Beverages",
      imageUrl: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      itemCount: 38,
    },
  ];

  // Simulate API call
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setCategories(mockCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  // Filter categories
  const filteredCategories = categories.filter((c) => c.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleCategoryClick = (category) => {
    console.log("Navigate to category:", category.title);
    // navigate(`/category/${category._id}`)
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading categories...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero */}
      <div className="relative h-72 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80" alt="Food Categories" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 mix-blend-multiply"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl font-bold mb-3">Food Categories</h1>
            <p className="text-lg mb-4">Explore our diverse range of cuisines and food categories</p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">{categories.length} categories</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">{categories.reduce((total, cat) => total + (cat.itemCount || 0), 0)} items</span>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Fixed Controls */}
      <div className="sticky top-0 z-20 bg-gray-50 border-b px-4 py-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 max-w-6xl mx-auto">
          {/* Search */}
          <div className="flex-1 w-full max-w-lg">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input type="text" placeholder="Search categories..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm" />
            </div>
          </div>
          {/* View Toggle */}
          <div className="flex items-center space-x-3">
            <button onClick={() => setViewMode("grid")} className={`p-3 rounded-lg ${viewMode === "grid" ? "bg-red-500 text-white" : "bg-white border text-gray-600"}`}>
              <Grid className="w-5 h-5" />
            </button>
            <button onClick={() => setViewMode("list")} className={`p-3 rounded-lg ${viewMode === "list" ? "bg-red-500 text-white" : "bg-white border text-gray-600"}`}>
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {filteredCategories.length > 0 ? (
          <div className={viewMode === "grid" ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" : "space-y-4"}>
            {filteredCategories.map((cat) => (
              <div key={cat._id} onClick={() => handleCategoryClick(cat)} className={`bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden ${viewMode === "list" ? "flex items-center" : ""}`}>
                <div className={`${viewMode === "list" ? "w-32 h-24" : "h-40"} flex-shrink-0`}>
                  <img src={cat.imageUrl} alt={cat.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 flex-1">
                  <h3 className="font-semibold text-lg text-gray-800">{cat.title}</h3>
                  {viewMode === "grid" && (
                    <p className="text-sm text-gray-500">
                      {cat.itemCount} {cat.title} dishes
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-2xl font-bold mb-2">No categories found</h3>
            <p className="text-gray-500 mb-4">Try searching with different keywords</p>
            <button onClick={() => setSearchQuery("")} className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600">
              Show All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;

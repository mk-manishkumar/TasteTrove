import CTASection from "@/components/home components/CTA";
import FeaturesSection from "@/components/home components/FeaturesSection";
import HeroSection from "@/components/home components/HeroSection";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import FeaturedRestaurantsSection from "@/components/home components/FeaturedRestaurants";
import type { RestaurantType } from "@/components/home components/FeaturedRestaurants";
import PopularDishesSection from "@/components/home components/PopularDishesSection";
import type { DishType } from "@/components/home components/PopularDishesSection";

const featuredRestaurants: RestaurantType[] = [
  {
    id: 1,
    name: "Mario's Italian Kitchen",
    cuisine: "Italian",
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFee: "Free",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
    offer: "30% OFF",
  },
  // ...
];

const popularDishes: DishType[] = [
  {
    id: 1,
    name: "Margherita Pizza",
    restaurant: "Mario's Kitchen",
    price: 18.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=300&h=300&fit=crop",
  },
  // ...
];

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PopularDishesSection dishes={popularDishes} />
      <FeaturedRestaurantsSection restaurants={featuredRestaurants} />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;

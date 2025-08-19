import { ArrowRight, Play, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useCallback } from "react";
import { toast } from "react-toastify";

const HeroSection = () => {
  const demoInfo = useCallback(() => {
    toast.info("Sorry, Don't have any demo 😔", { autoClose: 2000 });
  }, []);

  return (
    <section className="relative overflow-hidden pt-12 pb-0 sm:pb-20">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10" />
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Delicious Food <span className="block bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">Delivered Fast</span>
            </h1>
            <p className="text-xl text-gray-600 mt-6 max-w-lg">Discover amazing food from the best local restaurants. Order now and get it delivered to your doorstep in minutes.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={"/foods"} className="group bg-gradient-to-r from-red-500 to-orange-400 text-white px-8 py-4 rounded-xl font-semibold text-lg w-fit hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Order Now
                <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <button onClick={demoInfo} className="cursor-pointer flex items-center gap-3 text-gray-700 px-8 py-4 rounded-xl border-2 border-gray-200 w-fit hover:border-red-300 backdrop-blur-sm bg-white/80 hover:bg-white/90 transition-all duration-300">
                <Play size={20} />
                Watch Demo
              </button>
            </div>
            <div className="hidden sm:flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Restaurants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">4.8</div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={16} fill="currentColor" />
                  <span className="text-gray-600">Rating</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Delicious Food" loading="lazy" className="hidden md:block w-full h-[500px] object-cover rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500" />
            </div>
            <div className="absolute top-8 -left-8 w-72 h-72 bg-gradient-to-r from-red-400 to-orange-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

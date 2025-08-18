import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-4 px-6 gap-6">
      {/* Logo */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-400 flex items-center justify-center text-white font-bold text-xl select-none">T</div>
        <span className="text-2xl font-extrabold text-gray-800 select-none">TasteTrove</span>
      </div>

      {/* Search input */}
      <div className="flex-grow max-w-xl">
        <Input type="text" placeholder="Search Foods, Restaurants..." />
      </div>

      {/* Navigation links */}
      <nav className="flex items-center gap-8 shrink-0">
        <Link to="/restaurants" className="hover:text-red-500 transition cursor-pointer">
          Restaurants
        </Link>
        <Link to="/categories" className="hover:text-red-500 transition cursor-pointer">
          Categories
        </Link>
        <Link to="/foods" className="hover:text-red-500 transition cursor-pointer">
          Foods
        </Link>
        <Link to="/Cart" className="hover:text-red-500 transition cursor-pointer flex items-center gap-2">
          <ShoppingCart size={20} />
        </Link>
        <Link to="/login" className="cursor-pointer bg-gradient-to-br from-red-500 to-orange-400 text-white rounded-md px-4 py-2 font-semibold hover:opacity-90 transition">
          Login
        </Link>
      </nav>
    </div>
  );
};

export default Header;

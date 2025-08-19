import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Input } from "../ui/input";
import { Search, ShoppingCart, Menu } from "lucide-react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenu(false);
  }, [location.pathname]);

  const handleNavClick = () => setMobileMenu(false);

  return (
    <>
      {/* TOP NAV */}
      <header className="flex items-center justify-between py-4 px-6 gap-6 relative z-50 border-b bg-white">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-400 flex items-center justify-center text-white font-bold text-xl select-none">T</div>
          <span className="text-xl sm:text-2xl font-extrabold text-gray-800 select-none">TasteTrove</span>
        </Link>

        {/* Search input (desktop only) */}
        <div className="flex-grow max-w-xl relative hidden md:flex items-center">
          <Input type="text" placeholder="Search Foods, Restaurants..." className="pr-10" />
          <Search className="absolute right-3 text-gray-500 cursor-pointer hover:text-red-500 transition" size={18} />
        </div>

        {/* Navigation links */}
        <nav className="flex items-center gap-8 shrink-0">
          <Link to="/restaurants" className="hidden lg:flex hover:text-red-500 transition">
            Restaurants
          </Link>
          <Link to="/categories" className="hidden lg:flex hover:text-red-500 transition">
            Categories
          </Link>
          <Link to="/foods" className="hidden lg:flex hover:text-red-500 transition">
            Foods
          </Link>
          <Link to="/cart" className="hover:text-red-500 transition flex items-center text-2xl gap-2" aria-label="Shopping cart">
            <ShoppingCart />
          </Link>
          <Link to="/login" className="hidden lg:flex bg-gradient-to-br from-red-500 to-orange-400 text-white rounded-md px-4 py-2 font-semibold hover:opacity-90 transition">
            Login
          </Link>

          {/* Mobile Hamburger */}
          <button aria-label="Open menu" aria-expanded={mobileMenu} className="lg:hidden" onClick={() => setMobileMenu((prev) => !prev)}>
            <Menu />
          </button>
        </nav>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="absolute top-16 right-0 bg-white shadow-lg rounded-lg p-4 w-full z-50 lg:hidden animate-fade-in-down" role="menu">
            <Link to="/restaurants" className="block py-2 hover:text-red-500 transition" onClick={handleNavClick}>
              Restaurants
            </Link>
            <Link to="/categories" className="block py-2 hover:text-red-500 transition" onClick={handleNavClick}>
              Categories
            </Link>
            <Link to="/foods" className="block py-2 hover:text-red-500 transition" onClick={handleNavClick}>
              Foods
            </Link>
            <Link to="/cart" className="block py-2 hover:text-red-500 transition" onClick={handleNavClick}>
              Cart
            </Link>
            <Link to="/login" className="block py-2 text-center bg-gradient-to-br from-red-500 to-orange-400 text-white rounded-md px-4 font-semibold hover:opacity-90 transition" onClick={handleNavClick}>
              Login
            </Link>
          </div>
        )}
      </header>

      {/* Search bar for mobile (below nav) */}
      <div className="px-6 py-3 md:hidden border-b bg-white relative flex items-center">
        <Input type="text" placeholder="Search Foods, Restaurants..." className="pr-10" />
        <Search className="absolute right-9 text-gray-500 cursor-pointer hover:text-red-500 transition" size={18} />
      </div>
    </>
  );
};

export default Header;

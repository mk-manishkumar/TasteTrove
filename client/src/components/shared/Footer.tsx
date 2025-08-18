import { Heart, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const socialLinks = [
  { name: "Facebook", icon: <Facebook size={20} />, href: "#", color: "hover:text-blue-600" },
  { name: "Twitter", icon: <Twitter size={20} />, href: "#", color: "hover:text-blue-400" },
  { name: "Instagram", icon: <Instagram size={20} />, href: "#", color: "hover:text-pink-500" },
  { name: "YouTube", icon: <Youtube size={20} />, href: "#", color: "hover:text-red-600" },
];

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white border-t border-gray-700">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="relative">
        {/* Bottom Section */}
        <div className="container mx-auto px-6 py-8 space-y-6 text-center lg:text-left">
          {/* Copyright */}
          <div>
            <p className="text-gray-300 flex items-center justify-center gap-2">
              © 2025 TasteTrove. Made with
              <Heart size={16} className="text-red-400 fill-current" />
              in India. All rights reserved.
            </p>
          </div>
          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <span className="text-gray-300">Follow us:</span>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} className={`w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-gray-600 flex items-center justify-center text-gray-300 transition-all duration-300 hover:scale-110 hover:bg-white/20 ${social.color}`} aria-label={social.name}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

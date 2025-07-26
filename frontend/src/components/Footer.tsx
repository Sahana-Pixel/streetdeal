
import { Home, Info, Cog, User, Mail, MapPin, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Platform Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Home className="h-6 w-6 text-blue-400" />
              <h3 className="text-xl font-bold text-white">StreetDeal</h3>
            </div>
            <p className="text-slate-400">
              Helping vendors and suppliers connect better.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Cog className="h-5 w-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            </div>
            <ul className="space-y-2">
              <li>
                <a href="/" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
                  <Home className="h-4 w-4" />
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
                  <Info className="h-4 w-4" />
                  About
                </a>
              </li>
              <li>
                <a href="/how-it-works" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
                  <Cog className="h-4 w-4" />
                  How It Works
                </a>
              </li>
              <li>
                <a href="/login" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
                  <User className="h-4 w-4" />
                  Login / Register
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            </div>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                support@streetdeal.in
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Location: India
              </p>
            </div>

            <div className="pt-4">
              <div className="flex items-center gap-2 mb-3">
                <User className="h-5 w-5 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">Follow Us</h3>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-pink-500 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-6 text-center text-slate-500 text-sm">
          <p>© 2025 StreetDeal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
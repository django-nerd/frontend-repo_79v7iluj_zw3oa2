import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-600 text-white font-bold">N</span>
            <div className="flex flex-col leading-tight">
              <span className="text-base sm:text-lg font-semibold text-gray-900">Nirajan Tent House</span>
              <span className="text-xs text-gray-500 -mt-0.5">Events • Weddings • Parties</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#services" className="hover:text-rose-600 transition-colors">Services</a>
            <a href="#gallery" className="hover:text-rose-600 transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-rose-600 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:+91-9876543210" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-rose-600 text-white px-4 py-2 text-sm font-medium hover:bg-rose-700 transition-colors">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:border-rose-600 hover:text-rose-600 transition-colors">
              <MapPin className="h-4 w-4" /> Get Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

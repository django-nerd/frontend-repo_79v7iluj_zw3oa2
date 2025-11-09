import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="font-inter text-gray-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Nirajan Tent House. All rights reserved.</p>
          <div className="text-sm text-gray-600">Crafted with care for unforgettable celebrations.</div>
        </div>
      </footer>
    </div>
  );
};

export default App;

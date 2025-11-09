import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1887&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1887&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=1887&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1887&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=2070&auto=format&fit=crop'
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Recent Events</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">
              A glimpse of the ambience, lighting, and decor we create for our clients.
            </p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-full bg-rose-600 text-white px-5 py-2 font-medium hover:bg-rose-700 transition-colors">Plan Yours</a>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="group overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
              <img src={src} alt="Event setup by Nirajan Tent House" className="h-44 sm:h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

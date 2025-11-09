import React from 'react';
import { Sparkles, PartyPopper, Tent, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Tent,
    title: 'Premium Tents & Canopies',
    desc: 'Waterproof, elegant mandaps, German tents, pagodas, and custom canopy solutions for all venues.'
  },
  {
    icon: Lightbulb,
    title: 'Lighting & Stage',
    desc: 'Ambient lighting, chandeliers, LEDs, trussing, stages, and dance floors to set the perfect mood.'
  },
  {
    icon: Sparkles,
    title: 'Decor & Floral',
    desc: 'Backdrop designs, floral setups, drapes, centerpieces, entry arches, and theme styling.'
  },
  {
    icon: PartyPopper,
    title: 'Complete Event Setup',
    desc: 'Seating, catering counters, carpets, generators, sound systems, and on-site coordination.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Our Services</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">
              From intimate gatherings to grand celebrations, we bring your vision to life with reliable setups and tasteful styling.
            </p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-full bg-rose-600 text-white px-5 py-2 font-medium hover:bg-rose-700 transition-colors">Book Now</a>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

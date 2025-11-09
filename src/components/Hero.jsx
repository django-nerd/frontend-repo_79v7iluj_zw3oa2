import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative" id="top">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6m0d7O7Jz9q8fJSN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/70 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Elevate Your Celebrations with Elegant Tents & Decor
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Nirajan Tent House designs, delivers, and decorates unforgettable weddings, parties, and corporate events. Premium canopies, lighting, stages, seating, and complete event setup—tailored to your style and budget.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#services" className="inline-flex justify-center items-center rounded-full bg-rose-600 text-white px-6 py-3 text-base font-medium hover:bg-rose-700 transition-colors">
                Explore Services
              </a>
              <a href="#contact" className="inline-flex justify-center items-center rounded-full border border-gray-300 bg-white px-6 py-3 text-base font-medium hover:border-rose-600 hover:text-rose-600 transition-colors">
                Get a Free Quote
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl">
              <div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Events Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">4.9/5</div>
                <div className="text-sm text-gray-600">Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

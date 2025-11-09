import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Get a Free Quote</h2>
          <p className="mt-3 text-gray-600">Tell us about your event and we’ll get back within a few hours.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {!sent ? (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 rounded-2xl border border-gray-200">
                <input required placeholder="Your Name" className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500" />
                <input type="tel" required placeholder="Phone Number" className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500" />
                <input type="email" required placeholder="Email (optional)" className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 sm:col-span-2" />
                <input required placeholder="Event Type (Wedding, Party, Corporate)" className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 sm:col-span-2" />
                <textarea required placeholder="Event Details (date, location, guests)" rows={4} className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 sm:col-span-2"></textarea>
                <button type="submit" className="inline-flex justify-center items-center rounded-full bg-rose-600 text-white px-6 py-3 font-medium hover:bg-rose-700 transition-colors sm:w-max">Send Request</button>
              </form>
            ) : (
              <div className="bg-white p-8 rounded-2xl border border-green-200 text-center">
                <CheckCircle2 className="h-10 w-10 text-green-600 mx-auto" />
                <h3 className="mt-3 text-xl font-semibold">Request Sent</h3>
                <p className="mt-1 text-gray-600">Our team will contact you shortly with a tailored quote.</p>
                <button onClick={() => setSent(false)} className="mt-6 inline-flex justify-center items-center rounded-full border border-gray-300 bg-white px-6 py-3 font-medium hover:border-rose-600 hover:text-rose-600 transition-colors">Send Another</button>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-rose-600" />
                <div>
                  <div className="font-medium text-gray-900">Call</div>
                  <a href="tel:+91-9876543210" className="text-gray-700 hover:text-rose-600">+91 98765 43210</a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-rose-600" />
                <div>
                  <div className="font-medium text-gray-900">Email</div>
                  <a href="mailto:hello@nirajantenthouse.com" className="text-gray-700 hover:text-rose-600">hello@nirajantenthouse.com</a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-rose-600" />
                <div>
                  <div className="font-medium text-gray-900">Address</div>
                  <div className="text-gray-700">Main Market, Your City, 123456</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

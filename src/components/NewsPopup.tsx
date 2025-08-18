import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const NewsPopup = ({ isOpen, onClose }) => {
  const newsItems = [
    {
      title: "New Luxury Collection Launch",
      description: "Introducing our latest Executive Gold series, crafted with premium materials for the modern professional.",
      date: "July 28, 2025",
      image: "/news/executive-gold.png",
      type: "Announcement"
    },
    {
      title: "Store Opening in Paris",
      description: "Join us for the grand opening of our new flagship store in Paris, showcasing the entire Elistro Collection.",
      date: "July 15, 2025",
      type: "Event"
    },
    {
      title: "Limited Edition Rose Gold Release",
      description: "Discover our exclusive Rose Gold Series, available for a limited time only.",
      date: "July 10, 2025",
      image: "/news/rose-gold.png",
      type: "Product"
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl mx-4 bg-white/10 glass-effect border border-primary/20 rounded-2xl p-6 max-h-[80vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full glass-effect border border-primary/20 flex items-center justify-center hover:bg-primary/10 transition-all duration-300"
        >
          <X className="w-5 h-5 text-primary" />
        </button>

        {/* Popup Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-playfair font-bold text-gradient">News & Notices</h2>
          <p className="text-sm text-white/70 mt-2">Stay updated with the latest from Elistro Collection</p>
        </div>

        {/* News Items */}
        <div className="space-y-6">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="elegant-card p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                {item.image && (
                  <div className="sm:w-1/3 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-32 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/20 text-primary">
                      {item.type}
                    </span>
                    <span className="text-xs text-white/50">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-white/70 mt-1">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative SVG Background */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
          viewBox="0 0 400 400"
        >
          <defs>
            <pattern id="popup-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="5" fill="#FFD700" opacity="0.3" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="400" height="400" fill="url(#popup-pattern)" />
        </svg>

        {/* Floating Decorative Elements */}
        <div className="absolute top-10 left-10 w-16 h-16 animate-float opacity-20">
          <svg width="64" height="64" viewBox="0 0 64 64" className="elegant-card p-2">
            <circle cx="32" cy="32" r="28" fill="url(#popup-gradient1)" />
            <defs>
              <radialGradient id="popup-gradient1" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" style={{ stopColor: '#B8860B', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#FFD700', stopOpacity: 0.1 }} />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div
          className="absolute bottom-10 right-10 w-20 h-20 animate-float opacity-20"
          style={{ animationDelay: '1s' }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" className="elegant-card p-2">
            <polygon points="40,10 72,70 8,70" fill="url(#popup-gradient2)" />
            <defs>
              <radialGradient id="popup-gradient2" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#B8860B', stopOpacity: 0.1 }} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};
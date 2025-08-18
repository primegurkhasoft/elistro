"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Scene3D } from './Scene3D';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative bg-elistro-charcoal border-t border-border/20 overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96">
          <Scene3D 
            className="w-full h-full"
            eyewearColor="#B8860B"
            autoRotate={true}
            enableControls={false}
          />
        </div>
      </div>
      
      {/* Floating Product Images */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full overflow-hidden elegant-card p-2 animate-float opacity-20">
        <img 
          src="/lovable-uploads/bffdc00a-e349-4760-87e5-d3245ccd89a0.png"
          alt="Elistro"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      
      <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full overflow-hidden elegant-card p-2 animate-float opacity-20" style={{ animationDelay: '2s' }}>
        <img 
          src="/lovable-uploads/f016259a-3064-405a-a0a7-d6dce95c81df.png"
          alt="Elistro"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-playfair font-semibold text-gradient">Elistro</h3>
            <p className="text-white/80 leading-relaxed">
              Crafting premium eyewear that combines timeless elegance with modern innovation. 
              See the world through our lens of luxury.
            </p>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-[#D4AF37]">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-[#D4AF37]">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-[#D4AF37]">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-[#D4AF37]">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-playfair font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                'About Us',
                'Sunglasses',
                'Eyeglasses',
                'Care Instructions'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h4 className="text-lg font-playfair font-semibold text-white">Customer Service</h4>
            <ul className="space-y-3">
              {[
                'Contact Us',
                'Returns & Exchanges',
                'Size Guide',
                'FAQ'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-playfair font-semibold text-white">Stay Connected</h4>
            <p className="text-white/80 text-sm">
              hello@elistro.com
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Enter your email"
                className="bg-background/50 border-border/50 text-white/80"
              />
              <Button className="w-full luxury-button px-8 py-4 text-lg rounded-xl shadow-elegant">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t border-border/20">
          <p className="text-sm text-white/80">
            © 2024 Elistro. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-white/80 hover:text-[#D4AF37]">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-white/80 hover:text-[#D4AF37]">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-white/80 hover:text-[#D4AF37]">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
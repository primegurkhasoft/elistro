import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Heart, Eye, Star } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  viewMode?: 'grid' | 'list';
}

export const ProductCard = ({ name, price, image, viewMode = 'grid' }: ProductCardProps) => {
  if (viewMode === 'list') {
    return (
      <div className="group cursor-pointer">
        <div className="elegant-card p-6 transition-all duration-300 hover:scale-[1.02]">
          <div className="flex gap-6 items-center">
            <div className="w-24 h-24 rounded-lg overflow-hidden bg-card flex-shrink-0">
              <img 
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            <div className="flex-grow">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                {name}
              </h3>
              <p className="text-2xl font-bold text-primary mt-2">
                {price}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group cursor-pointer">
      <div className="elegant-card overflow-hidden transition-all duration-300 hover:scale-105 h-[400px] flex flex-col">
        <div className="h-4/5 overflow-hidden bg-card">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <div className="h-1/5 p-4 flex items-center justify-center">
          <h3 className="font-semibold text-lg text-center group-hover:text-primary transition-colors">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { X, Star, Shield, Truck, Sun, Glasses, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductDetailProps {
  product: {
    id: number | string;
    name: string;
    price: string | number;
    image: string;
    sideImage: string;
    additionalImages: string[];
    category?: string;
    priceRange?: string;
    type: 'sunglass' | 'eyeglass';
    material: 'Acetate' | 'TR';
  };
  onClose: () => void;
}

export const ProductDetail = ({ product, onClose }: ProductDetailProps) => {
  const [selectedImage, setSelectedImage] = React.useState(product.image);
  const [isZoomed, setIsZoomed] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = React.useState(false);
  const [startPos, setStartPos] = React.useState({ x: 0, y: 0 });
  const imageRef = React.useRef<HTMLImageElement>(null);

  const getProductImages = (frontImage: string, sideImage: string, additionalImages: string[]) => {
    return {
      mainImages: [frontImage, sideImage, ...additionalImages],
      thumbnailImages: [frontImage, sideImage, ...additionalImages]
    };
  };

  const { mainImages, thumbnailImages } = getProductImages(product.image, product.sideImage, product.additionalImages);

  // Define features based on material for eyeglasses
  const acetateFeatures = [
    'Lightweight acetate frame',
    'Customizable color options',
    'Hypoallergenic material',
    'Durable and flexible design',
    'Hand-polished finish',
    'Comfort fit for long wear'
  ];

  const trFeatures = [
    'Ultra-light TR90 frame',
    'High strength-to-weight ratio',
    'Memory metal flexibility',
    'Resistant to deformation',
    'Anti-slip nose pads',
    'Eco-friendly material'
  ];

  const eyeglassFeatures = product.material === 'Acetate' ? acetateFeatures : trFeatures;

  const sunglassFeatures = [
    'Polarized lenses',
    '100% UV protection',
    'Scratch-resistant coating',
    'Impact-resistant lenses',
    'Lightweight titanium frame',
    'Hydrophobic coating'
  ];

  const features = product.type === 'sunglass' ? sunglassFeatures : eyeglassFeatures;

  const sunglassDescription = 
    'Elevate your style with our premium sunglasses. Designed for ultimate sun protection and clarity, these sunglasses combine cutting-edge lens technology with sophisticated frames, perfect for any outdoor adventure or urban exploration.';

  const eyeglassDescription = 
    'Discover unparalleled visual clarity with our premium eyeglasses. Engineered for all-day comfort and precision vision, these frames incorporate advanced lens technology and ergonomic design, ideal for work, reading, or digital device use.';

  const handlePrevImage = () => {
    const currentIndex = mainImages.indexOf(selectedImage);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : mainImages.length - 1;
    setSelectedImage(mainImages[prevIndex]);
    setPosition({ x: 0, y: 0 }); // Reset position when changing images
  };

  const handleNextImage = () => {
    const currentIndex = mainImages.indexOf(selectedImage);
    const nextIndex = currentIndex < mainImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(mainImages[nextIndex]);
    setPosition({ x: 0, y: 0 }); // Reset position when changing images
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!isZoomed) return;
    setIsDragging(true);
    setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!isDragging || !isZoomed) return;
    const newX = e.clientX - startPos.x;
    const newY = e.clientY - startPos.y;
    
    // Limit panning to prevent moving too far
    const maxX = imageRef.current ? (imageRef.current.offsetWidth * 0.25) : 0;
    const maxY = imageRef.current ? (imageRef.current.offsetHeight * 0.25) : 0;
    
    setPosition({
      x: Math.max(-maxX, Math.min(maxX, newX)),
      y: Math.max(-maxY, Math.min(maxY, newY))
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
    if (!isZoomed) return;
    setIsDragging(true);
    const touch = e.touches[0];
    setStartPos({ x: touch.clientX - position.x, y: touch.clientY - position.y });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLImageElement>) => {
    if (!isDragging || !isZoomed) return;
    const touch = e.touches[0];
    const newX = touch.clientX - startPos.x;
    const newY = touch.clientY - startPos.y;
    
    const maxX = imageRef.current ? (imageRef.current.offsetWidth * 0.25) : 0;
    const maxY = imageRef.current ? (imageRef.current.offsetHeight * 0.25) : 0;
    
    setPosition({
      x: Math.max(-maxX, Math.min(maxX, newX)),
      y: Math.max(-maxY, Math.min(maxY, newY))
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="elegant-card max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-6">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-card border">
                <img 
                  ref={imageRef}
                  src={selectedImage} 
                  alt={product.name}
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    isZoomed ? 'scale-150 cursor-move' : 'scale-100'
                  }`}
                  style={{
                    transform: isZoomed ? `translate(${position.x}px, ${position.y}px) scale(1.5)` : 'none'
                  }}
                  onClick={() => setIsZoomed(!isZoomed)}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                  onClick={handlePrevImage}
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                  onClick={handleNextImage}
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
                <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity">
                  Click to zoom
                </div>
              </div>
              
              <div className="grid grid-cols-6 gap-3">
                {thumbnailImages.map((img, index) => (
                  <div 
                    key={index} 
                    className={`aspect-square rounded-lg overflow-hidden bg-card border cursor-pointer hover:ring-2 hover:ring-primary transition-all ${
                      selectedImage === img ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => {
                      setSelectedImage(img);
                      setPosition({ x: 0, y: 0 }); // Reset position when selecting new image
                    }}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary">{product.category || (product.type === 'sunglass' ? 'Sunglasses' : 'Eyeglasses')}</Badge>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">(4.9/5)</span>
                  </div>
                </div>
                
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                <p className="text-3xl font-bold text-primary mb-6">
                  {typeof product.price === 'string' ? product.price : `$${product.price}`}
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  {product.type === 'sunglass' ? sunglassDescription : eyeglassDescription}
                </p>
                {product.priceRange && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Price Range: {product.priceRange}
                  </p>
                )}
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-card">
                  {product.type === 'sunglass' ? (
                    <Sun className="w-6 h-6 text-primary mx-auto mb-2" />
                  ) : (
                    <Glasses className="w-6 h-6 text-primary mx-auto mb-2" />
                  )}
                  <div className="text-sm font-medium">
                    {product.type === 'sunglass' ? 'Sun Protection' : 'Visual Clarity'}
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card">
                  <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">
                    {product.type === 'sunglass' ? 'UV Protection' : 'Lens Durability'}
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card">
                  <Truck className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">Free Shipping</div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground text-center">
                  Free shipping • 30-day returns • 2-year warranty
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
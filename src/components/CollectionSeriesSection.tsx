import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Filter, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const collectionSeriesData = [
  {
    id: 'classic',
    name: 'Classic Collection',
    description: 'Timeless designs that never go out of style',
    image: '/images/image (1).png',
    productCount: 15,
    category: 'Premium'
  },
  {
    id: 'heritage',
    name: 'Heritage Series',
    description: 'Vintage-inspired frames with modern craftsmanship',
    image: '/images/image (2).png',
    productCount: 12,
    category: 'Vintage'
  },
  {
    id: 'modern',
    name: 'Modern Edge',
    description: 'Contemporary designs for the forward-thinking individual',
    image: '/images/image (3).png',
    productCount: 18,
    category: 'Contemporary'
  },
  {
    id: 'executive',
    name: 'Executive Collection',
    description: 'Premium luxury frames for discerning professionals',
    image: '/images/image (4).png',
    productCount: 10,
    category: 'Luxury'
  },
  {
    id: 'glamour',
    name: 'Glamour Series',
    description: 'Bold statement pieces for the fashion-forward',
    image: '/images/image (5).png',
    productCount: 14,
    category: 'Fashion'
  },
  {
    id: 'active',
    name: 'Active Collection',
    description: 'Performance eyewear for active lifestyle',
    image: '/images/image (6).png',
    productCount: 16,
    category: 'Sport'
  },
  {
    id: 'signature',
    name: 'Signature Series',
    description: 'Exclusive designs that define your unique style',
    image: '/images/image (7).png',
    productCount: 8,
    category: 'Exclusive'
  },
];

const trendingProductsData = [
  {
    id: 'trending-1',
    name: 'Aurora',
    rating: 4.8,
    image: '/hero/purpleframe.png',
    badge: 'Best Seller'
  },
  {
    id: 'trending-2',
    name: 'Eclipse',
    rating: 4.9,
    image: '/hero/blackframe.png',
    badge: 'Trending'
  },
  {
    id: 'trending-3',
    name: 'Zenith',
    rating: 4.7,
    image: '/hero/image2.png',
    badge: 'New'
  },
  {
    id: 'trending-4',
    name: 'Prism',
    rating: 5.0,
    image: '/hero/redframe.png',
    badge: 'Premium'
  }
];

export const CollectionSeriesSection = () => {
  const [activeTab, setActiveTab] = useState<'trending' | 'collections'>('trending');
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const trendingRef = useRef<HTMLDivElement>(null);
  const collectionsRef = useRef<HTMLDivElement>(null);

  // Get unique categories for filter
  const categories = [...new Set(collectionSeriesData.map(item => item.category))];

  // Filter collections based on category
  const filteredCollections = collectionSeriesData.filter(collection => {
    return categoryFilter === "all" || collection.category === categoryFilter;
  });

  // Show only 4 collections initially, unless "Show All" is clicked
  const displayedCollections = showAll ? filteredCollections : filteredCollections.slice(0, 4);

  // Scroll functions
  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -384, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 384, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const cards = document.querySelectorAll('[data-animated]');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.setAttribute('data-animated', 'true');
      }, index * 100); // Staggered animation
    });
  }, [activeTab]);

  return (
    <section className="relative bg-gradient-to-b from-elistro-charcoal to-elistro-charcoal/80 border-t border-border/20 overflow-hidden pt-12 lg:pt-16 pb-4 lg:pb-6 min-h-[70vh]">
      {/* Floating Product Images */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full overflow-hidden p-2 animate-float opacity-20">
        <img 
          src="/lovable-uploads/bffdc00a-e349-4760-87e5-d3245ccd89a0.png"
          alt="Elistro"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      
      <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full overflow-hidden p-2 animate-float opacity-20" style={{ animationDelay: '2s' }}>
        <img 
          src="/lovable-uploads/f016259a-3064-405a-a0a7-d6dce95c81df.png"
          alt="Elistro"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="hero-title mb-2 text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold">
            Explore Our <span className="text-[#D4AF37]">
              {activeTab === 'trending' ? 'Trending Products' : 'Collection Series'}
            </span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
            {activeTab === 'trending' 
              ? 'Discover the most popular and highly-rated eyewear trending worldwide.'
              : 'Discover our curated collection series, each designed with a unique aesthetic and purpose to match your lifestyle.'
            }
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-6">
          <div className="p-1 rounded-full bg-background/50">
            <div className="flex gap-1">
              <Button
                variant={activeTab === 'trending' ? 'default' : 'ghost'}
                className={`rounded-full px-5 py-2 text-base sm:text-lg lg:text-base transition-all duration-300 ${
                  activeTab === 'trending' ? 'bg-[#D4AF37] text-black' : 'hover:bg-muted'
                }`}
                onClick={() => setActiveTab('trending')}
              >
                Trending Products
              </Button>
              <Button
                variant={activeTab === 'collections' ? 'default' : 'ghost'}
                className={`rounded-full px-5 py-2 text-base sm:text-lg lg:text-base transition-all duration-300 ${
                  activeTab === 'collections' ? 'bg-[#D4AF37] text-black' : 'hover:bg-muted'
                }`}
                onClick={() => setActiveTab('collections')}
              >
                Collection Series
              </Button>
            </div>
          </div>
        </div>

        {/* Filter - Only show for collections tab */}
        {activeTab === 'collections' && (
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-white/80" />
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px] text-white/80 bg-background/50 border-border/50 text-base sm:text-lg">
                  <SelectValue placeholder="Filter by Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Trending Products Grid */}
        {activeTab === 'trending' && (
          <div className="relative overflow-x-hidden">
            <Button
              variant="ghost"
              className="absolute left-0 z-20 bg-black/50 text-white/80 hover:bg-black/70 rounded-full p-2 top-1/2 transform -translate-y-1/2"
              onClick={() => scrollLeft(trendingRef)}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <div
              ref={trendingRef}
              className="flex gap-6 pb-4 snap-x snap-mandatory overflow-x-auto scrollbar-hide"
              style={{ scrollBehavior: 'smooth' }}
            >
              {trendingProductsData.map((product) => (
                <Card 
                  key={product.id} 
                  className="w-96 flex-shrink-0 snap-start rounded-2xl overflow-hidden bg-white border-none relative group"
                  data-animated="false"
                  style={{
                    animation: 'premiumEntrance 0.6s ease-out forwards',
                    animationDelay: '0s',
                    transformOrigin: 'center bottom',
                  }}
                >
                  <CardContent className="p-0 flex flex-col h-full relative">
                    {/* Shine effect */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%]"></div>
                    </div>
                    <div className="bg-white h-[85%] flex items-center justify-center p-4 relative">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Overlay for badge and rating at top */}
                      <div className="absolute top-4 left-0 right-0 mx-4 flex justify-between items-center">
                        <span className="text-white text-sm bg-[#D4AF37] px-2 py-1 rounded-full">
                          {product.badge}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-yellow-400 text-sm">{product.rating}</span>
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-black h-[15%] p-4 text-center flex flex-col justify-center">
                      <h3 className="text-white text-lg font-semibold">
                        {product.name}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button
              variant="ghost"
              className="absolute right-0 z-20 bg-black/50 text-white/80 hover:bg-black/70 rounded-full p-2 top-1/2 transform -translate-y-1/2"
              onClick={() => scrollRight(trendingRef)}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
            <style>
              {`
                @keyframes premiumEntrance {
                  0% {
                    opacity: 0;
                    transform: translateY(20px) scale(0.95);
                  }
                  100% {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                  }
                }
                .group:hover {
                  transform: scale(1.02);
                  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
                  transition: all 0.3s ease-in-out;
                }
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
                .scrollbar-hide {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
                .snap-x {
                  scroll-snap-type: x mandatory;
                }
                .snap-start {
                  scroll-snap-align: start;
                }
              `}
            </style>
          </div>
        )}

        {/* Collection Grid */}
        {activeTab === 'collections' && (
          <>
            <div className="relative overflow-x-hidden">
              <Button
                variant="ghost"
                className="absolute left-0 z-20 bg-black/50 text-white/80 hover:bg-black/70 rounded-full p-2 top-1/2 transform -translate-y-1/2"
                onClick={() => scrollLeft(collectionsRef)}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <div
                ref={collectionsRef}
                className="flex gap-6 pb-4 snap-x snap-mandatory overflow-x-auto scrollbar-hide"
                style={{ scrollBehavior: 'smooth' }}
              >
                {displayedCollections.map((collection) => (
                  <Card 
                    key={collection.id} 
                    className="w-96 flex-shrink-0 snap-start rounded-2xl overflow-hidden bg-white border-none relative group"
                    data-animated="false"
                    style={{
                      animation: 'premiumEntrance 0.6s ease-out forwards',
                      animationDelay: '0s',
                      transformOrigin: 'center bottom',
                    }}
                    onClick={() => {
                      const searchParams = new URLSearchParams();
                      searchParams.set('collection', collection.name);
                      window.location.href = `/sunglasses?${searchParams.toString()}`;
                    }}
                  >
                    <CardContent className="p-0 relative">
                      {/* Shine effect */}
                      <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%]"></div>
                      </div>
                      <div className="bg-white p-8 flex items-center justify-center h-[75%] relative">
                        <img 
                          src={collection.image}
                          alt={collection.name}
                          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Overlay for category and product count at top */}
                        <div className="absolute top-4 left-0 right-0 mx-4 flex justify-between items-center">
                          <span className="text-white text-sm bg-[#D4AF37] px-2 py-1 rounded-full">
                            {collection.category}
                          </span>
                          <span className="text-white text-sm">
                            {collection.productCount} products
                          </span>
                        </div>
                      </div>
                      <div className="bg-black h-[25%] p-4 text-center">
                        <h3 className="text-white text-lg font-semibold">
                          {collection.name}
                        </h3>
                        <p className="text-white/80 text-sm mt-2">
                          {collection.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button
                variant="ghost"
                className="absolute right-0 z-20 bg-black/50 text-white/80 hover:bg-black/70 rounded-full p-2 top-1/2 transform -translate-y-1/2"
                onClick={() => scrollRight(collectionsRef)}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
              <style>
                {`
                  @keyframes premiumEntrance {
                    0% {
                      opacity: 0;
                      transform: translateY(20px) scale(0.95);
                    }
                    100% {
                      opacity: 1;
                      transform: translateY(0) scale(1);
                    }
                  }
                  .group:hover {
                    transform: scale(1.02);
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
                    transition: all 0.3s ease-in-out;
                  }
                  .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                  }
                  .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                  }
                  .snap-x {
                    scroll-snap-type: x mandatory;
                  }
                  .snap-start {
                    scroll-snap-align: start;
                  }
                `}
              </style>
            </div>

            {/* View All Button */}
            {!showAll && filteredCollections.length > 4 && (
              <div className="text-center mt-6">
                <Button 
                  variant="outline" 
                  className="px-6 py-2 rounded-xl text-base sm:text-lg bg-[#D4AF37] text-black hover:bg-[#D4AF37]/80"
                  onClick={() => setShowAll(true)}
                >
                  View All Collection Series
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}

            {/* Show Less Button */}
            {showAll && (
              <div className="text-center mt-6">
                <Button 
                  variant="outline" 
                  className="px-6 py-2 rounded-xl text-base sm:text-lg bg-[#D4AF37] text-black hover:bg-[#D4AF37]/80"
                  onClick={() => setShowAll(false)}
                >
                  Show Less
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
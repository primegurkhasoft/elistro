import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Filter, Star } from 'lucide-react';

const collectionSeriesData = [
  {
    id: 'classic',
    name: 'Classic Collection',
    description: 'Timeless designs that never go out of style',
    image: '/lovable-uploads/f2c0511c-b997-4423-b0c7-0848e9f823d9.png',
    productCount: 15,
    category: 'Premium'
  },
  {
    id: 'heritage',
    name: 'Heritage Series',
    description: 'Vintage-inspired frames with modern craftsmanship',
    image: '/lovable-uploads/bba69f44-a769-4e18-bb75-11a5fd43e156.png',
    productCount: 12,
    category: 'Vintage'
  },
  {
    id: 'modern',
    name: 'Modern Edge',
    description: 'Contemporary designs for the forward-thinking individual',
    image: '/lovable-uploads/bfbc8576-8506-4ab7-8c10-1eb417b825d3.png',
    productCount: 18,
    category: 'Contemporary'
  },
  {
    id: 'executive',
    name: 'Executive Collection',
    description: 'Premium luxury frames for discerning professionals',
    image: '/lovable-uploads/bffdc00a-e349-4760-87e5-d3245ccd89a0.png',
    productCount: 10,
    category: 'Luxury'
  },
  {
    id: 'glamour',
    name: 'Glamour Series',
    description: 'Bold statement pieces for the fashion-forward',
    image: '/lovable-uploads/eaf91e9d-d05c-4596-ab12-a288c79b3237.png',
    productCount: 14,
    category: 'Fashion'
  },
  {
    id: 'active',
    name: 'Active Collection',
    description: 'Performance eyewear for active lifestyle',
    image: '/lovable-uploads/f016259a-3064-405a-a0a7-d6dce95c81df.png',
    productCount: 16,
    category: 'Sport'
  },
  {
    id: 'signature',
    name: 'Signature Series',
    description: 'Exclusive designs that define your unique style',
    image: '/lovable-uploads/4a195fd6-1967-4a63-a225-78d725fa2ff2.png',
    productCount: 8,
    category: 'Exclusive'
  },
];

const trendingProductsData = [
  {
    id: 'trending-1',
    name: 'Aurora',
    rating: 4.8,
    image: '/images/image (1).png',
    badge: 'Best Seller'
  },
  {
    id: 'trending-2',
    name: 'Eclipse',
    rating: 4.9,
    image: '/images/image (4).png',
    badge: 'Trending'
  },
  {
    id: 'trending-3',
    name: 'Zenith',
    rating: 4.7,
    image: '/images/image (6).png',
    badge: 'New'
  },
  {
    id: 'trending-4',
    name: 'Prism',
    rating: 5.0,
    image: '/images/image (10).png',
    badge: 'Premium'
  }
];

export const CollectionSeriesSection = () => {
  const [activeTab, setActiveTab] = useState<'trending' | 'collections'>('trending');
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  // Get unique categories for filter
  const categories = [...new Set(collectionSeriesData.map(item => item.category))];

  // Filter collections based on category
  const filteredCollections = collectionSeriesData.filter(collection => {
    return categoryFilter === "all" || collection.category === categoryFilter;
  });

  // Show only 4 collections initially, unless "Show All" is clicked
  const displayedCollections = showAll ? filteredCollections : filteredCollections.slice(0, 4);

  return (
    <section className="relative bg-gradient-to-b from-elistro-charcoal to-elistro-charcoal/80 border-t border-border/20 overflow-hidden pt-12 lg:pt-16 pb-4 lg:pb-6 min-h-[70vh]">
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
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="hero-title mb-2 text-4xl lg:text-5xl">
            Explore Our <span className="text-[#D4AF37] font-playfair font-semibold">
              {activeTab === 'trending' ? 'Trending Products' : 'Collection Series'}
            </span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
            {activeTab === 'trending' 
              ? 'Discover the most popular and highly-rated eyewear that\'s trending among fashion enthusiasts worldwide.'
              : 'Discover our curated collection series, each designed with a unique aesthetic and purpose to match your lifestyle and personality.'
            }
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-6">
          <div className="elegant-card p-1 rounded-full">
            <div className="flex gap-1">
              <Button
                variant={activeTab === 'trending' ? 'default' : 'ghost'}
                className={`rounded-full px-5 py-2 text-sm lg:text-base transition-all duration-300 ${
                  activeTab === 'trending' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                }`}
                onClick={() => setActiveTab('trending')}
              >
                Trending Products
              </Button>
              <Button
                variant={activeTab === 'collections' ? 'default' : 'ghost'}
                className={`rounded-full px-5 py-2 text-sm lg:text-base transition-all duration-300 ${
                  activeTab === 'collections' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
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
                <SelectTrigger className="w-[180px] text-white/80 bg-background/50 border-border/50 text-sm">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {trendingProductsData.map((product, index) => (
              <Card 
                key={product.id} 
                className={`group elegant-card overflow-hidden cursor-pointer transition-all duration-500 ease-in-out animate-fade-in ${
                  hoveredProduct === null 
                    ? 'scale-100' 
                    : hoveredProduct === product.id 
                      ? 'scale-105 z-10 shadow-lg rotate-1' 
                      : 'scale-95 opacity-70'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <CardContent className="p-0">
                  <div className="relative h-96 overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="text-sm font-bold bg-accent text-accent-foreground px-2 py-1 rounded-full">
                        {product.badge}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-white text-sm font-medium">{product.rating}</span>
                    </div>

                    {/* Product Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-xl lg:text-2xl font-playfair font-semibold mb-1 transition-colors duration-300 group-hover:text-[#D4AF37]">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Collection Grid */}
        {activeTab === 'collections' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {displayedCollections.map((collection, index) => (
                <Card 
                  key={collection.id} 
                  className="group elegant-card overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:rotate-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => {
                    const searchParams = new URLSearchParams();
                    searchParams.set('collection', collection.name);
                    window.location.href = `/sunglasses?${searchParams.toString()}`;
                  }}
                >
                  <CardContent className="p-0">
                    <div className="relative h-96 overflow-hidden">
                      <img 
                        src={collection.image}
                        alt={collection.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium bg-primary/80 px-3 py-1 rounded-full">
                            {collection.category}
                          </span>
                          <span className="text-sm text-white/80">
                            {collection.productCount} products
                          </span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-playfair font-semibold mb-1">
                          {collection.name}
                        </h3>
                        <p className="text-sm text-white/90 line-clamp-2">
                          {collection.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* View All Button */}
            {!showAll && filteredCollections.length > 4 && (
              <div className="text-center">
                <Button 
                  variant="outline" 
                  className="luxury-button group px-6 py-2 rounded-xl shadow-elegant text-sm lg:text-base"
                  onClick={() => setShowAll(true)}
                >
                  View All Collection Series
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            )}

            {/* Show Less Button */}
            {showAll && (
              <div className="text-center">
                <Button 
                  variant="outline" 
                  className="luxury-button px-6 py-2 rounded-xl text-sm lg:text-base"
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
import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { ProductDetail } from '@/components/ProductDetail';
import { 
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Filter, Grid, List } from 'lucide-react';

// Define the Product type to match ProductDetailProps.product
type Product = {
  id: number | string;
  name: string;
  price: number | string;
  image: string;
  sideImage: string;
  additionalImages: string[];
  category: string;
  collectionSeries: string;
  model: string;
  type: 'sunglass' | 'eyeglass';
};

const sunglassesProducts: Product[] = [
  {
    id: 1,
    name: "Classic Aviator",
    price: 299,
    image: "/images/f2c0511c-b997-4423-b0c7-0848e9f823d9.png",
    sideImage: "/lovable-uploads/side-image-ca.png",
    additionalImages: [
      "/lovable-uploads/additional/ca-1.png",
      "/lovable-uploads/additional/ca-2.png",
      "/lovable-uploads/additional/ca-3.png",
      "/lovable-uploads/additional/ca-4.png"
    ],
    category: "men",
    collectionSeries: "Classic",
    model: "Aviator",
    type: "sunglass"
  },
  {
    id: 2,
    name: "Retro Round",
    price: 249,
    image: "/images/bba69f44-a769-4e18-bb75-11a5fd43e156.png",
    sideImage: "/lovable-uploads/side-image-rr.png",
    additionalImages: [
      "/lovable-uploads/additional/rr-1.png",
      "/lovable-uploads/additional/rr-2.png",
      "/lovable-uploads/additional/rr-3.png",
      "/lovable-uploads/additional/rr-4.png"
    ],
    category: "women",
    collectionSeries: "Retro",
    model: "Round",
    type: "sunglass"
  },
  {
    id: 3,
    name: "Sport Edge",
    price: 399,
    image: "/images/bffdc00a-e349-4760-87e5-d3245ccd89a0.png",
    sideImage: "/lovable-uploads/side-image-se.png",
    additionalImages: [
      "/lovable-uploads/additional/se-1.png",
      "/lovable-uploads/additional/se-2.png",
      "/lovable-uploads/additional/se-3.png",
      "/lovable-uploads/additional/se-4.png"
    ],
    category: "unisex",
    collectionSeries: "Sport",
    model: "Edge",
    type: "sunglass"
  },
  {
    id: 4,
    name: "Vintage Square",
    price: 329,
    image: "/images/4a195fd6-1967-4a63-a225-78d725fa2ff2.png",
    sideImage: "/lovable-uploads/side-image-vs.png",
    additionalImages: [
      "/lovable-uploads/additional/vs-1.png",
      "/lovable-uploads/additional/vs-2.png",
      "/lovable-uploads/additional/vs-3.png",
      "/lovable-uploads/additional/vs-4.png"
    ],
    category: "men",
    collectionSeries: "Vintage",
    model: "Square",
    type: "sunglass"
  },
  {
    id: 5,
    name: "Modern Cat-Eye",
    price: 279,
    image: "/images/eaf91e9d-d05c-4596-ab12-a288c79b3237.png",
    sideImage: "/lovable-uploads/side-image-mc.png",
    additionalImages: [
      "/lovable-uploads/additional/mc-1.png",
      "/lovable-uploads/additional/mc-2.png",
      "/lovable-uploads/additional/mc-3.png",
      "/lovable-uploads/additional/mc-4.png"
    ],
    category: "women",
    collectionSeries: "Modern",
    model: "Cat-Eye",
    type: "sunglass"
  },
  {
    id: 6,
    name: "Oversized Glam",
    price: 349,
    image: "/images/f016259a-3064-405a-a0a7-d6dce95c81df.png",
    sideImage: "/lovable-uploads/side-image-og.png",
    additionalImages: [
      "/lovable-uploads/additional/og-1.png",
      "/lovable-uploads/additional/og-2.png",
      "/lovable-uploads/additional/og-3.png",
      "/lovable-uploads/additional/og-4.png"
    ],
    category: "women",
    collectionSeries: "Glam",
    model: "Oversized",
    type: "sunglass"
  },
  {
    id: 7,
    name: "Minimalist Frame",
    price: 199,
    image: "/images/bfbc8576-8506-4ab7-8c10-1eb417b825d3.png",
    sideImage: "/lovable-uploads/side-image-mf.png",
    additionalImages: [
      "/lovable-uploads/additional/mf-1.png",
      "/lovable-uploads/additional/mf-2.png",
      "/lovable-uploads/additional/mf-3.png",
      "/lovable-uploads/additional/mf-4.png"
    ],
    category: "unisex",
    collectionSeries: "Minimalist",
    model: "Frame",
    type: "sunglass"
  },
  {
    id: 8,
    name: "Bold Statement",
    price: 459,
    image: "/images/f2c0511c-b997-4423-b0c7-0848e9f823d9.png",
    sideImage: "/lovable-uploads/side-image-bs.png",
    additionalImages: [
      "/lovable-uploads/additional/bs-1.png",
      "/lovable-uploads/additional/bs-2.png",
      "/lovable-uploads/additional/bs-3.png",
      "/lovable-uploads/additional/bs-4.png"
    ],
    category: "men",
    collectionSeries: "Bold",
    model: "Statement",
    type: "sunglass"
  }
];

const Sunglasses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [collectionSeriesFilter, setCollectionSeriesFilter] = useState("all");
  const [modelFilter, setModelFilter] = useState("all");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const itemsPerPage = 6;

  const filteredProducts = sunglassesProducts.filter(product => {
    const categoryMatch = categoryFilter === "all" || product.category === categoryFilter;
    const collectionSeriesMatch = collectionSeriesFilter === "all" || product.collectionSeries === collectionSeriesFilter;
    const modelMatch = modelFilter === "all" || product.model === modelFilter;
    return categoryMatch && collectionSeriesMatch && modelMatch;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const clearFilters = () => {
    setCategoryFilter("all");
    setCollectionSeriesFilter("all");
    setModelFilter("all");
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="relative py-16 bg-depth-gradient">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="hero-title mb-4">Sunglasses Collection</h1>
            <p className="subtitle max-w-2xl mx-auto">
              Discover our premium sunglasses collection, crafted with precision and designed for every style
            </p>
          </div>
        </section>

        {/* Filters and Controls */}
        <section className="py-8 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              
              {/* Filters */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Filters:</span>
                </div>
                
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="men">Men</SelectItem>
                    <SelectItem value="women">Women</SelectItem>
                    <SelectItem value="unisex">Unisex</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={collectionSeriesFilter} onValueChange={setCollectionSeriesFilter}>
                  <SelectTrigger className="w-36">
                    <SelectValue placeholder="Collection Series" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Series</SelectItem>
                    <SelectItem value="Classic">Classic</SelectItem>
                    <SelectItem value="Retro">Retro</SelectItem>
                    <SelectItem value="Sport">Sport</SelectItem>
                    <SelectItem value="Vintage">Vintage</SelectItem>
                    <SelectItem value="Modern">Modern</SelectItem>
                    <SelectItem value="Glam">Glam</SelectItem>
                    <SelectItem value="Minimalist">Minimalist</SelectItem>
                    <SelectItem value="Bold">Bold</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={modelFilter} onValueChange={setModelFilter}>
                  <SelectTrigger className="w-36">
                    <SelectValue placeholder="Model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Models</SelectItem>
                    <SelectItem value="Aviator">Aviator</SelectItem>
                    <SelectItem value="Round">Round</SelectItem>
                    <SelectItem value="Edge">Edge</SelectItem>
                    <SelectItem value="Square">Square</SelectItem>
                    <SelectItem value="Cat-Eye">Cat-Eye</SelectItem>
                    <SelectItem value="Oversized">Oversized</SelectItem>
                    <SelectItem value="Frame">Frame</SelectItem>
                    <SelectItem value="Statement">Statement</SelectItem>
                  </SelectContent>
                </Select>

                {(categoryFilter !== "all" || collectionSeriesFilter !== "all" || modelFilter !== "all") && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-primary hover:underline"
                  >
                    Clear Filters
                  </button>
                )}
              </div>

              {/* Active Filters & View Toggle */}
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  {categoryFilter !== "all" && (
                    <Badge variant="secondary">{categoryFilter}</Badge>
                  )}
                  {collectionSeriesFilter !== "all" && (
                    <Badge variant="secondary">{collectionSeriesFilter}</Badge>
                  )}
                  {modelFilter !== "all" && (
                    <Badge variant="secondary">{modelFilter}</Badge>
                  )}
                </div>
                
                <div className="flex border rounded-lg p-1 bg-card">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-muted-foreground">
              Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredProducts.length)} of {filteredProducts.length} products
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {paginatedProducts.length > 0 ? (
              <div className={viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
                : "space-y-6"
              }>
                {paginatedProducts.map((product) => (
                  <div key={product.id} onClick={() => setSelectedProduct(product)}>
                    <ProductCard
                      name={product.name}
                      price={`$${product.price}`}
                      image={product.image}
                      viewMode={viewMode}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-muted-foreground mb-4">No products found matching your filters</div>
                <button onClick={clearFilters} className="text-primary hover:underline">
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-16 flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => setCurrentPage(page)}
                          isActive={page === currentPage}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </section>
      </main>

      {selectedProduct && (
        <ProductDetail 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}

      <Footer />
    </div>
  );
};

export default Sunglasses;
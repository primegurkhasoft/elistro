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
  material: 'Acetate' | 'TR'; // Added material property
};

const eyeglassesProducts: Product[] = [
  {
    id: 1,
    name: "Professional Reader",
    price: 199,
    image: "/eyeglass/Acatate/CLA25 1007/5.png",
    sideImage: "/eyeglass/Acatate/CLA25 1007/5.1.png",
    additionalImages: [
      "/eyeglass/Acatate/CLA25 1007/10.png",
      "/eyeglass/Acatate/CLA25 1007/15.png",
    ],
    category: "men",
    collectionSeries: "Professional",
    model: "Reader",
    type: "eyeglass",
    material: "Acetate" // Example material
  },
  {
    id: 2,
    name: "Elegant Frame",
    price: 259,
    image: "/eyeglass/Acatate/CLA25 1005/9.png",
    sideImage: "/eyeglass/Acatate/CLA25 1005/9.1.png",
    additionalImages: [
      
    ],
    category: "women",
    collectionSeries: "Elegant",
    model: "Frame",
    type: "eyeglass",
    material: "Acetate" // Example material
  },
  {
    id: 3,
    name: "Modern Square",
    price: 229,
    image: "/eyeglass/Acatate/CLA25 1102/6.1.png",
    sideImage:"/eyeglass/Acatate/CLA25 1102/6.png",
    additionalImages: [
      "/eyeglass/Acatate/CLA25 1102/8.png",
      "/eyeglass/Acatate/CLA25 1102/12.png",
      "/eyeglass/Acatate/CLA25 1102/16.png",
    ],
    category: "unisex",
    collectionSeries: "Modern",
    model: "Square",
    type: "eyeglass",
    material: "Acetate" // Example material
  },
  {
    id: 4,
    name: "Classic Round",
    price: 179,
    image: "/eyeglass/Acatate/CLA25 1103/7.png",
    sideImage: "/eyeglass/Acatate/CLA25 1103/7.1.png",
    additionalImages: [
      "/eyeglass/Acatate/CLA25 1103/13.png",
      "/eyeglass/Acatate/CLA25 1103/21.png",
    ],
    category: "unisex",
    collectionSeries: "Classic",
    model: "Round",
    type: "eyeglass",
    material: "Acetate" // Example material
  },
  {
    id: 5,
    name: "Designer Cat-Eye",
    price: 319,
    image: "/eyeglass/Acatate/CLA25 1104/17.png",
    sideImage: "/eyeglass/Acatate/CLA25 1104/17.1.png",
    additionalImages: [
     "/eyeglass/Acatate/CLA25 1104/18.png",
    ],
    category: "women",
    collectionSeries: "Designer",
    model: "Cat-Eye",
    type: "eyeglass",
    material: "Acetate" // Example material
  },
  {
    id: 6,
    name: "Executive Frame",
    price: 399,
    image: "/eyeglass/Acatate/CLA25 1106/20.png",
    sideImage: "/eyeglass/Acatate/CLA25 1106/20.1.png",
    additionalImages: [
      "/eyeglass/Acatate/CLA25 1106/23.png",
      "/eyeglass/Acatate/CLA25 1106/24.png",
    ],
    category: "men",
    collectionSeries: "Executive",
    model: "Frame",
    type: "eyeglass",
    material: "Acetate" // Example material
  },
  {
    id: 7,
    name: "Minimalist Clear",
    price: 149,
    image: "/eyeglass/Acatate/CLA25 1108/2.1.png",
    sideImage: "/eyeglass/Acatate/CLA25 1108/2.png",
    additionalImages: [
      "/eyeglass/Acatate/CLA25 1108/14.png",
      "/eyeglass/Acatate/CLA25 1108/19.png",
      "/eyeglass/Acatate/CLA25 1108/25.png",
    ],
    category: "unisex",
    collectionSeries: "Minimalist",
    model: "Clear",
    type: "eyeglass",
    material: "Acetate" // Example material
  },
  {
    id: 8,
    name: "Premium Titanium",
    price: 549,
    image: "/eyeglass/Acatate/CLA25 1109/4.png",
    sideImage: "/eyeglass/Acatate/CLA25 1109/4.1.png",
    additionalImages: [
   
    ],
    category: "men",
    collectionSeries: "Premium",
    model: "Titanium",
    type: "eyeglass",
    material: "Acetate" // Example material
  },
  {
    id: 9,
    name: "Premium Titanium",
    price: 549,
    image: "/eyeglass/TR/CL25TR064011/26.png",
    sideImage: "/eyeglass/TR/CL25TR064011/26.1.png",
    additionalImages: [
      "/eyeglass/TR/CL25TR064011/29.png",
      "/eyeglass/TR/CL25TR064011/31.png",
      "/eyeglass/TR/CL25TR064011/41f.png",
      "/eyeglass/TR/CL25TR064011/51f.png",
    ],
    category: "men",
    collectionSeries: "Premium",
    model: "Titanium",
    type: "eyeglass",
    material: "TR" // Example material
  },

  {
    id: 10,
    name: "Premium Titanium",
    price: 549,
    image: "/eyeglass/TR/CL25TR064013/40f.png",
    sideImage: "/eyeglass/TR/CL25TR064011/40s.png",
    additionalImages: [
      "/eyeglass/TR/CL25TR064011/50f.png",
      "/eyeglass/TR/CL25TR064011/50s.png",
    ],
    category: "men",
    collectionSeries: "Premium",
    model: "Titanium",
    type: "eyeglass",
    material: "TR" // Example material
  },
   {
    id: 11,
    name: "Premium Titanium",
    price: 549,
    image: "/eyeglass/TR/CL25TR064014/47f.png",
    sideImage: "/eyeglass/TR/CL25TR064014/47s.png",
    additionalImages: [
   
    ],
    category: "men",
    collectionSeries: "Premium",
    model: "Titanium",
    type: "eyeglass",
    material: "TR" // Example material
  },

   {
    id: 12,
    name: "Premium Titanium",
    price: 549,
    image: "/eyeglass/TR/CL25TR064015/42f.png",
    sideImage: "/eyeglass/TR/CL25TR064015/42s.png",
    additionalImages: [
       "/eyeglass/TR/CL25TR064015/44f.png",
       "/eyeglass/TR/CL25TR064015/44s.png",
    ],
    category: "men",
    collectionSeries: "Premium",
    model: "Titanium",
    type: "eyeglass",
    material: "TR" // Example material
  },

   {
    id: 13,
    name: "Premium Titanium",
    price: 549,
    image: "/eyeglass/TR/CL25TR064016/43f.png",
    sideImage: "/eyeglass/TR/CL25TR064016/43s.png",
    additionalImages: [
       "/eyeglass/TR/CL25TR064016/48f.png",
       "/eyeglass/TR/CL25TR064016/49f.png",
    ],
    category: "men",
    collectionSeries: "Premium",
    model: "Titanium",
    type: "eyeglass",
    material: "TR" // Example material
  },
   {
    id: 14,
    name: "Premium Titanium",
    price: 549,
    image: "/eyeglass/TR/CL25TR064051/27.png",
    sideImage: "/eyeglass/TR/CL25TR064051/27.1.png",
    additionalImages: [
       "/eyeglass/TR/CL25TR064051/28.png",
       "/eyeglass/TR/CL25TR064051/33.png",
    ],
    category: "men",
    collectionSeries: "Premium",
    model: "Titanium",
    type: "eyeglass",
    material: "TR" // Example material
  },
   
  
];

const Eyeglasses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [collectionSeriesFilter, setCollectionSeriesFilter] = useState("all");
  const [modelFilter, setModelFilter] = useState("all");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const itemsPerPage = 6;

  const filteredProducts = eyeglassesProducts.filter(product => {
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
            <h1 className="hero-title mb-4">Eyeglasses Collection</h1>
            <p className="subtitle max-w-2xl mx-auto">
              Professional eyewear designed for clarity, comfort, and style in every frame
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
                    <SelectItem value="Professional">Professional</SelectItem>
                    <SelectItem value="Elegant">Elegant</SelectItem>
                    <SelectItem value="Modern">Modern</SelectItem>
                    <SelectItem value="Classic">Classic</SelectItem>
                    <SelectItem value="Designer">Designer</SelectItem>
                    <SelectItem value="Executive">Executive</SelectItem>
                    <SelectItem value="Minimalist">Minimalist</SelectItem>
                    <SelectItem value="Premium">Premium</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={modelFilter} onValueChange={setModelFilter}>
                  <SelectTrigger className="w-36">
                    <SelectValue placeholder="Model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Models</SelectItem>
                    <SelectItem value="Reader">Reader</SelectItem>
                    <SelectItem value="Frame">Frame</SelectItem>
                    <SelectItem value="Square">Square</SelectItem>
                    <SelectItem value="Round">Round</SelectItem>
                    <SelectItem value="Cat-Eye">Cat-Eye</SelectItem>
                    <SelectItem value="Clear">Clear</SelectItem>
                    <SelectItem value="Titanium">Titanium</SelectItem>
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

export default Eyeglasses;
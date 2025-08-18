import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { CollectionSeriesSection } from '@/components/CollectionSeriesSection'
import { ProductShowcase } from '@/components/ProductShowcase';

import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      <main>
        <HeroSection />
        <CollectionSeriesSection />
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

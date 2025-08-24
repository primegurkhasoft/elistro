import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';

import { Award, Users, Heart, Shield, ArrowRight, Globe, Sparkles, Eye } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Our Story Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
                Our Story
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
                Crafting <span className="text-gradient">Excellence</span>
                <br />Since 1999
              </h2>
              <p className="subtitle max-w-3xl mx-auto">
                Born from a passion for precision and an eye for beauty, Elistro has been 
                redefining luxury eyewear for over two decades. Every frame tells a story 
                of innovation, craftsmanship, and timeless elegance.
              </p>
            </div>

            
            {/* Achievements Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {[
                { icon: Award, title: '25+ Years', description: 'of Craftsmanship' },
                { icon: Users, title: '50,000+', description: 'Happy Customers' },
                { icon: Globe, title: '40+ Countries', description: 'Worldwide Reach' },
                { icon: Sparkles, title: '500+ Designs', description: 'Unique Collections' },
              ].map((achievement, index) => (
                <div 
                  key={index}
                  className="text-center group"
                >
                  <div className="elegant-card p-8 transition-all duration-300 group-hover:shadow-glow">
                    <achievement.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <div className="text-2xl lg:text-3xl font-bold text-gradient mb-2">
                      {achievement.title}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
              <p className="subtitle max-w-2xl mx-auto">
                The principles that guide every decision we make and every frame we create
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  We pursue perfection in every detail, from the selection of premium materials to the final quality inspection.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  Constantly pushing boundaries with new technologies and design approaches to enhance your visual experience.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Community</h3>
                <p className="text-muted-foreground">
                  Building lasting relationships with our customers and supporting the communities where we operate.
                </p>
              </div>
            </div>
          </div>
        </section>

        


      </main>

      <Footer />
    </div>
  );
};

export default About;
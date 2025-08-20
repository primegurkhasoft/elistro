"use client";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { motion } from "framer-motion";

export const ProductShowcase = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const maxRotate = 10;

    const rotateX = ((y - centerY) / centerY) * maxRotate;
    const rotateY = ((centerX - x) / centerX) * maxRotate;

    imageRef.current.style.transform = `perspective(1200px) rotateX(${-rotateX}deg) rotateY(${-rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;
    imageRef.current.style.transform =
      "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section
      id="showcase"
      className="py-20 lg:py-32 bg-gradient-to-b from-background to-background/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-muted-foreground">
                Where{" "}
                <span className="text-gradient font-semibold">Art</span> Meets{" "}
                <span className="text-gradient font-semibold">Function</span>
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed">
                At <span className="text-[#D4AF37] font-medium">Elistro</span>,
                we believe that eyewear is more than just a functional
                accessory—it’s a statement of personal style and an extension of
                your identity. Our master craftsmen blend{" "}
                <span className="italic">heritage techniques</span> with
                cutting-edge innovation to create eyewear that embodies both{" "}
                <span className="font-medium">beauty</span> and{" "}
                <span className="font-medium">endurance</span>.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed">
                From the initial sketch to the final polish, every pair undergoes
                our meticulous process, ensuring that what reaches your hands is{" "}
                <span className="font-medium">perfection redefined</span>.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-playfair font-semibold text-white">
                Our Commitment
              </h4>
              <ul className="space-y-3">
                {[
                  "Sustainable materials and ethical sourcing",
                  "Handcrafted precision in every detail",
                  "Innovative lens technology for unmatched clarity",
                  "Timeless designs that transcend trends",
                ].map((commitment, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full shadow-glow" />
                    <span className="text-base sm:text-lg lg:text-base text-white/80">{commitment}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              variant="luxury"
              size="lg"
              className="mt-6 px-8 py-4 text-base sm:text-lg lg:text-lg rounded-xl shadow-elegant"
            >
              Discover Our Heritage
            </Button>
          </motion.div>

          {/* Right Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-depth-gradient rounded-2xl overflow-hidden shadow-elegant relative">
              <img
                ref={imageRef}
                src="/hero/productshowcase.png"
                alt="Elistro Eyewear"
                className="w-full h-full object-cover transition-transform duration-300 will-change-transform"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform:
                    "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)",
                }}
              />
              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-shimmer pointer-events-none" />
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute -top-6 -right-6 bg-black/60 backdrop-blur-md border border-[#D4AF37]/40 rounded-xl p-4 shadow-elegant animate-float"
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#D4AF37]">500+</div>
                <div className="text-sm sm:text-base lg:text-base text-white/70">Designs</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-black/60 backdrop-blur-md border border-[#D4AF37]/40 rounded-xl p-4 shadow-elegant animate-float"
              style={{ animationDelay: "2s" }}
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#D4AF37]">100%</div>
                <div className="text-sm sm:text-base lg:text-base text-white/70">Handcrafted</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
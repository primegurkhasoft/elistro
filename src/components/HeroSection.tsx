import { Sparkles, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { Button } from '@/components/ui/button'; // Assuming Button is available from your UI library

interface NewArrival {
  title: string;
  description: string;
  date: string;
  video?: string;
  image?: string;
  type: string;
}

const NewArrivalPopup = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const newArrival: NewArrival = {
    title: "Executive Gold Elite",
    description:
      "Discover the pinnacle of luxury with our new Executive Gold Elite, featuring 24K gold-plated frames and advanced lens technology.",
    date: "August 1, 2025",
    image: "/hero/greenframe.png",
    type: "New Arrival",
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl mx-4 bg-black/80 border border-[#D4AF37]/40 rounded-2xl p-8 max-h-[80vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/40 border border-[#D4AF37]/40 flex items-center justify-center hover:bg-[#D4AF37]/10 transition-all duration-300"
        >
          <X className="w-6 h-6 text-[#D4AF37]" />
        </button>
        <div className="text-center mb-8">
          <h2 className="text-4xl font-playfair font-bold text-[#D4AF37]">
            New Arrival
          </h2>
          <p className="text-base text-white/70 mt-3">
            Explore the latest addition to the Elistro Collection
          </p>
        </div>
        <div className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
          <div className="flex flex-col sm:flex-row gap-6">
            {newArrival.video ? (
              <div className="sm:w-1/2 flex-shrink-0">
                <video
                  src={newArrival.video}
                  autoPlay
                  loop
                  muted
                  className="w-full h-64 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                />
              </div>
            ) : newArrival.image ? (
              <div className="sm:w-1/2 flex-shrink-0">
                <img
                  src={newArrival.image}
                  alt={newArrival.title}
                  className="w-full h-64 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                />
              </div>
            ) : null}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-medium px-3 py-1.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37]">
                  {newArrival.type}
                </span>
                <span className="text-sm text-white/50">{newArrival.date}</span>
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-white">
                {newArrival.title}
              </h3>
              <p className="text-base text-white/70 mt-2">
                {newArrival.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HeroSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsPopupOpen(true);
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // Slow motion
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/hero/hero video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover sm:object-cover object-center z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 grid lg:grid-cols-2 items-center min-h-[70vh]">
        {/* Left Content */}
        <div className="max-w-xl space-y-6 sm:space-y-8 text-center sm:text-left mx-auto lg:mx-0">
          {/* Animated Luxury Eyewear Line */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-[#D4AF37]/40 bg-black/40 backdrop-blur-md mt-4 sm:mt-6">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs sm:text-sm font-medium text-[#D4AF37]">
              <TypeAnimation
                sequence={[
                  "Luxury Eyewear Collection",
                  2000,
                  "",
                  500,
                  "Luxury Eyewear Collection",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                cursor={true}
                repeat={Infinity}
              />
            </span>
          </div>

          {/* Main Headings */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-white leading-tight animate-fade-in">
            Crafted Elegance
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-[#D4AF37] animate-fade-in">
            Redefining Vision
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-lg mx-auto sm:mx-0 animate-fade-in">
            Elistro brings you international eyewear luxury — where precision,
            innovation, and style meet timeless sophistication.
          </p>

          {/* Button */}
          <div className="mt-4 sm:mt-6">
            <Button
              variant="outline"
              className="luxury-button text-sm sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl bg-[#D4AF37] text-black hover:bg-[#D4AF37]/80 transition-all duration-300"
              onClick={() => setIsPopupOpen(true)}
            >
              View New Arrival
            </Button>
          </div>
        </div>

        {/* Right Side Empty (Hidden on mobile) */}
        <div className="hidden lg:block"></div>
      </div>

      {/* Popup */}
      <NewArrivalPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg
          width="28"
          height="44"
          viewBox="0 0 32 48"
          className="fill-transparent stroke-white/60"
        >
          <rect x="10" y="0" width="12" height="40" rx="6" ry="6" />
          <circle
            cx="16"
            cy="8"
            r="4"
            fill="#D4AF37"
            className="animate-pulse"
          />
        </svg>
      </div>
    </section>
  );
};

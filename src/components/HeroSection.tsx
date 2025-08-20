import { Sparkles, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-3xl bg-black/80 border border-[#D4AF37]/40 rounded-2xl p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 border border-[#D4AF37]/40 flex items-center justify-center hover:bg-[#D4AF37]/10 transition-all duration-300"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
        </button>

        {/* Header */}
        <div className="text-center mb-5 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-playfair font-bold text-[#D4AF37]">
            New Arrival
          </h2>
          <p className="text-xs sm:text-sm text-white/70 mt-1 sm:mt-2">
            Explore the latest addition to the Elistro Collection
          </p>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
          <div className="flex flex-col sm:flex-row gap-4">
            {newArrival.video ? (
              <div className="sm:w-1/2 flex-shrink-0">
                <video
                  src={newArrival.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto aspect-video object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                />
              </div>
            ) : newArrival.image ? (
              <div className="sm:w-1/2 flex-shrink-0">
                <img
                  src={newArrival.image}
                  alt={newArrival.title}
                  className="w-full h-auto aspect-video object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                />
              </div>
            ) : null}

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37]">
                  {newArrival.type}
                </span>
                <span className="text-xs text-white/50">{newArrival.date}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-playfair font-semibold text-white">
                {newArrival.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-1">
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
      videoRef.current.playbackRate = 0.6; // Slow motion background
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          src="/hero/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[65vh]">
        {/* Left Content */}
        <div className="max-w-xl space-y-4 sm:space-y-6 text-center sm:text-left mx-auto lg:mx-0">
          {/* Animated Text */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-[#D4AF37]/40 bg-black/40 backdrop-blur-md mt-2 sm:mt-4">
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

          {/* Headings */}
          <h1 className="text-xl sm:text-3xl lg:text-5xl font-playfair font-bold text-white leading-snug sm:leading-tight tracking-tight drop-shadow-md">
            Crafted Elegance
          </h1>
          <h2 className="text-xl sm:text-3xl lg:text-5xl font-playfair font-bold text-[#D4AF37] leading-snug sm:leading-tight tracking-tight drop-shadow-md">
            Redefining Vision
          </h2>

          {/* Subtext */}
          <p className="text-sm sm:text-base lg:text-lg text-white/90 font-medium sm:font-normal max-w-lg mx-auto sm:mx-0 leading-relaxed drop-shadow">
            Elistro brings you international eyewear luxury — where precision,
            innovation, and style meet timeless sophistication.
          </p>

          {/* Button */}
          <div className="mt-4 sm:mt-6">
            <Button
              variant="outline"
              className="text-sm sm:text-base lg:text-lg px-5 sm:px-7 lg:px-8 py-2.5 sm:py-3 rounded-xl bg-[#D4AF37] text-black hover:bg-[#D4AF37]/80 transition-all duration-300"
              onClick={() => setIsPopupOpen(true)}
            >
              View New Arrival
            </Button>
          </div>
        </div>

        {/* Right Side - Empty (for future use) */}
        <div className="hidden lg:block"></div>
      </div>

      {/* Popup */}
      <NewArrivalPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg
          width="24"
          height="40"
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

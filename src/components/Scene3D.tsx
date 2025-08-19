import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  ContactShadows,
  PresentationControls,
  Loader,
} from "@react-three/drei";
import { EyewearModel } from "./EyewearModel";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

interface Scene3DProps {
  className?: string;
  eyewearColor?: string;
  autoRotate?: boolean;
  enableControls?: boolean;
}

export const Scene3D = ({
  className = "",
  eyewearColor = "#B8860B",
  autoRotate = true,
  enableControls = true,
}: Scene3DProps) => {
  // Detect when in viewport (lazy mount)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Detect mobile devices
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* 📱 Mobile fallback - show image instead of 3D */}
      {isMobile ? (
        <img
          src="/eyewear-fallback.png"
          alt="Eyewear"
          className="w-full h-auto object-contain"
        />
      ) : inView ? (
        <>
          <Canvas
            camera={{ position: [0, 0, 8], fov: 45 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
          >
            <Suspense fallback={null}>
              {/* 💡 Lights */}
              <ambientLight intensity={0.4} />
              <directionalLight
                position={[5, 5, 5]}
                intensity={0.9}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
              />

              {/* 🌍 Environment */}
              <Environment preset="studio" />

              {/* 🎛️ Controls */}
              {enableControls ? (
                <PresentationControls
                  global
                  zoom={0.9}
                  rotation={[0, 0, 0]}
                  polar={[-Math.PI / 6, Math.PI / 6]}
                  azimuth={[-Math.PI / 6, Math.PI / 6]}
                >
                  <EyewearModel color={eyewearColor} autoRotate={autoRotate} />
                </PresentationControls>
              ) : (
                <EyewearModel color={eyewearColor} autoRotate={autoRotate} />
              )}

              {/* 🔲 Shadows */}
              <ContactShadows
                position={[0, -2, 0]}
                opacity={0.35}
                scale={8}
                blur={1.5}
                far={2}
              />
            </Suspense>
          </Canvas>
          <Loader />
        </>
      ) : (
        <div className="w-full h-[400px] flex items-center justify-center text-gray-500">
          Loading...
        </div>
      )}
    </div>
  );
};


import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  OrbitControls, 
  Environment, 
  ContactShadows, 
  PresentationControls,
  Stage,
  Loader
} from '@react-three/drei';
import { EyewearModel } from './EyewearModel';

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
  enableControls = true 
}: Scene3DProps) => {
  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {/* Lighting Setup */}
          <ambientLight intensity={0.3} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#007FFF" />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#B8860B" />

          {/* Environment and Staging */}
          <Environment preset="studio" />
          
          {/* Controls */}
          {enableControls ? (
            <PresentationControls
              global
              zoom={0.8}
              rotation={[0, 0, 0]}
              polar={[-Math.PI / 4, Math.PI / 4]}
              azimuth={[-Math.PI / 4, Math.PI / 4]}
            >
              <EyewearModel 
                color={eyewearColor}
                autoRotate={autoRotate}
              />
            </PresentationControls>
          ) : (
            <EyewearModel 
              color={eyewearColor}
              autoRotate={autoRotate}
            />
          )}

          {/* Contact Shadows */}
          <ContactShadows 
            position={[0, -2, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={2} 
            far={2}
          />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
};
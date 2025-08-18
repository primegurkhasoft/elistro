import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Simple 3D Eyewear component using basic geometry
interface EyewearModelProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  color?: string;
  autoRotate?: boolean;
}

export const EyewearModel = ({ 
  position = [0, 0, 0], 
  rotation = [0, 0, 0],
  scale = 1,
  color = "#B8860B",
  autoRotate = true 
}: EyewearModelProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  // Create eyewear geometry using basic shapes
  const frameGeometry = new THREE.RingGeometry(0.8, 1.0, 32);
  const bridgeGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.6, 8);
  const templeGeometry = new THREE.CylinderGeometry(0.03, 0.03, 2, 8);

  return (
    <Float
      speed={2}
      rotationIntensity={hovered ? 0.5 : 0.2}
      floatIntensity={hovered ? 1 : 0.5}
    >
      <group 
        ref={groupRef}
        position={position}
        rotation={rotation}
        scale={scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Left Lens Frame */}
        <mesh position={[-1.2, 0, 0]} rotation={[0, 0, 0]}>
          <ringGeometry args={[0.8, 1.0, 32]} />
          <meshStandardMaterial 
            color={color}
            metalness={0.8}
            roughness={0.2}
            envMapIntensity={1}
          />
        </mesh>

        {/* Right Lens Frame */}
        <mesh position={[1.2, 0, 0]} rotation={[0, 0, 0]}>
          <ringGeometry args={[0.8, 1.0, 32]} />
          <meshStandardMaterial 
            color={color}
            metalness={0.8}
            roughness={0.2}
            envMapIntensity={1}
          />
        </mesh>

        {/* Bridge */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.05, 0.05, 0.6, 8]} />
          <meshStandardMaterial 
            color={color}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Left Temple */}
        <mesh position={[-2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.03, 0.03, 2, 8]} />
          <meshStandardMaterial 
            color={color}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Right Temple */}
        <mesh position={[2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.03, 0.03, 2, 8]} />
          <meshStandardMaterial 
            color={color}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Left Lens */}
        <mesh position={[-1.2, 0, 0.02]}>
          <circleGeometry args={[0.85, 32]} />
          <MeshTransmissionMaterial
            transmission={0.9}
            thickness={0.1}
            roughness={0.1}
            metalness={0.1}
            color="#87CEEB"
            ior={1.5}
          />
        </mesh>

        {/* Right Lens */}
        <mesh position={[1.2, 0, 0.02]}>
          <circleGeometry args={[0.85, 32]} />
          <MeshTransmissionMaterial
            transmission={0.9}
            thickness={0.1}
            roughness={0.1}
            metalness={0.1}
            color="#87CEEB"
            ior={1.5}
          />
        </mesh>
      </group>
    </Float>
  );
};
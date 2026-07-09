import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

export const FloatingIcosahedron = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Icosahedron ref={meshRef} args={[1, 0]} scale={2.5}>
        <MeshDistortMaterial
          color="#3B82F6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe={false}
          emissive="#8B5CF6"
          emissiveIntensity={0.5}
        />
      </Icosahedron>
    </Float>
  );
};

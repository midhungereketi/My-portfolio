import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Torus, Stars, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const AnimeEnergyOrb = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(time * 0.5) * 0.2;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = time * 0.5;
      ring1Ref.current.rotation.y = time * 0.8;
    }
    
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = time * -0.6;
      ring2Ref.current.rotation.z = time * 0.7;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = time * -0.9;
      ring3Ref.current.rotation.z = time * -0.4;
    }
    
    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * 0.5;
      sphereRef.current.rotation.y = time * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#8b5cf6" />
      <pointLight position={[0, 0, 0]} intensity={5} color="#c4b5fd" />
      
      {/* Central Energy Core */}
      <Sphere ref={sphereRef} args={[1.2, 64, 64]}>
        <MeshDistortMaterial 
          color="#8b5cf6"
          emissive="#6d28d9"
          emissiveIntensity={2}
          distort={0.4}
          speed={3}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>

      {/* Energy Rings */}
      <Torus ref={ring1Ref} args={[2, 0.05, 16, 100]}>
        <meshStandardMaterial color="#c4b5fd" emissive="#a78bfa" emissiveIntensity={3} />
      </Torus>
      
      <Torus ref={ring2Ref} args={[2.5, 0.03, 16, 100]}>
        <meshStandardMaterial color="#8b5cf6" emissive="#7c3aed" emissiveIntensity={2} />
      </Torus>

      <Torus ref={ring3Ref} args={[3, 0.02, 16, 100]}>
        <meshStandardMaterial color="#ddd6fe" emissive="#c4b5fd" emissiveIntensity={4} />
      </Torus>

      {/* Magical Dust/Particles */}
      <Stars 
        radius={5} 
        depth={10} 
        count={1500} 
        factor={4} 
        saturation={1} 
        fade 
        speed={2} 
      />
    </group>
  );
};

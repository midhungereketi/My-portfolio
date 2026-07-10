import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, MathUtils } from 'three';
import { Float, MeshDistortMaterial } from '@react-three/drei';

export const AbstractGeometry = () => {
  const meshRef = useRef<Mesh>(null);
  const wireframeRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = MathUtils.lerp(meshRef.current.rotation.x, state.mouse.y * 0.5, 0.05);
      meshRef.current.rotation.y = MathUtils.lerp(meshRef.current.rotation.y, state.mouse.x * 0.5, 0.05);
      meshRef.current.rotation.z += 0.005;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = MathUtils.lerp(wireframeRef.current.rotation.x, state.mouse.y * 0.5, 0.05);
      wireframeRef.current.rotation.y = MathUtils.lerp(wireframeRef.current.rotation.y, state.mouse.x * 0.5, 0.05);
      wireframeRef.current.rotation.z -= 0.003;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} color="#A855F7" />
      <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#EC4899" />
      
      {/* Core Distorted Sphere */}
      <mesh ref={meshRef} scale={1.5}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial 
          color="#1e293b" 
          envMapIntensity={1} 
          clearcoat={1} 
          clearcoatRoughness={0.1} 
          metalness={0.8} 
          roughness={0.2} 
          distort={0.4} 
          speed={2} 
        />
      </mesh>
      
      {/* Outer Wireframe */}
      <mesh ref={wireframeRef} scale={1.6}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial color="#A855F7" wireframe opacity={0.4} transparent />
      </mesh>
    </Float>
  );
};

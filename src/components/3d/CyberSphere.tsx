import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

export const CyberSphere = () => {
  const ref = useRef<THREE.Points>(null);
  
  // Generate a sphere of points
  const [positions, colors] = useMemo(() => {
    const positions = [];
    const colors = [];
    const count = 5000;
    const radius = 1.6;

    // Vibrant Cyberpunk Color Palette
    const palette = [
      new THREE.Color("#00f2fe"), // Neon Cyan
      new THREE.Color("#4facfe"), // Bright Blue
      new THREE.Color("#f093fb"), // Hot Pink
      new THREE.Color("#f5576c"), // Red Pink
      new THREE.Color("#8B5CF6"), // Electric Purple
      new THREE.Color("#a8ff78"), // Neon Green
    ];

    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const angleIncrement = Math.PI * 2 * goldenRatio;

    for (let i = 0; i < count; i++) {
      // Fibonacci sphere for even distribution
      const t = i / count;
      const phi = Math.acos(1 - 2 * t);
      const theta = angleIncrement * i;

      // Add random noise to positions for an organic cloud look
      const noise = (Math.random() - 0.5) * 0.5;

      const x = (radius + noise) * Math.sin(phi) * Math.cos(theta);
      const y = (radius + noise) * Math.sin(phi) * Math.sin(theta);
      const z = (radius + noise) * Math.cos(phi);

      positions.push(x, y, z);
      
      // Pick a random vibrant color from the palette
      const color = palette[Math.floor(Math.random() * palette.length)];
      
      colors.push(color.r, color.g, color.b);
    }
    
    return [new Float32Array(positions), new Float32Array(colors)];
  }, []);

  useFrame(() => {
    if (ref.current) {
      // Very slow base rotation to keep it alive even when not interacting
      ref.current.rotation.y += 0.0005;
      ref.current.rotation.z += 0.0002;
    }
  });

  return (
    <>
      {/* Physics-based orbital controls for free-will rotation with momentum */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        enableDamping={true} 
        dampingFactor={0.04} 
        autoRotate={true}
        autoRotateSpeed={0.8}
      />
      
      <group>
        {/* Outer Data Particle Sphere */}
        <Points ref={ref} positions={positions} colors={colors} stride={3} renderOrder={2}>
          <PointMaterial
            transparent
            vertexColors
            size={0.04}
            sizeAttenuation={true}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </Points>
        
        {/* Inner dark core to hide back particles slightly and give depth */}
        <mesh renderOrder={1}>
          <sphereGeometry args={[1.2, 32, 32]} />
          <meshBasicMaterial color="#03050c" transparent opacity={0.7} depthWrite={false} />
        </mesh>
      </group>
    </>
  );
};

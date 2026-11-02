import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const AmbientBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-background">
      
      {/* Soft Aurora Glows */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(200,200,200,0.4) 0%, rgba(26,26,26,0) 70%)',
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-[-10%] right-[-20%] w-[60vw] h-[60vw] rounded-full blur-[140px] opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(180,180,180,0.5) 0%, rgba(26,26,26,0) 70%)',
        }}
        animate={{
          x: [0, -150, 50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Interactive mouse orb */}
      <motion.div
        className="absolute w-[30vw] h-[30vw] rounded-full blur-[100px] opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(220,220,220,0.5) 0%, rgba(26,26,26,0) 70%)',
          left: 0,
          top: 0,
        }}
        animate={{
          x: mousePosition.x - (window.innerWidth * 0.15),
          y: mousePosition.y - (window.innerWidth * 0.15),
        }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 30,
          mass: 1
        }}
      />
      
      {/* Noise overlay to blend everything */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

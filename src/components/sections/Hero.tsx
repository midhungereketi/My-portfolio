import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { CyberSphere } from '../3d/CyberSphere';
import { useTypewriter } from '../../hooks/useTypewriter';
import { portfolioData } from '../../data/portfolioData';
import { Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

export const Hero = () => {
  const typedText = useTypewriter(portfolioData.personal.roles);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Generate random particles for background
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      {/* Dynamic Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-primary/40 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Background glowing effects with parallax */}
      <motion.div style={{ y: y1 }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-blob" />
      <motion.div style={{ y: y2 }} className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tertiary/10 rounded-full blur-[128px] animate-blob animation-delay-2000" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <div className="flex flex-col space-y-6 text-left">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05, delayChildren: 0.2 },
              },
            }}
          >
            <motion.h2 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-xl md:text-2xl text-primary font-space font-medium tracking-wide"
            >
              Hello, I'm
            </motion.h2>
            <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-poppins font-bold text-white mt-2 leading-tight flex flex-wrap gap-x-4">
              {portfolioData.personal.name.split(' ').map((word, wordIndex) => (
                <span key={wordIndex} className="flex">
                  {word.split('').map((char, charIndex) => (
                    <motion.span
                      key={`${wordIndex}-${charIndex}`}
                      variants={{
                        hidden: { opacity: 0, y: 50, rotateX: -90 },
                        visible: { 
                          opacity: 1, 
                          y: 0, 
                          rotateX: 0,
                          transition: { type: "spring", damping: 12, stiffness: 200 }
                        }
                      }}
                      className="inline-block origin-bottom"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-16"
          >
            <h3 className="text-2xl md:text-3xl text-textMuted font-inter">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-quaternary font-semibold">
                {typedText}
              </span>
              <span className="animate-pulse">|</span>
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-textMuted max-w-lg leading-relaxed"
          >
            {portfolioData.about.introduction}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-xl">🎓</span>
              <span className="text-textMuted font-medium tracking-wide">CGPA</span>
              <span className="text-primary font-bold">{portfolioData.education[0].cgpa}</span>
            </div>
            
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-xl">🏛️</span>
              <span className="text-primary font-bold">{portfolioData.education[0].university.split('—')[0].trim()}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-300 bg-primary/20 border border-primary/50 rounded-full hover:bg-primary hover:border-transparent overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Download Resume <Download size={18} />
              </span>
              <div className="absolute inset-0 h-full w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
            </motion.a>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="group inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-300 border border-white/20 rounded-full hover:bg-white/10 cursor-pointer"
              >
                Explore Portfolio <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Right 3D Model */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-[350px] sm:h-[400px] lg:h-[550px] w-full relative order-first lg:order-last mt-8 lg:mt-0"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-tertiary/5 rounded-full blur-3xl -z-10" />
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <CyberSphere />
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
};

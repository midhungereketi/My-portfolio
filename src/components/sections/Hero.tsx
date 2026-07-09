import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { AnimeEnergyOrb } from '../3d/AnimeEnergyOrb';
import { useTypewriter } from '../../hooks/useTypewriter';
import { portfolioData } from '../../data/portfolioData';
import { Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

export const Hero = () => {
  const typedText = useTypewriter(portfolioData.personal.roles);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-blob animation-delay-2000" />
      
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
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href={portfolioData.personal.resumeUrl}
              download
              className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-300 bg-primary/20 border border-primary/50 rounded-full hover:bg-primary hover:border-transparent overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Download Resume <Download size={18} />
              </span>
              <div className="absolute inset-0 h-full w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
            </a>
            
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="group inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-300 border border-white/20 rounded-full hover:bg-white/10 cursor-pointer"
            >
              Explore Portfolio <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Right 3D Model */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-[500px] w-full relative hidden md:block"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-3xl -z-10" />
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <AnimeEnergyOrb />
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
};

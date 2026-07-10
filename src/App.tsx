import { AnimatePresence, motion } from 'framer-motion';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { BackToTop } from './components/ui/BackToTop';
import { LenisScroll } from './components/ui/LenisScroll';
import { NoiseOverlay } from './components/ui/NoiseOverlay';
import { Preloader } from './components/ui/Preloader';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Certificates } from './components/sections/Certificates';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <LenisScroll>
      <div className="bg-background min-h-screen text-text overflow-hidden relative">
        <ScrollProgress />
        <Preloader />
        <NoiseOverlay />
        <Navbar />
        
        <AnimatePresence mode="wait">
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Certificates />
            <Contact />
          </motion.main>
        </AnimatePresence>
        
        <Footer />
        <BackToTop />
      </div>
    </LenisScroll>
  );
}

export default App;

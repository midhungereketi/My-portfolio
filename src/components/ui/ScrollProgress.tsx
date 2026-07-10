import { motion, useScroll } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-tertiary to-quaternary origin-left z-[9999]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

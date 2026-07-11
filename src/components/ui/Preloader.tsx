import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 10) + 5;
      if (current >= 100) {
        current = 100;
        setProgress(current);
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 500); // Small delay before hiding
      } else {
        setProgress(current);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-background flex flex-col justify-end p-8 md:p-16"
        >
          <div className="flex justify-between items-end">
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-4xl md:text-8xl editorial-heading"
              >
                Midhun
                <br />
                Gereketi
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="font-sans text-textMuted uppercase tracking-widest mt-4 text-xs md:text-sm"
              >
                Cyber security Student
              </motion.p>
            </div>
            <div className="text-right">
              <span className="font-mono text-6xl md:text-9xl text-primary font-light">
                {progress}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

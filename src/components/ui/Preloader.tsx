import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#03050c] text-white"
        >
          <div className="relative w-full max-w-sm px-8 overflow-hidden">
             <motion.div 
                className="text-[12vw] md:text-[8rem] font-space font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-quaternary"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
             >
                {Math.min(progress, 100)}%
             </motion.div>
             <div className="absolute bottom-0 left-8 right-8 h-1 bg-white/10 overflow-hidden rounded-full mt-4">
                <motion.div 
                   className="h-full bg-primary"
                   initial={{ width: 0 }}
                   animate={{ width: `${Math.min(progress, 100)}%` }}
                   transition={{ duration: 0.1 }}
                />
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

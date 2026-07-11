import { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';

export const ExperienceTimeline = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-4 sm:px-8 lg:px-16 bg-cream border-t border-primary/10">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="editorial-heading text-5xl md:text-7xl mb-24 text-center">
          Career <span className="italic text-tertiary">&</span> Evolution
        </h2>

        <div className="relative border-l border-primary/20 ml-4 md:ml-[50%]">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className={`relative mb-16 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right md:left-[-100%]' : 'md:pl-16'}`}>
              
              {/* Timeline Node */}
              <div 
                className={`absolute w-3 h-3 rounded-full border border-primary top-2 -left-[1.5rem] md:-left-[0.375rem] transition-colors duration-300 ${activeIndex === index ? 'bg-primary' : 'bg-cream cursor-pointer hover:bg-tertiary'}`}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              />

              <div 
                className="cursor-pointer group"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-mono text-xs uppercase tracking-widest text-secondary">{exp.duration}</span>
                <h3 className="font-editorial text-3xl md:text-4xl mt-2 group-hover:text-tertiary transition-colors">{exp.company}</h3>
                <h4 className="font-sans text-sm uppercase tracking-widest text-primary mt-2">{exp.role}</h4>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 pb-2">
                      <ul className={`font-sans text-charcoal space-y-3 ${index % 2 === 0 ? 'md:text-right text-left' : 'text-left'}`}>
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className={`opacity-80 relative ${index % 2 === 0 ? 'pl-4 md:pl-0 md:pr-4' : 'pl-4'}`}>
                            {/* Left bullet (shows on mobile for all, only on left for odd indexes on desktop) */}
                            <span className={`absolute top-2 w-1.5 h-1.5 bg-accent rounded-full ${index % 2 === 0 ? 'left-0 md:hidden' : 'left-0'}`} />
                            {/* Right bullet (shows only on desktop for even indexes) */}
                            {index % 2 === 0 && <span className="absolute right-0 top-2 w-1.5 h-1.5 bg-accent rounded-full hidden md:block" />}
                            {resp}
                          </li>
                        ))}
                      </ul>
                      
                      <div className={`mt-6 flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                        {exp.technologies.map(tech => (
                          <span key={tech} className="px-3 py-1 bg-surface border-thin font-mono text-[10px] uppercase tracking-wider text-primary">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

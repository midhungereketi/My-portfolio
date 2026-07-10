import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolioData';
import { Briefcase } from 'lucide-react';

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Experience" subtitle="My professional journey." />
        
        <div ref={containerRef} className="relative mt-12">
          {/* Vertical Line */}
          <motion.div 
            style={{ scaleY, transformOrigin: 'top' }} 
            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-tertiary to-transparent opacity-50 z-0" 
          />
          
          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_#3B82F6] z-10" />
                  
                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", duration: 0.8, bounce: 0.3 }}
                    className={`w-full md:w-[calc(50%-3rem)] pl-8 md:pl-0 z-10 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}
                  >
                    <div className="glass-card p-6 relative group overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                        <Briefcase size={64} className="text-primary" />
                      </div>
                      
                      <span className="text-primary font-medium text-sm mb-1 block">{exp.duration}</span>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                      <h4 className="text-textMuted text-lg mb-4">{exp.company}</h4>
                      
                      <ul className={`space-y-2 text-sm text-textMuted mb-4 ${isEven ? 'md:text-right' : ''}`}>
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start">
                            {!isEven && <span className="text-primary mr-2 mt-1">•</span>}
                            <span>{resp}</span>
                            {isEven && <span className="text-primary ml-2 mt-1 md:inline hidden">•</span>}
                            {isEven && <span className="text-primary mr-2 mt-1 md:hidden inline">•</span>}
                          </li>
                        ))}
                      </ul>
                      
                      <div className={`flex flex-wrap gap-2 mt-4 ${isEven ? 'md:justify-end' : ''}`}>
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/70">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

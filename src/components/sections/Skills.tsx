import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolioData';
import clsx from 'clsx';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(portfolioData.skills.map(s => s.category)))];

  const filteredSkills = activeCategory === 'All' 
    ? portfolioData.skills 
    : portfolioData.skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Technical Arsenal" subtitle="Tools and technologies I use to build secure and scalable applications." />
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={clsx(
                'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border',
                activeCategory === category 
                  ? 'bg-primary/20 border-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
                  : 'bg-transparent border-white/10 text-textMuted hover:border-white/30 hover:text-white'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.05, rotate: 2, y: -5 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="glass-card group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                      <Icon size={32} className="text-textMuted group-hover:text-primary transition-colors duration-300" />
                    </div>
                    
                    <div>
                      <h4 className="text-white font-medium mb-1">{skill.name}</h4>
                      <p className="text-xs text-textMuted">{skill.category}</p>
                    </div>


                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

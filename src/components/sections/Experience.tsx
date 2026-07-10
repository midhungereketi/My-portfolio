import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolioData';
import { Briefcase, Calendar } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Experience" subtitle="My professional journey." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="glass-card p-8 rounded-2xl relative group overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 shadow-lg hover:shadow-primary/20"
            >
              {/* Background gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-medium text-textMuted flex items-center gap-2">
                      <Briefcase size={18} className="text-primary/80" />
                      {exp.company}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold whitespace-nowrap">
                    <Calendar size={14} />
                    {exp.duration}
                  </div>
                </div>
                
                {/* Responsibilities */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-textMuted/90 flex items-start gap-3 text-sm md:text-base leading-relaxed">
                      <span className="text-primary mt-2 h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(59,130,246,0.8)] flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Technologies Footer */}
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/10">
                  {exp.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-white/5 hover:bg-primary/20 transition-colors border border-white/10 rounded-lg text-xs font-medium text-white/80 hover:text-white cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

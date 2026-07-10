import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolioData';
import { GraduationCap } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-20 relative bg-[#03050c]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Education" subtitle="Academic background and qualifications." />
        
        <div className="space-y-8 mt-12">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <GraduationCap size={100} className="text-secondary" />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                  <h4 className="text-xl text-primary font-medium">{edu.university}</h4>
                </div>
                <div className="mt-4 md:mt-0 text-left md:text-right">
                  <span className="inline-block px-4 py-1 bg-white/5 border border-white/10 rounded-full text-white text-sm font-medium mb-2">
                    {edu.duration}
                  </span>
                  <p className="text-tertiary font-semibold">CGPA: {edu.cgpa}</p>
                </div>
              </div>


              {edu.highlights && (
                <div className="mt-4">
                  <p className="text-sm text-secondary italic">✨ {edu.highlights}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

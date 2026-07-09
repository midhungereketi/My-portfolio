import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolioData';
import { Terminal, Shield, Cpu } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-32 relative bg-[#03050c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="My journey, mission, and vision." />
        
        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:auto-rows-[250px]">
          
          {/* Main Story Box - Spans 2 columns, 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 md:row-span-2 glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden group border border-white/5 hover:border-primary/20 bg-white/[0.02]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 h-full flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">The Story</h3>
              <div className="space-y-4">
                <p className="text-lg text-textMuted leading-relaxed">{portfolioData.about.story}</p>
                <p className="text-lg text-textMuted leading-relaxed">{portfolioData.about.introduction}</p>
              </div>
            </div>
            
            {/* Background decorative icon */}
            <div className="absolute -bottom-20 -right-20 opacity-5 group-hover:opacity-[0.15] transition-opacity duration-700 rotate-12 pointer-events-none">
               <Shield size={350} className="text-primary" />
            </div>
          </motion.div>

          {/* Mission Box - Spans 1 column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-3xl p-8 flex flex-col justify-center border-t-2 border-t-primary group overflow-hidden relative bg-white/[0.02]"
          >
             <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="relative z-10">
               <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                 <Terminal size={24} />
               </div>
               <h4 className="text-xl font-bold text-white mb-3">Mission</h4>
               <p className="text-textMuted leading-relaxed">{portfolioData.about.mission}</p>
             </div>
          </motion.div>

          {/* Vision Box - Spans 1 column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 flex flex-col justify-center border-t-2 border-t-tertiary group overflow-hidden relative bg-white/[0.02]"
          >
             <div className="absolute inset-0 bg-gradient-to-b from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="relative z-10">
               <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center mb-6 text-tertiary">
                 <Cpu size={24} />
               </div>
               <h4 className="text-xl font-bold text-white mb-3">Vision</h4>
               <p className="text-textMuted leading-relaxed">{portfolioData.about.vision}</p>
             </div>
          </motion.div>

          {/* Stats Boxes - 3 across the bottom row */}
          {portfolioData.about.stats.slice(0, 3).map((stat, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
               className="glass-card rounded-3xl p-8 min-h-[200px] flex flex-col items-center justify-center text-center relative overflow-hidden group bg-white/[0.02] border border-white/5"
             >
                <div className="absolute inset-0 bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="text-5xl md:text-6xl font-poppins font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-3 relative z-10 drop-shadow-xl">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm text-primary font-space uppercase tracking-widest font-semibold relative z-10">
                  {stat.label}
                </span>
             </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolioData';

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative bg-[#03050c] overflow-hidden">
      {/* Background Cyber-grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Technical Arsenal" subtitle="Tools and technologies I use to build secure and scalable systems." />
        
        <div className="mt-20 flex flex-wrap justify-center gap-5 sm:gap-6">
          {portfolioData.skills.map((skill, index) => {
            const Icon = skill.icon;
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.05, type: "spring", stiffness: 80 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative cursor-pointer"
              >
                {/* Glowing Aura on Hover */}
                <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Pill Container */}
                <div className="relative flex items-center gap-4 px-6 py-4 sm:px-8 sm:py-5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl group-hover:bg-white/[0.08] group-hover:border-primary/50 transition-all duration-300 shadow-xl overflow-hidden">
                  
                  {/* Subtle inner gradient shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                  
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-[#03050c] border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300 z-10">
                    <Icon size={22} className="text-textMuted group-hover:text-primary transition-colors duration-300" />
                  </div>
                  
                  {/* Details */}
                  <div className="flex flex-col pr-2 z-10">
                    <span className="text-white font-bold text-base sm:text-lg whitespace-nowrap group-hover:text-primary transition-colors duration-300 drop-shadow-md">
                      {skill.name}
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono text-textMuted uppercase tracking-widest mt-0.5 group-hover:text-primary/80 transition-colors duration-300">
                      {skill.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

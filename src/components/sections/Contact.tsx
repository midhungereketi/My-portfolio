import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolioData';
import { Mail, GitBranch, Briefcase } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative bg-[#03050c]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading title="Get In Touch" subtitle="Let's build something great together." />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 glass-card w-full"
        >
          <p className="text-textMuted mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
            I'm currently open for new opportunities. Whether you have a question, a project proposal, or just want to connect, feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <a 
              href={`mailto:${portfolioData.personal.contactEmail}`} 
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 transition-all group w-full sm:w-auto"
            >
              <Mail className="text-primary group-hover:scale-110 transition-transform" size={24} />
              <span className="text-white font-medium text-lg">{portfolioData.personal.contactEmail}</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-12 pt-10 border-t border-white/10">
            <a 
              href={portfolioData.personal.socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center gap-3 text-textMuted hover:text-white transition-all group"
              aria-label="GitHub"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#333] transition-colors">
                <GitBranch size={32} className="group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-medium text-sm">GitHub</span>
            </a>
            
            <a 
              href={portfolioData.personal.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center gap-3 text-textMuted hover:text-white transition-all group"
              aria-label="LinkedIn"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#0077b5] transition-colors">
                <Briefcase size={32} className="group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-medium text-sm">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

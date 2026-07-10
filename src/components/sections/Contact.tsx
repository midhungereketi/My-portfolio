import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolioData';
import { Mail, GitBranch, Briefcase, Send, CheckCircle2, Loader2 } from 'lucide-react';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };
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
          <p className="text-textMuted mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
            I'm currently open for new opportunities. Whether you have a question, a project proposal, or just want to connect, feel free to reach out!
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12 space-y-6 text-left">
            <div className="relative group">
              <input 
                type="text" 
                id="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary peer transition-all duration-300 placeholder-transparent"
                placeholder="Name"
              />
              <label htmlFor="name" className="absolute left-4 top-3 text-textMuted text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary -top-6">
                Your Name
              </label>
            </div>
            
            <div className="relative group mt-8">
              <input 
                type="email" 
                id="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary peer transition-all duration-300 placeholder-transparent"
                placeholder="Email"
              />
              <label htmlFor="email" className="absolute left-4 top-3 text-textMuted text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary -top-6">
                Your Email
              </label>
            </div>

            <div className="relative group mt-8">
              <textarea 
                id="message"
                required
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary peer transition-all duration-300 placeholder-transparent resize-none"
                placeholder="Message"
              ></textarea>
              <label htmlFor="message" className="absolute left-4 top-3 text-textMuted text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary -top-6">
                Your Message
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all duration-300 ${
                isSuccess 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                  : 'bg-primary/20 text-white border border-primary/50 hover:bg-primary hover:border-transparent'
              }`}
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin" size={20} />
              ) : isSuccess ? (
                <>
                  <CheckCircle2 size={20} /> Message Sent!
                </>
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </motion.button>
          </form>
          
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

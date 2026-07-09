import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolioData';
import { ExternalLink } from 'lucide-react';

export const Certificates = () => {
  return (
    <section id="certificates" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Certifications" subtitle="Professional credentials and continuous learning." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {portfolioData.certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card flex flex-col h-full group"
            >
              <div className="relative h-48 rounded-xl overflow-hidden mb-6 bg-white flex items-center justify-center p-8">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none" />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-primary font-medium mb-1">{cert.provider}</p>
                <div className="flex justify-between items-center text-sm text-textMuted mt-4">
                  <span>Issued: {cert.issueDate}</span>
                  <span className="font-mono text-xs">ID: {cert.credentialId}</span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/10">
                <a 
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white font-medium transition-colors"
                >
                  Verify Credential <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

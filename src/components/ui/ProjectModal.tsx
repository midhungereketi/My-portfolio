import { motion, AnimatePresence } from 'framer-motion';
import { X, Code2, ExternalLink, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0f25] border border-white/10 rounded-2xl shadow-2xl custom-scrollbar"
            style={{ 
              scrollbarWidth: 'thin', 
              scrollbarColor: 'rgba(255,255,255,0.2) transparent'
            }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-primary rounded-full text-white transition-colors backdrop-blur-md"
            >
              <X size={24} />
            </button>

            {/* Header Image */}
            <div className="w-full h-64 sm:h-80 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f25] to-transparent z-10" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 -mt-20 relative z-20">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full border border-primary/30">
                  {project.category}
                </span>
                <span className="text-textMuted text-sm">{project.date}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white mb-6">
                {project.title}
              </h2>
              
              <p className="text-textMuted text-lg leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-white font-semibold text-lg mb-4 border-b border-white/10 pb-2">Key Features</h4>
                  <ul className="space-y-3">
                    {project.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start text-textMuted">
                        <CheckCircle2 size={20} className="text-tertiary mr-3 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">The Challenge</h4>
                    <p className="text-textMuted text-sm leading-relaxed">{project.challenges}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">The Solution</h4>
                    <p className="text-textMuted text-sm leading-relaxed">{project.solutions}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">Results</h4>
                    <p className="text-textMuted text-sm leading-relaxed text-primary">{project.results}</p>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-white font-semibold text-lg mb-4 border-b border-white/10 pb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, i: number) => (
                    <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-medium transition-colors"
                >
                  <Code2 size={20} className="mr-2" /> View Source
                </a>
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-primary/20 hover:bg-primary/40 border border-primary/50 rounded-xl text-white font-medium transition-colors shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
                >
                  <ExternalLink size={20} className="mr-2" /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

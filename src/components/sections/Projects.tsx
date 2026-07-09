import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolioData';
import { ProjectModal } from '../ui/ProjectModal';
import { ExternalLink, Code2 } from 'lucide-react';

const ProjectCard = ({ project, index, setSelectedProject }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect for the image inside the card
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
      className="group relative rounded-2xl overflow-hidden glass-card p-0 border-white/5 hover:border-primary/30 shadow-2xl shadow-black"
    >
      {/* Image Container with Parallax */}
      <div 
        className="relative h-72 sm:h-80 w-full overflow-hidden cursor-pointer"
        onClick={() => setSelectedProject(project)}
      >
        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
        <motion.img 
          style={{ y, scale: 1.15 }}
          src={project.image} 
          alt={project.title} 
          className="w-full h-[130%] object-cover absolute top-[-15%] transition-transform duration-700 group-hover:scale-[1.25]"
        />
        
        {/* Floating Overlay Info */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
          <div>
            <span className="text-primary font-space font-bold tracking-widest text-xs mb-2 block uppercase">{project.category}</span>
            <h3 className="text-3xl font-poppins font-bold text-white mb-2">{project.title}</h3>
            <button className="text-sm text-white/80 hover:text-white flex items-center mt-2 interactive opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Case Study <ExternalLink size={14} className="ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="p-6 bg-[#03050c]/90 backdrop-blur-xl relative z-30">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech: string, i: number) => (
            <span key={i} className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-textMuted shadow-inner shadow-white/5">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-textMuted">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center pt-4 border-t border-white/10">
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textMuted hover:text-white transition-colors p-2 -ml-2 interactive"
            onClick={(e) => e.stopPropagation()}
          >
            <Code2 size={20} />
          </a>
          <a 
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textMuted hover:text-primary transition-colors flex items-center text-sm font-space font-medium tracking-wide uppercase interactive"
            onClick={(e) => e.stopPropagation()}
          >
            Live Preview
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="py-32 relative bg-[#03050c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Selected Works" subtitle="A curation of premium projects built with modern technologies." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mt-20">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              setSelectedProject={setSelectedProject} 
            />
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

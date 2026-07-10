import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolioData';
import { ProjectModal } from '../ui/ProjectModal';
import { ArrowUpRight } from 'lucide-react';
import clsx from 'clsx';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Bento grid mapping for up to 5 featured items
  const bentoStyles = [
    "md:col-span-2 md:row-span-2", // 1 - large featured
    "md:col-span-1 md:row-span-1", // 2 - small top right
    "md:col-span-1 md:row-span-1", // 3 - small bottom right
    "md:col-span-2 md:row-span-1", // 4 - medium wide bottom left
    "md:col-span-1 md:row-span-1", // 5 - small bottom right
  ];

  return (
    <section id="projects" className="py-32 relative bg-[#03050c] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Selected Works" subtitle="Hover to explore my premium projects." />
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[320px]">
          {portfolioData.projects.map((project, index) => {
            const bentoClass = bentoStyles[index] || "md:col-span-1 md:row-span-1";
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 80 }}
                onClick={() => setSelectedProject(project)}
                className={clsx(
                  "group relative rounded-3xl overflow-hidden cursor-pointer border border-white/5 bg-white/5 shadow-2xl hover:border-primary/50 transition-all duration-500",
                  bentoClass
                )}
              >
                {/* Background Image with Hover Scale */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-[#03050c]/40 group-hover:bg-[#03050c]/20 transition-colors duration-700 z-10 mix-blend-multiply" />
                  
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03050c] via-[#03050c]/80 to-transparent z-10 opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
                  
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />
                </div>

                {/* Subdued Glow Effect */}
                <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_70%)] transition-opacity duration-700 pointer-events-none" />

                {/* Content Container */}
                <div className="absolute inset-0 z-20 p-6 sm:p-8 flex flex-col justify-end">
                  <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    
                    {/* Category Label */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300 drop-shadow-md">
                      {project.title}
                    </h3>
                    
                    {/* Expandable description on hover */}
                    <p className="text-textMuted text-sm sm:text-base line-clamp-2 mb-5 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0 h-0 group-hover:h-auto overflow-hidden">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <div className="flex gap-2 flex-wrap max-w-[80%]">
                        {project.technologies.slice(0, 3).map((tech: string) => (
                          <span key={tech} className="text-xs font-medium text-white/80 bg-white/10 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-lg">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs font-medium text-white/50 bg-white/5 border border-white/5 px-2 py-1.5 rounded-lg">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      
                      {/* Action Button */}
                      <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-110">
                        <ArrowUpRight size={24} strokeWidth={2.5} />
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
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

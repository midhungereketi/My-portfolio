import { useEffect, useRef } from 'react';
import { portfolioData } from '../../data/portfolioData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ProjectsShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.project-panel');
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + (scrollWrapperRef.current?.offsetWidth ? scrollWrapperRef.current.offsetWidth * 0.5 : 0)
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen bg-charcoal text-background overflow-hidden relative">
      <div className="absolute top-8 left-4 sm:left-8 lg:left-16 z-10 flex w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] lg:w-[calc(100%-8rem)] justify-between items-center mix-blend-difference">
        <div>
          <h2 className="font-editorial text-4xl text-background">Selected Works</h2>
          <p className="font-mono text-xs uppercase tracking-widest text-background/60 mt-1">Three of the many projects that I made</p>
        </div>
        <span className="font-mono text-sm uppercase tracking-widest text-background/50">{portfolioData.projects.length} Cases</span>
      </div>

      <div 
        ref={scrollWrapperRef} 
        className="h-full flex" 
        style={{ width: `${portfolioData.projects.length * 100}vw` }}
      >
        {portfolioData.projects.map((project, i) => (
          <div key={project.id} className="project-panel w-screen h-full flex flex-col justify-center px-4 sm:px-8 lg:px-16 pt-24 pb-12 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 h-full w-full max-w-[1600px] mx-auto items-center">
              
              {/* Project Info */}
              <div className="lg:col-span-4 flex flex-col order-2 lg:order-1 h-[50vh] lg:h-auto justify-center overflow-y-auto pr-4 lg:pr-0">
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-accent mb-4 md:mb-6">
                  {project.category} — {project.date}
                </span>
                
                <h3 className="editorial-heading text-3xl md:text-5xl lg:text-6xl text-background mb-4 md:mb-8 leading-none">
                  {project.title}
                </h3>
                
                <p className="font-sans text-sm md:text-lg text-tertiary mb-6 md:mb-12">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="px-3 py-1 md:px-4 md:py-2 border border-background/20 rounded-full font-mono text-[10px] md:text-xs text-background/80">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 md:px-4 md:py-2 border border-background/20 rounded-full font-mono text-[10px] md:text-xs text-background/80">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <a 
                  href={project.github !== "#" ? project.github : "#"} 
                  className="group inline-flex items-center gap-3 md:gap-4 font-sans text-xs md:text-sm uppercase tracking-widest text-background hover:text-accent transition-colors w-fit"
                >
                  <span className="w-8 md:w-12 h-[1px] bg-background group-hover:bg-accent transition-colors" />
                  View Case Study
                  <ArrowUpRight size={16} />
                </a>
              </div>

              {/* Project Image */}
              <div className="lg:col-span-8 h-[35vh] lg:h-[70vh] w-full relative overflow-hidden order-1 lg:order-2 border border-background/10 group cursor-none mt-4 lg:mt-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Optional Custom Cursor target label could go here, handled by global cursor */}
              </div>

            </div>
            
            {/* Massive background number */}
            <div className="absolute bottom-4 right-8 font-editorial text-[20vw] leading-none text-background/[0.03] select-none pointer-events-none">
              0{i + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

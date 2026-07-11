import { useEffect, useRef } from 'react';
import { portfolioData } from '../../data/portfolioData';
import gsap from 'gsap';

export const SkillsConstellation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skill-node', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: {
          amount: 1,
          from: 'random'
        },
        ease: 'back.out(1.5)'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-4 sm:px-8 lg:px-16 bg-background relative overflow-hidden border-y border-primary/10">
      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
          <h2 className="editorial-heading text-5xl md:text-8xl">Architecture<br/><span className="text-tertiary italic">& Ecosystem</span></h2>
          <p className="font-sans text-textMuted max-w-sm mt-8 md:mt-0 text-lg">
            A comprehensive mapping of technical capabilities, spanning intelligent systems, data orchestration, and robust engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8 relative">
          {/* Subtle connective lines behind nodes */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A10_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A10_1px,transparent_1px)] bg-[size:100%_25%] md:bg-[size:25%_100%] -z-10" />

          {portfolioData.skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index} 
                className="skill-node group relative flex flex-col p-6 bg-cream border-thin hover:bg-primary hover:text-background transition-colors duration-500 min-h-[160px] justify-between cursor-crosshair"
              >
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs uppercase tracking-widest text-secondary group-hover:text-accent transition-colors">
                    0{index + 1}
                  </span>
                  <Icon size={20} strokeWidth={1} className="text-primary group-hover:text-background transition-colors" />
                </div>
                
                <div className="mt-8">
                  <h3 className="font-sans text-lg font-medium leading-tight">
                    {skill.name}
                  </h3>
                  <div className="h-auto lg:h-0 overflow-hidden lg:group-hover:h-auto opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 mt-2">
                    <span className="font-mono text-xs uppercase text-accent tracking-widest">
                      {skill.category}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

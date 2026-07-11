import { useEffect, useRef } from 'react';
import { portfolioData } from '../../data/portfolioData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutEditorial = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-text-reveal', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
      
      gsap.from('.about-line', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        scaleX: 0,
        duration: 1.5,
        ease: 'power3.inOut'
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-4 sm:px-8 lg:px-16 bg-cream relative">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          
          <div className="md:col-span-4 flex flex-col justify-between">
            <h2 className="text-sm font-mono uppercase tracking-widest text-textMuted mb-8 about-text-reveal">
              01 / The Narrative
            </h2>
            <div className="aspect-[3/4] w-full bg-surface border-thin p-8 flex flex-col justify-end about-text-reveal relative overflow-hidden group">
              <img 
                src="/profile.jpg" 
                alt="Midhun Gereketi" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/40 to-transparent opacity-90 transition-opacity duration-700" />
              <p className="font-editorial text-2xl italic text-charcoal relative z-10 font-semibold drop-shadow-md">
                "{portfolioData.about.vision}"
              </p>
            </div>
          </div>
          
          <div className="md:col-span-8 flex flex-col pt-12 md:pt-32">
            <h3 className="editorial-heading text-4xl md:text-7xl mb-12 about-text-reveal leading-tight">
              A commitment to engineering robust backend architectures and scalable data pipelines.
            </h3>
            
            <div className="about-line w-full h-[1px] bg-primary/20 mb-12 origin-left" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <h4 className="font-sans text-xs uppercase tracking-widest text-secondary mb-4 about-text-reveal">Background</h4>
                <p className="font-sans text-lg md:text-xl text-charcoal leading-relaxed about-text-reveal">
                  {portfolioData.about.story}
                </p>
              </div>
              <div>
                <h4 className="font-sans text-xs uppercase tracking-widest text-secondary mb-4 about-text-reveal">Focus</h4>
                <p className="font-sans text-lg md:text-xl text-charcoal leading-relaxed about-text-reveal">
                  {portfolioData.about.careerGoals}
                </p>
              </div>
            </div>
            
            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
              {portfolioData.about.stats.map((stat, i) => (
                <div key={i} className="flex flex-col about-text-reveal border-l border-primary/20 pl-4">
                  <span className="font-editorial text-4xl md:text-5xl text-primary">{stat.value}</span>
                  <span className="font-mono text-xs uppercase text-textMuted mt-2 tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

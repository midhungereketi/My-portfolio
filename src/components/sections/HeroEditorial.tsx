import { useEffect, useRef } from 'react';
import { portfolioData } from '../../data/portfolioData';
import gsap from 'gsap';

export const HeroEditorial = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-char', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.05,
        ease: 'power4.out',
        delay: 2 // Wait for preloader
      });
      
      gsap.from(subtextRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 3
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-end pb-24 pt-32 px-4 sm:px-8 lg:px-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-background">
        {/* Subtle grid lines for architectural feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,26,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,26,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="max-w-[1600px] mx-auto w-full flex flex-col items-start">
        <div ref={subtextRef} className="flex flex-col md:flex-row gap-6 md:gap-8 md:items-end mb-8 md:mb-12 w-full justify-between">
          <p className="font-sans text-sm md:text-base text-textMuted uppercase tracking-[0.2em] max-w-sm">
            {portfolioData.about.mission}
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 items-center">
            <a 
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors border-b border-secondary/30 pb-1"
            >
              Resume
            </a>
            {Object.entries(portfolioData.personal.socials).map(([key, url]) => (
              <a 
                key={key} 
                href={url} 
                target="_blank" 
                rel="noreferrer"
                className="font-mono text-[10px] md:text-xs uppercase tracking-widest hover:text-secondary transition-colors"
              >
                {key}
              </a>
            ))}
          </div>
        </div>

        <h1 
          ref={textRef}
          className="editorial-heading text-[15vw] sm:text-[12vw] md:text-[10vw] leading-[0.85] -ml-[0.05em] mb-4 md:mb-0"
        >
          {portfolioData.personal.name.split(' ').map((word, i) => (
            <span key={i} className="block overflow-hidden pb-2 md:pb-4">
              {word.split('').map((char, j) => (
                <span key={j} className="hero-char inline-block">{char}</span>
              ))}
            </span>
          ))}
        </h1>

        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between w-full border-t border-primary/20 pt-6 md:pt-8 gap-4 sm:gap-0">
          <p className="font-editorial text-xl md:text-4xl italic text-secondary">
            AI Engineer & Cyber Security Student
          </p>
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary flex items-center justify-center animate-bounce shrink-0">
            ↓
          </div>
        </div>
      </div>
    </section>
  );
};

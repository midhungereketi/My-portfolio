import { portfolioData } from '../../data/portfolioData';

export const ContactFooter = () => {
  return (
    <section className="bg-background relative pt-32 pb-12 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Massive subtle background typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02]">
        <h2 className="font-editorial text-[25vw] leading-none whitespace-nowrap">Collaborate</h2>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col items-center text-center">
        <h2 className="editorial-heading text-5xl md:text-8xl lg:text-9xl mb-8">
          Let's build<br />
          <span className="italic text-secondary">something together.</span>
        </h2>
        
        <p className="font-sans text-base md:text-lg text-charcoal max-w-xl mx-auto mb-12 md:mb-16">
          Currently open for internship opportunities and collaborative projects in AI engineering and full-stack development.
        </p>

        <a 
          href={`mailto:${portfolioData.personal.contactEmail}`}
          className="magnetic-btn px-6 py-4 md:px-12 md:py-5 rounded-full text-xs sm:text-sm md:text-xl font-sans uppercase tracking-widest mb-24 md:mb-32 break-all"
        >
          {portfolioData.personal.contactEmail}
        </a>

        {/* Footer */}
        <div className="w-full border-t border-primary/20 pt-8 md:pt-12 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-textMuted text-center lg:text-left">
            © {new Date().getFullYear()} Midhun Gereketi. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a href={portfolioData.personal.resumeUrl} target="_blank" rel="noreferrer" className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-primary hover:text-accent transition-colors">Resume</a>
            {Object.entries(portfolioData.personal.socials).map(([key, url]) => (
              <a key={key} href={url} target="_blank" rel="noreferrer" className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-primary hover:text-accent transition-colors">
                {key}
              </a>
            ))}
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-textMuted hover:text-primary transition-colors flex items-center gap-2"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </section>
  );
};

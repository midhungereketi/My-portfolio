import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const services = [
  {
    title: "Agentic AI Systems",
    description: "Designing autonomous, multi-agent frameworks capable of orchestrating complex enterprise workflows without human intervention."
  },
  {
    title: "RAG & LLM Integration",
    description: "Building highly optimized Retrieval-Augmented Generation pipelines over large unstructured datasets for precise semantic search."
  },
  {
    title: "Cybersecurity & Cloud",
    description: "Implementing secure backend architectures, role-based access control, and scalable deployments on Vercel and cloud platforms."
  },
  {
    title: "Full Stack Engineering",
    description: "Developing responsive, cinematic user interfaces combined with robust API design and database management."
  }
];

export const ServicesGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-4 sm:px-8 lg:px-16 bg-surface">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="editorial-heading text-3xl md:text-4xl lg:text-6xl mb-16 md:mb-24 max-w-3xl leading-tight">
          Delivering high-performance, intelligent systems tailored for the modern enterprise.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary/20 border-y border-primary/20">
          {services.map((service, i) => (
            <div key={i} className="service-card bg-surface p-8 md:p-12 lg:p-16 flex flex-col group hover:bg-cream transition-colors duration-500">
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-secondary mb-8 md:mb-16">
                0{i + 1} // Capability
              </span>
              <h3 className="font-editorial text-2xl md:text-3xl lg:text-4xl text-primary mb-4 md:mb-6 group-hover:text-tertiary transition-colors">
                {service.title}
              </h3>
              <p className="font-sans text-base md:text-lg text-charcoal/80 max-w-md">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

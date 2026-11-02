import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { portfolioData } from './data/portfolioData';

const { personal, about, projects, experience, education, certificates } = portfolioData;
type Project = typeof projects[number];

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// 0 → section top hits viewport top, 1 → section bottom hits viewport bottom
function useStickyProgress<T extends HTMLElement>(onProgress: (p: number, el: T) => void) {
  const ref = useRef<T>(null);
  const cb = useRef(onProgress);
  cb.current = onProgress;
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      cb.current(travel > 0 ? Math.min(1, Math.max(0, -rect.top / travel)) : 1, el);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(frame); };
  }, []);
  return ref;
}

// Scales a single line of display type so it spans its container exactly
function useFitText<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fit = () => {
      el.style.fontSize = '100px';
      const parent = el.parentElement!.clientWidth;
      el.style.fontSize = `${100 * parent / el.scrollWidth}px`;
    };
    fit();
    document.fonts?.ready.then(fit);
    const observer = new ResizeObserver(fit);
    observer.observe(el.parentElement!);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
    if (reducedMotion()) { items.forEach(i => i.classList.add('in')); return; }
    const observer = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); }
    }), { threshold: 0.15 });
    items.forEach(i => observer.observe(i));
    return () => observer.disconnect();
  }, []);
}

function Header() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const probe = document.elementsFromPoint(window.innerWidth / 2, 40).find(el => el.closest('[data-theme]'));
      setDark(probe?.closest('[data-theme]')?.getAttribute('data-theme') === 'dark');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [['About me', '#about'], ['Works', '#works'], ['Capabilities', '#capabilities'], ['Connect', '#contact']];
  return <header className={dark ? 'site-header on-dark' : 'site-header'}>
    <a className="logo" href="#top" aria-label="Midhun Gereketi, back to top">MIDHUN<br/>GEREKETI</a>
    <nav aria-label="Main navigation">{links.map(([label, href]) => <a key={href} href={href}><span>[</span>{label}<span>]</span></a>)}</nav>
    <a className="underline-link" href={`mailto:${personal.contactEmail}`}>Contact me <span aria-hidden="true">↗</span></a>
  </header>;
}

function Hero() {
  const title = useFitText<HTMLHeadingElement>();
  return <section className="hero" id="top" data-theme="light">
    <div className="hero-head">
      <span className="hero-count">8.36</span>
      <h1 ref={title}>CYBER SECURITY</h1>
      <p className="hero-based">STUDENT <i/> DEVELOPER <i/> BASED IN INDIA</p>
    </div>
    <div className="hero-stage">
      <div className="hero-panel">
        <ul className="hero-disciplines">
          <li>/ Secure development</li>
          <li>/ Full-stack web</li>
          <li>/ AI integration</li>
        </ul>
      </div>
      <figure className="hero-photo"><img src="/portrait.jpg" alt="Portrait of Midhun Gereketi"/></figure>
    </div>
    <div className="hero-foot">
      <div className="mono-tag">Available for internships <span aria-hidden="true">↘</span><br/><a href={`mailto:${personal.contactEmail}`}>{personal.contactEmail}</a></div>
      <div className="ticker" aria-hidden="true"><div>{Array.from({ length: 2 }, (_, i) => <span key={i}>B.TECH CYBER SECURITY · VIT VELLORE · GEN AI INTERN @ IBM · THREAT DETECTION · BACKEND SYSTEMS · </span>)}</div></div>
      <div className="mono-tag right">Recent work <span aria-hidden="true">↘</span><br/><a href="#works">{projects[0].title.split(' – ')[0]}</a></div>
    </div>
  </section>;
}

const manifesto = [
  ['SECURITY', 1], ['IS', 0], ['NOT', 0], ['A', 0], ['FEATURE,', 0],
  ['IT', 1], ['IS', 1], ['THE', 1], ['FOUNDATION', 1],
  ['OF', 0], ['EVERYTHING', 0], ['I', 0], ['BUILD.', 0],
] as const;

function Manifesto() {
  const ref = useStickyProgress<HTMLElement>((p, el) => el.style.setProperty('--p', String(Math.min(1, p * 1.25))));
  return <section className="manifesto" id="about" data-theme="dark" ref={ref}>
    <div className="manifesto-sticky">
      <div className="section-meta"><b>02/05</b><span>FOR ME</span><b>MG/02</b></div>
      <h2 style={{ '--n': manifesto.length } as React.CSSProperties}>{manifesto.map(([word, bright], i) =>
        <span key={i} className={bright ? 'w bright' : 'w'} style={{ '--i': i } as React.CSSProperties}>{word} </span>)}</h2>
      <p className="manifesto-note">{about.introduction}</p>
    </div>
  </section>;
}

function Works({ open }: { open: (p: Project) => void }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType !== 'mouse') return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };
  return <section className={hovered === null ? 'works' : 'works hovering'} id='works' data-theme="dark" ref={ref} onPointerMove={onMove}>
    <div className="works-head">
      <h2 data-reveal>SELECTED WORKS<sup>({String(projects.length).padStart(2, '0')})</sup></h2>
      <div className="works-intro"><b>MG/03</b><p className="mono-tag">Security, systems and data projects — built end to end, from data model to interface.</p></div>
    </div>
    <ol className="works-list" onPointerLeave={() => setHovered(null)}>{projects.map((p, i) => {
      const [name, tagline] = p.title.split(' – ');
      return <li key={p.id} className={hovered === i ? 'work active' : 'work'}>
        <button className="work-row" data-reveal onClick={() => open(p)} onPointerEnter={() => setHovered(i)} onFocus={() => setHovered(i)} onBlur={() => setHovered(null)}>
          <span className="work-no">0{i + 1}</span>
          <img className="work-thumb" src={p.image} alt='' loading="lazy"/>
          <span className="work-name">{name}</span>
          <span className="work-meta"><span>{tagline ?? p.category}</span><span>{p.technologies.slice(0, 3).join(' / ')}</span></span>
          <span className="work-year">{p.date}</span>
          <span className="work-arrow" aria-hidden="true">↗</span>
        </button>
      </li>;
    })}</ol>
    <div className="works-preview" aria-hidden="true">{projects.map((p, i) =>
      <img key={p.id} src={p.image} alt='' className={hovered === i ? 'show' : ''}/>)}<span>[ VIEW CASE ]</span></div>
    <div className="works-foot"><span className="mono-tag">Click a project for the full case study</span><a className="underline-link" href={personal.socials.github} target="_blank" rel="noreferrer">More on GitHub ↗</a></div>
  </section>;
}

function Philosophy() {
  return <section className="philosophy" data-theme="dark">
    <h2 data-reveal>IT'S NOT JUST A DEGREE — IT'S A WAY OF THINKING.</h2>
    <div className="philosophy-cols">
      <p data-reveal>{about.story}</p>
      <a className="mono-link" href={personal.resumeUrl} target="_blank" rel="noreferrer">MY RÉSUMÉ ↘</a>
      <p data-reveal className="philosophy-last">{about.careerGoals} I look for problems that need both careful reasoning and the patience to see them through.</p>
    </div>
  </section>;
}

const capabilities = [
  { title: 'Secure Development', items: ['Threat detection', 'URL risk scoring', 'Authentication & RBAC', 'Input validation'], body: 'Security works best when it shapes decisions early. I build detection signals, access control and clear feedback into the product itself.', image: projects[0].image },
  { title: 'Full-Stack Web', items: ['React / Vite', 'Node.js / Express', 'Firebase / Firestore', 'Responsive UI'], body: 'From responsive interfaces to dependable backends, I turn requirements into products people can actually use.', image: '/projects/school_erp.svg' },
  { title: 'AI Integration', items: ['Generative AI', 'Agentic workflows', 'LLM APIs', 'AI-assisted dev'], body: 'Hands-on with LLM integration from my Gen AI internship at IBM — connecting models to real systems and real data.', image: '/projects/enterprise_ai_1.svg' },
  { title: 'Data & Analytics', items: ['Snowflake', 'Databricks', 'Chart.js dashboards', 'SQL'], body: 'Turning raw information into something you can read at a glance, from analytics pipelines to live dashboards.', image: '/projects/cyber_logs.svg' },
  { title: 'DSA & Systems', items: ['C++ / Java / Python', 'Data structures', 'Algorithms', 'System design'], body: 'A strong grounding in algorithms and system design — the habit of choosing the right structure before writing the code.', image: '/projects/deadlock_lab.png' },
];

function Capabilities() {
  const [open, setOpen] = useState(1);
  return <section className="capabilities" id="capabilities" data-theme="light">
    <div className="cap-head"><h2 data-reveal>CAPABILITIES</h2><b>MG/04</b></div>
    <div className="cap-row">{capabilities.map((cap, i) =>
      <article key={cap.title} className={open === i ? 'cap open' : 'cap'} onMouseEnter={() => setOpen(i)}>
        <button className="cap-toggle" onClick={() => setOpen(i)} aria-expanded={open === i}>
          <span className="cap-no">00-{i + 1}</span>
          <span className="cap-title">{open === i && <i>//</i>}{cap.title}</span>
        </button>
        <div className="cap-body" inert={open !== i}>
          <div className="cap-detail">
            <ul>{cap.items.map(item => <li key={item}>/{item}</li>)}</ul>
            <img src={cap.image} alt="" loading="lazy"/>
          </div>
          <p>{cap.body}</p>
        </div>
      </article>)}
    </div>
  </section>;
}

function Recognition() {
  const rows = [
    ...experience.map(e => ({ mark: e.company === 'IBM' ? 'IBM' : 'HX', name: `${e.company} — ${e.role}`, count: e.duration })),
    ...certificates.map(c => ({ mark: c.provider.slice(0, 3).toUpperCase(), name: `${c.provider} — ${c.title}`, count: c.issueDate })),
    { mark: 'VIT', name: `VIT Vellore — B.Tech Cyber Security`, count: education[0].cgpa.split(' ')[0] },
  ];
  return <section className="recognition" id="experience" data-theme="light">
    <div className="rec-side"><span className="mono-tag">EXPERIENCE &amp; CREDENTIALS</span><a className="mono-tag" href={personal.socials.github} target="_blank" rel="noreferrer">MY CODE ON<br/><u>GITHUB</u></a></div>
    <ul className="rec-list">{rows.map(row =>
      <li key={row.name} data-reveal><span className="rec-mark">{row.mark}</span><span className="rec-name">{row.name}<sup>[{row.count}]</sup></span><span className="rec-arrow" aria-hidden="true">↗</span></li>)}
    </ul>
  </section>;
}

function Contact() {
  const interests = ['Internship', 'Collaboration', 'Hackathon', 'Just say hi'];
  const [picked, setPicked] = useState(interests[0]);
  const name = useFitText<HTMLParagraphElement>();
  const subject = encodeURIComponent(`${picked} — from your portfolio`);
  return <footer className="contact" id="contact" data-theme="light">
    <div className="contact-ask">
      <span className="mono-tag">WHAT BRINGS YOU HERE</span>
      <div className="chips" role="group" aria-label="Reason for reaching out">{interests.map(i =>
        <button key={i} className={picked === i ? 'chip on' : 'chip'} aria-pressed={picked === i} onClick={() => setPicked(i)}>{i}</button>)}</div>
      <a className="underline-link" href={`mailto:${personal.contactEmail}?subject=${subject}`}>Start the conversation <span aria-hidden="true">↗</span></a>
    </div>
    <div className="contact-main">
      <nav className="footer-nav" aria-label="Footer"><a href="#about">About me</a><a href="#capabilities">Capabilities</a><a href="#works">Works</a></nav>
      <div className="contact-big">
        <a href={`mailto:${personal.contactEmail}`}>{personal.contactEmail}</a>
        <div className="socials"><a className="underline-link" href={personal.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a className="underline-link" href={personal.socials.github} target="_blank" rel="noreferrer">GitHub ↗</a><a className="underline-link" href={personal.resumeUrl} target="_blank" rel="noreferrer">Résumé ↗</a></div>
      </div>
    </div>
    <div className="footer-brackets"><a href={personal.socials.github} target="_blank" rel="noreferrer">[ GitHub ]</a><a href={personal.resumeUrl} target="_blank" rel="noreferrer">[ Résumé ]</a><a href={personal.socials.linkedin} target="_blank" rel="noreferrer">[ LinkedIn ]</a></div>
    <div className="wordmark"><p ref={name}>MIDHUN GEREKETI</p></div>
    <div className="footer-meta"><span>VELLORE, INDIA</span><span>DESIGN &amp; CODE — MG</span><span>© {new Date().getFullYear()} ALL RIGHTS RESERVED</span></div>
  </footer>;
}

function CaseDialog({ project, close }: { project: Project | null; close: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (project) dialog.current?.showModal(); else dialog.current?.close();
  }, [project]);
  return <dialog className="case" ref={dialog} onClose={close} onClick={e => e.target === dialog.current && close()}>
    {project && <div className="case-inner">
      <button className="case-close" onClick={close} aria-label="Close case study"><X size={20}/></button>
      <span className="mono-tag">{project.category} · {project.date}</span>
      <h2>{project.title}</h2>
      <img src={project.image} alt={`${project.title} screenshot`}/>
      <p className="case-lead">{project.description}</p>
      <ul className="case-features">{project.features.map((f, i) => <li key={f}><b>0{i + 1}</b>{f}</li>)}</ul>
      <div className="case-grid">
        <div><span className="mono-tag">CHALLENGE</span><p>{project.challenges}</p></div>
        <div><span className="mono-tag">APPROACH</span><p>{project.solutions}</p></div>
        <div><span className="mono-tag">RESULT</span><p>{project.results}</p></div>
      </div>
      <div className="case-stack">{project.technologies.map(t => <span key={t}>{t}</span>)}</div>
      <div className="case-links">{project.github && project.github !== '#' && <a className="underline-link" href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>}{project.liveDemo && project.liveDemo !== '#' && <a className="underline-link" href={project.liveDemo} target="_blank" rel="noreferrer">Live demo ↗</a>}</div>
    </div>}
  </dialog>;
}

export default function App() {
  const [caseStudy, setCaseStudy] = useState<Project | null>(null);
  useReveal();
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header/>
    <main id="main">
      <Hero/>
      <Manifesto/>
      <Works open={setCaseStudy}/>
      <Philosophy/>
      <Capabilities/>
      <Recognition/>
    </main>
    <Contact/>
    <CaseDialog project={caseStudy} close={() => setCaseStudy(null)}/>
  </>;
}

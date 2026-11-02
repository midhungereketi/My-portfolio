import { ArrowDown, ArrowUpRight, ChevronRight, Code2, Mail, Menu, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const initials = portfolioData.personal.name.split(' ').map((part) => part[0]).join('');

function BrowserBar() {
  return <div className="browser-bar" aria-hidden="true"><span className="traffic red"/><span className="traffic yellow"/><span className="traffic green"/><span className="browser-pill"/><span className="browser-plus">+</span></div>;
}

function SiteHeader({ isLight, toggleTheme }: { isLight: boolean; toggleTheme: () => void }) {
  return <header className="site-header">
    <a href="#work" className="wordmark"><strong>{portfolioData.personal.name}</strong><small>{portfolioData.personal.title}</small></a>
    <nav className="pill-nav" aria-label="Main navigation"><a className="active" href="#work">Work</a><a href="#info">Info</a></nav>
    <div className="external-links"><button className="theme-toggle" onClick={toggleTheme} aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}>{isLight ? <Moon/> : <Sun/>}<span>{isLight ? 'Dark' : 'Light'}</span></button><a href={portfolioData.personal.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight/></a><a href={portfolioData.personal.resumeUrl} target="_blank" rel="noreferrer">Resume <ArrowUpRight/></a></div>
    <div className="mobile-actions"><button className="mobile-theme-toggle" onClick={toggleTheme} aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}>{isLight ? <Moon/> : <Sun/>}</button><Menu className="mobile-menu"/></div>
  </header>;
}

function Hero() {
  return <section className="case-hero" id="work">
    <div className="hero-frame"><BrowserBar/><div className="hero-content"><p className="hero-kicker">{initials} / PORTFOLIO 2026</p><h1>I craft <span>secure</span> products,<br/>interactions &amp; <em>stories.</em></h1><div className="hero-intro"><b>Cyber security student &amp; developer.</b><span>Building thoughtful interfaces, reliable systems, and AI-powered tools.</span></div></div><a className="hero-scroll" href="#projects"><ArrowDown/></a></div>
  </section>;
}

function ProjectCard({ project, index }: { project: typeof portfolioData.projects[number], index: number }) {
  const gradients = ['blue', 'smoke', 'violet'];
  return <article className={`case-card ${gradients[index % gradients.length]}`}><div className="case-card-top"><div><h2>{project.title}</h2><p>{project.category}, {project.date} <span>— {project.description}</span></p></div><a href={project.github === '#' ? '#contact' : project.github} aria-label={`Open ${project.title}`}><ChevronRight/></a></div><div className="case-browser"><BrowserBar/><img src={project.image} alt={`${project.title} project preview`}/><div className="image-sheen"/></div></article>;
}

function Work() { return <section className="works" id="projects"><div className="work-label"><span>SELECTED WORK</span><span>SCROLL TO EXPLORE</span></div>{portfolioData.projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index}/>)}</section>; }

function Info() { return <section id="info" className="info-section"><div className="info-title"><span>ABOUT ME</span><h2>Code with clarity.<br/><em>Build with intent.</em></h2></div><div className="info-copy"><p>{portfolioData.about.introduction}</p><p>{portfolioData.about.careerGoals}</p><a href={`mailto:${portfolioData.personal.contactEmail}`}>Let’s work together <ArrowUpRight/></a></div></section>; }

function Footer() { return <footer className="portfolio-footer" id="contact"><div className="footer-links"><div><label>MAIN</label><a href="#work">Work</a><a href="#info">Info</a></div><div><label>CONTACT</label><a href={portfolioData.personal.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight/></a><a href={portfolioData.personal.resumeUrl} target="_blank" rel="noreferrer">Resume <ArrowUpRight/></a></div><div><label>ELSEWHERE</label><a href={portfolioData.personal.socials.github} target="_blank" rel="noreferrer"><Code2/> GitHub</a><a href={`mailto:${portfolioData.personal.contactEmail}`}><Mail/> Email</a></div></div><div className="footer-bottom"><div><strong>© {new Date().getFullYear()} {portfolioData.personal.name}. All Rights Reserved.</strong><span>Designed and developed with curiosity.</span></div><span>Available for internships &amp; collaborations</span></div></footer>; }

export function CartoonPortfolio() {
  const [isLight, setIsLight] = useState(false);
  return <main className={`reference-portfolio ${isLight ? 'light-theme' : ''}`}><SiteHeader isLight={isLight} toggleTheme={() => setIsLight((value) => !value)}/><Hero/><Work/><Info/><Footer/></main>;
}

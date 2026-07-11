import { SmoothScroller } from './components/layout/SmoothScroller';
import { PremiumCursor } from './components/ui/PremiumCursor';
import { Preloader } from './components/ui/Preloader';

import { HeroEditorial } from './components/sections/HeroEditorial';
import { AboutEditorial } from './components/sections/AboutEditorial';
import { SkillsConstellation } from './components/sections/SkillsConstellation';
import { ProjectsShowcase } from './components/sections/ProjectsShowcase';
import { ExperienceTimeline } from './components/sections/ExperienceTimeline';
import { ServicesGrid } from './components/sections/ServicesGrid';
import { ContactFooter } from './components/sections/ContactFooter';

function App() {
  return (
    <SmoothScroller>
      <div className="bg-background min-h-screen text-text overflow-hidden relative selection:bg-primary selection:text-background font-sans">
        <PremiumCursor />
        <Preloader />
        
        <main>
          <HeroEditorial />
          <AboutEditorial />
          <SkillsConstellation />
          <ProjectsShowcase />
          <ExperienceTimeline />
          <ServicesGrid />
          <ContactFooter />
        </main>
      </div>
    </SmoothScroller>
  );
}

export default App;

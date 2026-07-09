import { portfolioData } from '../../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

export const Footer = () => {
  return (
    <footer className="bg-background py-12 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-8 md:mb-0">
            <p className="text-textMuted max-w-sm">
              Building secure and scalable digital experiences.
            </p>
          </div>
          
          <div className="flex space-x-8 mb-8 md:mb-0">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-textMuted hover:text-white transition-colors cursor-pointer text-sm font-medium"
              >
                {item}
              </Link>
            ))}
          </div>
          
          <div className="flex flex-col items-end">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-transparent hover:shadow-[0_0_20px_#3B82F6] transition-all cursor-pointer mb-4"
            >
              <ArrowUp size={20} />
            </Link>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-8 pt-8 flex justify-center items-center text-sm text-textMuted">
          <p>&copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

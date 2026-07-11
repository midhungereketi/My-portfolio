import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const PremiumCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Center cursor setup
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('magnetic')
      ) {
        gsap.to(cursor, {
          scale: 3,
          backgroundColor: 'transparent',
          border: '1px solid #1A1A1A',
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseOut = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: '#1A1A1A',
        border: 'none',
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{ willChange: 'transform' }}
    />
  );
};

import { useEffect, useRef } from 'react';
import anime from 'animejs';

const AnimatedBackground = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    // Create floating particles
    const createParticles = () => {
      const particles = [];
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
          position: fixed;
          width: ${Math.random() * 6 + 2}px;
          height: ${Math.random() * 6 + 2}px;
          background: linear-gradient(45deg, #0ea5e9, #06b6d4, #8b5cf6);
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          opacity: 0.6;
          left: ${Math.random() * 100}vw;
          top: ${Math.random() * 100}vh;
        `;
        document.body.appendChild(particle);
        particles.push(particle);
      }

      // Animate particles
      particles.forEach((particle, index) => {
        anime({
          targets: particle,
          translateX: () => anime.random(-200, 200),
          translateY: () => anime.random(-200, 200),
          scale: [0.5, 1.5, 0.5],
          opacity: [0.3, 0.8, 0.3],
          duration: () => anime.random(3000, 6000),
          delay: index * 200,
          easing: 'easeInOutSine',
          loop: true,
          direction: 'alternate'
        });
      });

      return particles;
    };

    const particles = createParticles();

    // Mouse follow effect
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Create temporary glow effect
      const glow = document.createElement('div');
      glow.style.cssText = `
        position: fixed;
        left: ${mouseX - 25}px;
        top: ${mouseY - 25}px;
        width: 50px;
        height: 50px;
        background: radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
      `;
      document.body.appendChild(glow);

      anime({
        targets: glow,
        scale: [0, 2],
        opacity: [0.5, 0],
        duration: 1000,
        easing: 'easeOutQuart',
        complete: () => glow.remove()
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      particles.forEach(particle => particle.remove());
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={backgroundRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)
        `
      }}
    />
  );
};

export default AnimatedBackground;
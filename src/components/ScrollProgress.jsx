import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-slate-800/50 z-50">
      <div 
        className="h-full bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      >
        <div className="absolute right-0 top-0 w-4 h-4 bg-white rounded-full transform -translate-y-1.5 shadow-lg animate-pulse"></div>
      </div>
    </div>
  );
};

export default ScrollProgress;
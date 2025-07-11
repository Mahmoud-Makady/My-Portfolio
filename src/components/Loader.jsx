import { useEffect, useState } from 'react';
import logo from '../assets/logo2.png';

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-500/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-400/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-300/5 rounded-full animate-ping"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Container */}
        <div className="relative mb-8">
          {/* Rotating Ring */}
          <div className="absolute inset-0 w-32 h-32 border-4 border-transparent border-t-sky-400 border-r-sky-500 rounded-full animate-spin"></div>
          
          {/* Logo */}
          <div className="w-32 h-32 flex items-center justify-center">
            <img 
              src={logo} 
              alt="Logo" 
              className="w-20 h-20 animate-pulse"
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-slate-200 animate-pulse">
            Loading...
          </h2>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mb-6">
          {/* Code-style Progress Container */}
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-slate-400 text-xs font-mono ml-2">building-portfolio.js</span>
            </div>
            
            {/* Progress Steps */}
            <div className="space-y-2 mb-4">
              <div className={`flex items-center gap-2 text-xs font-mono transition-colors ${progress >= 25 ? 'text-orange-400' : 'text-slate-500'}`}>
                <span>{progress >= 25 ? '✓' : '○'}</span>
                <span>&lt;html&gt;</span>
                <span className="text-slate-400">structuring...</span>
              </div>
              <div className={`flex items-center gap-2 text-xs font-mono transition-colors ${progress >= 50 ? 'text-blue-400' : 'text-slate-500'}`}>
                <span>{progress >= 50 ? '✓' : '○'}</span>
                <span>CSS</span>
                <span className="text-slate-400">styling...</span>
              </div>
              <div className={`flex items-center gap-2 text-xs font-mono transition-colors ${progress >= 75 ? 'text-yellow-400' : 'text-slate-500'}`}>
                <span>{progress >= 75 ? '✓' : '○'}</span>
                <span>JavaScript</span>
                <span className="text-slate-400">adding interactivity...</span>
              </div>
              <div className={`flex items-center gap-2 text-xs font-mono transition-colors ${progress >= 100 ? 'text-cyan-400' : 'text-slate-500'}`}>
                <span>{progress >= 100 ? '✓' : '○'}</span>
                <span>React</span>
                <span className="text-slate-400">rendering components...</span>
              </div>
            </div>
            
            {/* Modern Progress Bar */}
            <div className="relative">
              <div className="h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-600/30">
                <div 
                  className="h-full bg-gradient-to-r from-orange-500 via-blue-500 via-yellow-500 to-cyan-400 rounded-full transition-all duration-500 ease-out relative"
                  style={{ width: `${progress}%` }}
                >
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  {/* Moving dot */}
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg animate-pulse"></div>
                </div>
              </div>
              
              {/* Progress indicators */}
              <div className="flex justify-between mt-2 text-xs">
                <span className="text-orange-400 font-mono">HTML</span>
                <span className="text-blue-400 font-mono">CSS</span>
                <span className="text-yellow-400 font-mono">JS</span>
                <span className="text-cyan-400 font-mono">React</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Percentage */}
        <div className="text-center">
          <span className="text-2xl font-mono font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
            {progress}%
          </span>
          <div className="text-slate-400 text-sm mt-1">
            <span className="font-mono">&lt;/&gt;</span> Front-End Developer
          </div>
        </div>

        {/* Floating Dots Animation */}
        <div className="absolute top-20 left-10">
          <div className="w-2 h-2 bg-sky-400 rounded-full animate-bounce"></div>
        </div>
        <div className="absolute top-32 right-16">
          <div className="w-1 h-1 bg-sky-300 rounded-full animate-bounce delay-300"></div>
        </div>
        <div className="absolute bottom-20 left-20">
          <div className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce delay-700"></div>
        </div>
        <div className="absolute bottom-32 right-12">
          <div className="w-1 h-1 bg-sky-200 rounded-full animate-bounce delay-1000"></div>
        </div>
      </div>

      {/* Loading Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-sky-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
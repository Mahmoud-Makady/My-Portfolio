import { useEffect, useState } from 'react';
import logo from '../assets/logo2.png';

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 300);
          return 100;
        }
        return prev + 4;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950">
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 mb-8">
          <div className="absolute inset-0 border-2 border-transparent border-t-sky-400 rounded-full animate-spin" />
          <div className="absolute inset-0 grid place-items-center">
            <img src={logo} alt="" aria-hidden="true" className="w-14 h-14" />
          </div>
        </div>

        <div
          className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Loading portfolio"
        >
          <div
            className="h-full bg-sky-400 rounded-full transition-[width] duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-4 text-xs font-mono text-slate-400 tabular-nums">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default Loader;

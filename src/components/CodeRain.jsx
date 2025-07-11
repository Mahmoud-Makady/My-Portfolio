import { useEffect, useState } from 'react';

const CodeRain = () => {
  const [drops, setDrops] = useState([]);
  
  const codeSymbols = [
    '<', '>', '/', '{}', '()', '[]', '=', ';', 
    'const', 'let', 'var', 'function', 'return',
    'if', 'else', 'for', 'while', 'class',
    '&&', '||', '!', '===', '!==', '=>',
    'React', 'HTML', 'CSS', 'JS'
  ];

  useEffect(() => {
    const createDrop = () => ({
      id: Math.random(),
      symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
      left: Math.random() * 100,
      animationDuration: 3 + Math.random() * 4,
      delay: Math.random() * 2,
      fontSize: 12 + Math.random() * 8,
      opacity: 0.1 + Math.random() * 0.3
    });

    const interval = setInterval(() => {
      setDrops(prev => {
        const newDrops = [...prev, createDrop()];
        // Keep only last 20 drops for performance
        return newDrops.slice(-20);
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {drops.map(drop => (
        <div
          key={drop.id}
          className="absolute text-sky-400/20 font-mono code-rain"
          style={{
            left: `${drop.left}%`,
            fontSize: `${drop.fontSize}px`,
            animationDuration: `${drop.animationDuration}s`,
            animationDelay: `${drop.delay}s`,
            opacity: drop.opacity
          }}
        >
          {drop.symbol}
        </div>
      ))}
    </div>
  );
};

export default CodeRain;
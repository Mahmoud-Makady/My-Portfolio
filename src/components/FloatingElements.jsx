const FloatingElements = () => {
  const elements = [
    { symbol: '<div>', top: '10%', left: '5%', delay: '0s', duration: '6s' },
    { symbol: '</>', top: '20%', right: '10%', delay: '1s', duration: '8s' },
    { symbol: '{}', top: '60%', left: '8%', delay: '2s', duration: '7s' },
    { symbol: '()', top: '70%', right: '15%', delay: '0.5s', duration: '9s' },
    { symbol: '=>', top: '40%', left: '3%', delay: '1.5s', duration: '5s' },
    { symbol: '[]', top: '80%', right: '5%', delay: '2.5s', duration: '6s' },
    { symbol: 'React', top: '30%', right: '20%', delay: '3s', duration: '10s' },
    { symbol: 'CSS', top: '50%', left: '2%', delay: '0.8s', duration: '7s' }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element, index) => (
        <div
          key={index}
          className="absolute text-sky-400/10 font-mono text-lg animate-float"
          style={{
            top: element.top,
            left: element.left,
            right: element.right,
            animationDelay: element.delay,
            animationDuration: element.duration
          }}
        >
          {element.symbol}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
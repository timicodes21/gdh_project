import { useState, useEffect } from 'react';

export function Loader(): JSX.Element {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAngle((angle) => angle + 10);
    }, 50);
    return () => clearInterval(intervalId);
  }, []);

  const loaderStyle: React.CSSProperties = {
    width: '50px',
    height: '50px',
    border: '5px solid rgba(0, 0, 0, 0.1)',
    borderTop: '5px solid white',
    borderRadius: '50%',
    boxSizing: 'border-box',
    transform: `rotate(${angle}deg)`,
    transition: 'transform 0.05s linear',
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: '#386EB2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={loaderStyle} />
    </div>
  );
}

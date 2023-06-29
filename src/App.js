import React, { useState, useEffect } from 'react';
import './App.css';
import khongImage from './loai-gian-my.jpg';

const App = () => {
  const [positionY, setPositionY] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowUp') {
        setPositionY((prevPosition) => prevPosition - 50);
      } else if (event.key === 'ArrowDown') {
        setPositionY((prevPosition) => prevPosition + 50);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img
          src={khongImage}
          className="rotate-image"
          alt="khong"
          style={{ transform: `translateY(${positionY}px)` }}
        />
      </header>
    </div>
  );
};

export default App;

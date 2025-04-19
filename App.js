
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [timeLeft, setTimeLeft] = useState(30 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) return 30 * 60;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="timer-container">
      <h1>Orabi Timer</h1>
      <div className="timer">{formatTime(timeLeft)}</div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div>
      <h2>Temporizador com useEffect</h2>
      <p>Tempo: {seconds}s</p>
      <button onClick={() => setIsActive(!isActive)}>{isActive ? 'Pausar' : 'Iniciar'}</button>
      <button onClick={() => { setIsActive(false); setSeconds(0); }}>Reiniciar</button>
    </div>
  );
}

export default Timer;

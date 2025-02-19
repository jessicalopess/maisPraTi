import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
      if (isActive) alert('Tempo acabou!');
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <div>
      <h2>Timer com Intervalo e Alerta</h2>
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(Number(e.target.value))}
        placeholder="Segundos"
      />
      <button onClick={() => setIsActive(true)}>Iniciar</button>
      <button onClick={() => setIsActive(false)}>Pausar</button>
      <button onClick={() => { setIsActive(false); setTime(0); }}>Reiniciar</button>
      <p>Tempo restante: {time}s</p>
    </div>
  );
}

export default CountdownTimer;

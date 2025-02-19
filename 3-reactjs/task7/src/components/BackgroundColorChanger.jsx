import React, { useState, useEffect } from 'react';

function BackgroundColorChanger() {
  const [color, setColor] = useState('#ffffff');

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
  };

  return (
    <div>
      <h2>Alteração de Cor de Fundo</h2>
      <button onClick={generateRandomColor}>Mudar Cor</button>
    </div>
  );
}

export default BackgroundColorChanger;

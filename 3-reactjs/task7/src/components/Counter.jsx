import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Contador Simples</h2>
      <p>Valor: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>Decrementar</button>
    </div>
  );
}

export default Counter;

import React, { useState } from 'react';

function NameFilter() {
  const [filter, setFilter] = useState('');
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Filtro de Lista</h2>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filtrar nomes"
      />
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameFilter;

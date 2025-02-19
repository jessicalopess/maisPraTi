import React, { useState } from 'react';

function Tabs() {
  const [activeTab, setActiveTab] = useState('sobre');

  return (
    <div>
      <h2>Componentes com Tabs Navegáveis</h2>
      <div>
        <button onClick={() => setActiveTab('sobre')} style={{ fontWeight: activeTab === 'sobre' ? 'bold' : 'normal' }}>Sobre</button>
        <button onClick={() => setActiveTab('contato')} style={{ fontWeight: activeTab === 'contato' ? 'bold' : 'normal' }}>Contato</button>
      </div>
      <div>
        {activeTab === 'sobre' && <p>Esta é a aba Sobre.</p>}
        {activeTab === 'contato' && <p>Esta é a aba Contato.</p>}
      </div>
    </div>
  );
}

export default Tabs;

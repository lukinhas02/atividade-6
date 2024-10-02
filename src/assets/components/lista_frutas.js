import React, { useState } from 'react';

const ListaFrutas = () => {
  const [frutas, setFrutas] = useState(['Maçã', 'Banana', 'Laranja']);
  const [novaFruta, setNovaFruta] = useState('');

  const adicionarFruta = () => {
    if (novaFruta) {
      setFrutas([...frutas, novaFruta]);
      setNovaFruta('');
    }
  };

  return (
    <div>
      <h1>Lista de Frutas</h1>
      <ul>
        {frutas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>
      <input
        type="text"
        value={novaFruta}
        onChange={(e) => setNovaFruta(e.target.value)}
        placeholder="Adicionar nova fruta"
      />
      <button onClick={adicionarFruta}>Adicionar</button>
    </div>
  );
};

export default ListaFrutas;
import React, { useState } from 'react';

const ListaCarros = () => {
  const [carros, setCarros] = useState(['Fusca', 'Civic', 'Gol']);
  const [novoCarro, setNovoCarro] = useState('');

  const adicionarCarro = () => {
    if (novoCarro) {
      setCarros([...carros, novoCarro]);
      setNovoCarro('');
    }
  };

  return (
    <div>
      <h1>Lista de Carros</h1>
      <ul>
        {carros.map((carro, index) => (
          <li key={index}>{carro}</li>
        ))}
      </ul>
      <input
        type="text"
        value={novoCarro}
        onChange={(e) => setNovoCarro(e.target.value)}
        placeholder="Adicionar novo carro"
      />
      <button onClick={adicionarCarro}>Adicionar</button>
    </div>
  );
};

export default ListaCarros;
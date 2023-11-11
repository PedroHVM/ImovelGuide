import React, { useState } from 'react';
import '../Style/content.css';

const Phone = () => {
  const [mostrarTelefone1, setMostrarTelefone1] = useState(false);
  const [mostrarTelefone2, setMostrarTelefone2] = useState(false);

  const gerarNumeroAleatorio = () => {
    const gerarDigito = () => Math.floor(Math.random() * 10);
    let numero = '';

    for (let i = 0; i < 11; i++) {
      numero += gerarDigito();
    }

    return numero;
  };

  const formatarTelefone = (numero) => {
    return numero.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };

  const handleClick1 = () => {
    setMostrarTelefone1(true);
  };

  const handleClick2 = () => {
    setMostrarTelefone2(true);
  };

  return (
    <div className="container">
      <span>1</span>
      <div className="box">
        <div className="profile">
          <img src="/src/images/corretor_1.jpeg" alt="Imagem de um corretor" />
          <ul>
            <h1>Pedro Malheiros</h1>
            <li>3.000 pontos</li>
            <a href="#" onClick={handleClick1}>
              {mostrarTelefone1 ? formatarTelefone(gerarNumeroAleatorio()) : 'Ver telefone'}
            </a>
          </ul>
        </div>
        <div className="profile">
          <img src="/src/images/corretor_1.jpeg" alt="Imagem de um corretor" />
          <ul>
            <h1>Lorena Paiva</h1>
            <li>1.260 pontos</li>
            <a href="#" onClick={handleClick2}>
              {mostrarTelefone2 ? formatarTelefone(gerarNumeroAleatorio()) : 'Ver telefone'}
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Phone;

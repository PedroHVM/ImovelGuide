import React, { useState } from 'react';
import '../Style/phone.css';


const Phone = () => {
    const [mostrarTelefone, setMostrarTelefone] = useState(false);

    const numeroTelefone = '(11) 22222-3333'; 
  
    const formatarTelefone = (numero) => {
      return numero.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    };
  
    const handleClick = () => {
      setMostrarTelefone(true);
    };

    const handleClick2 = () => {
        setMostrarTelefone(true);
    };
  
    return (

        <div className="container">
            <span>1</span>
            <div className='box'>
                <div className='profile'>
                    <img src="/src/images/corretor_1.jpeg" alt="Imagem de um corretor" />
                    <ul>
                        <h1>Pedro Malheiros</h1>
                        <li>3.000 pontos</li>
                        <a href="#" onClick={handleClick}>Ver telefone</a>
                        {mostrarTelefone && <p>{formatarTelefone(numeroTelefone)}</p>}
                    </ul>
                </div>
                <div className='profile'>
                    <img src="/src/images/corretor_1.jpeg" alt="Imagem de um corretor" />
                    <ul>
                        <h1>Lorena Paiva</h1>
                        <li>1.260 pontos</li>
                        <a href="#" onClick={handleClick2}>Ver telefone</a>
                        {mostrarTelefone && <p>{formatarTelefone(numeroTelefone)}</p>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Phone;
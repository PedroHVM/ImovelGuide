import React, { useState } from 'react';
import '../Style/content.css';

const RegraDeTres = () => {
  const [inputValues, setInputValues] = useState({
    n1: '',
    n2: '',
    n3: '',
    n4: '',
  });

  const handleInputChange = (inputName, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [inputName]: value,
    }));
  };

  const calcularRegraDeTres = () => {
    const { n1, n2, n3 } = inputValues;

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      alert('Digite números válidos para realizar o cálculo.');
      return;
    }

    const resultado = (n3 * n2) / n1;

    setInputValues((prevValues) => ({
      ...prevValues,
      n4: resultado.toFixed(2), 
    }));
  };

  return (
    <div className="container">
      <span>3</span>
      <div className="calculo">
        <div>
          <h1>Regra de 3</h1>
        </div>
        <div className="numbers">
          <div className="number">
            <input
              type="text"
              placeholder="Digite um número"
              value={inputValues.n1}
              onChange={(e) => handleInputChange('n1', e.target.value)}
            />
            <input
              type="text"
              placeholder="Digite um número"
              value={inputValues.n2}
              onChange={(e) => handleInputChange('n2', e.target.value)}
            />
          </div>
          <div className="number_2">
            <input
              type="text"
              placeholder="Digite um número"
              value={inputValues.n3}
              onChange={(e) => handleInputChange('n3', e.target.value)}
            />
            <input type="text" disabled value={inputValues.n4} readOnly />
          </div>
        </div>
        <div>
          <button onClick={calcularRegraDeTres}>Calcular</button>
        </div>
      </div>
    </div>
  );
};

export default RegraDeTres;

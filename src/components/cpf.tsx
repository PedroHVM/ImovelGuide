import React, { useState } from 'react';
import '../Style/content.css';

const Cpf = () => {
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');

  const formatCpf = (inputCpf) => {
    const numericCpf = inputCpf.replace(/\D/g, '');
    const formattedCpf = numericCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return formattedCpf;
  };

  const formatTelefone = (inputTelefone) => {
    const numericTelefone = inputTelefone.replace(/\D/g, '');
    const formattedTelefone = numericTelefone.replace(
      /(\d{2})(\d{5})(\d{4})/,
      '($1) $2-$3'
    );
    return formattedTelefone;
  };

  const handleCpfChange = (event) => {
    const inputCpf = event.target.value;
    const numericCpf = inputCpf.replace(/\D/g, '');

    if (numericCpf.length <= 11) {
      const formattedCpf = formatCpf(numericCpf);
      setCpf(formattedCpf);
    }
  };

  const handleTelefoneChange = (event) => {
    const inputTelefone = event.target.value;
    const numericTelefone = inputTelefone.replace(/\D/g, '');

    if (numericTelefone.length <= 11) {
      const formattedTelefone = formatTelefone(numericTelefone);
      setTelefone(formattedTelefone);
    }
  };

  const handleEnviarMensagemClick = () => {
   
    alert('Mensagem enviada!');
  };

  return (
    <div className="container">
      <span>2</span>
      <div className="options">
        <h1>Mande uma mensagem:</h1>
        <input
          type="text"
          placeholder="Digite seu CPF"
          value={cpf}
          onChange={handleCpfChange}
        />
        <input
          type="tel"
          placeholder="Digite seu telefone"
          value={telefone}
          onChange={handleTelefoneChange}
        />
        <input type="text" placeholder="Digite o assunto" />
        <button onClick={handleEnviarMensagemClick}>Enviar Mensagem</button>
      </div>
    </div>
  );
};

export default Cpf;

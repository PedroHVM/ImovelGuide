import React, { useState } from 'react';
import '../Style/content.css';

const Phone = () => {
  const [mostrarTelefone1, setMostrarTelefone1] = useState(false);
  const [mostrarTelefone2, setMostrarTelefone2] = useState(false);
  const [telefone1, setTelefone1] = useState(null);
  const [telefone2, setTelefone2] = useState(null);

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
    if (!telefone1) {
      const novoTelefone = gerarNumeroAleatorio();
      setTelefone1(novoTelefone);
    }
    setMostrarTelefone1(true);
  };

  const handleClick2 = () => {
    if (!telefone2) {
      const novoTelefone = gerarNumeroAleatorio();
      setTelefone2(novoTelefone);
    }
    setMostrarTelefone2(true);
  };

  return (
    <div className="container">
      <span>1</span>
      <div className="box">
        <div className="profile">
          <img src="https://lh3.googleusercontent.com/pw/ADCreHd9idD-1WA3cIFsgxEOUE3BJ1Wqv3iL3POaJqrGTC6B2AjVN4sQ8CIE5WV_9OIAcgDlvp6clH4fwVRUkyw0KTmjMq6HuLFjmt9Z09BFXhq2uCqxhkCjEHIpHbj4jlgprIV5s1hnIHqB41tq19cuXvLz2Fq0QuE6BYnH9RtZ2MjQs5603KD31lXmINkOwgkowm9IxmYfcs_bBSXwIBLGzYtrrWi10sU1s7_TWdho4FbljC8GOwwmUGY7eqV2Xd0vZTd4PvqKNXs1SDJnrI_CWmPvr8lrStpoS80aXuHrfaqOYfoL-VrqudKz74JlnDuSfn8oMKeXJ11Va-tYYCDfk8zijXC17Oxr61zhEpxyCKzXvBMsSs7nxRjS6_SgKRvBoG1cu3UElFeubYmtmbm2CkbYTsTgpZh9vLghP3y3lhKlsKHAx-W4BLdF8PR8jKoBqw7-X5SNNfBE91X5SFACDlxx25og_DsMiRxs4EEwSc-S8XvF5G1vOorxxDpxcidOx3E_kyWKoAmV2wCHGPPtfU045STLQr7EoddygCwOocW-BM9QRhkdAvjH5dH5cI8GU7eraUryVAWr5aho7ZhmSLCsMpNhFf_hQhyOTiPC-EP0y2RC-U05pxE4KQhsCUHGFi0B3gnsBoyrDXnjEKSTuiijy-597LFnErU3CWXMc0HL5NQvfLUMo9Sxs8tapUVD7mtZgfNSuGAi1gEtY3Rz_CS6JPCSqeFScVXd6DTqfdUbtgQF_y5cN0al2WrD8826tm1J8jg6eetVdWLzydG94y2q3zoFm68RZzv90dbKk1V0ay0TnMeMgVVLBrPwg_W0Q64pUzQh3nmon4anojMHtaxDReeDBpGqN9IXbkhg5PbRY4JxdcO8GwJtW_Wjtbrr0LJDMhwPbHLN2FyL7tby6g=w223-h221-s-no?authuser=0" alt="Imagem de um corretor" />
          <ul>
            <h1>Pedro Malheiros</h1>
            <li>3.000 pontos</li>
            <a href="#" onClick={handleClick1}>
              {mostrarTelefone1 ? formatarTelefone(telefone1) : 'Ver telefone'}
            </a>
          </ul>
        </div>
        <div className="profile">
          <img src="https://lh3.googleusercontent.com/pw/ADCreHe1JH-w_atkJQRvGWb_M_XgR0KWhdPZSl3G37onQHN8z-nOQr45sA3AFFY8J3p8p6qXSl789Qsx6zyfQdc37y_z4PoAhI3uv8G4anuuncHrl3MvZv-sARJBP87fw2Gs773J2Z9P4ckCnStm-pwn1KNugkfI0nvx88IQnUL2joybIuH3nds_AR3MOAYdEjHfjoSQEamVmj2uxNp3XKdGtYjLOiKDVkAKz9se6WjLMqFEGaJ3vzTTlLWiOFNdLqn2R1K0LoiIERhkPW0Xa1YiR2iXCb6iWahotUt8Qm8R4kKf8qieihfVXKenRxtoQql4gfqIh1uJoLnPqTeduuHra74z55gVyw-JchMZpmDeBxux5qGvtyHlyBeqxg0lJ6lVT4MrTFEL1y5R3Rz043cKiD-jis8TadZzhVbnxB3SMMiUsZDHrK_yxZZjGzZ5G9iNjCE7huN1H7T37yvI2jEC4ifOoUodqreUNqm4fnja4RZUDLkAWb1TXusgBbRfgqsxKBsOINfvtLjj928AUVP5VrATox61Z4Y6YT37yEvz3N1E8u7tx5h05rqG34sQizn_eTBeLgqVnFvwslqpR_cM2PRUKtHRo_mRHZ_teZZgRzhrIyUu_1Us36OfRONU-aWueqj4U2fdR51jujtJiXFHzNpjw1AA70i4ms8vnIiSr3oDsSCK5-WzciIpBxT4dN_7lJv_XV1_OV7Snwx7jvhx2ftmTc2AYu54EtZ_ewixhee8yQeRJMcqddOJ47ubWfW9-BQcKHDuSF2SeKwoP9Fx73yfJ_KfKkjtptOdqk6hodKVbvX4ZZJ0wyvupQ2Zio7NlckpCo-N9ABAmzF68XGDLaSd-JqL5AHutffNRJb45RMmgP3dW9bZyavka2dBvLS4tM1vinkRssJRKqU-mGCDYg=w221-h223-s-no?authuser=0" alt="Imagem de um corretor" />
          <ul>
            <h1>Lorena Paiva</h1>
            <li>1.260 pontos</li>
            <a href="#" onClick={handleClick2}>
              {mostrarTelefone2 ? formatarTelefone(telefone2) : 'Ver telefone'}
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Phone;

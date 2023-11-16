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
          <img src="https://lh3.googleusercontent.com/pw/ADCreHf-GPYHv94Js4X1hCEro88Pjn0uTmbX04hyuFgN4nZaa8A3l1gfuoiLGvQBNPeqx7bh5_J-Jl6VFLjofCWolYdbXomYJnv41lio4Fc2dmzthR-bWtCFI85RLGBl1IbG89pTK6Zgp2dW8MPomDhKAUSLfpxEK9Y-d8pfnYSULFAcgXfq5XzWn4hwWUN36v-64XibAD3SSeK6Xc1lxMgbslNtuoZ6acLOWmKE5Ix6GU0IDlZoKgp-HX9runj6-oagaHlIkjcGfYsaYBSSGLOYlB21ES9PMydo3INPIel9sLN39DZbKbzWBeD8vU7x0Q1QZHZlm2VU7nXtRgEwioSMZ3auyhbMbmce_RqtLtZMhQ9ijYXy11OHn2R0VtxngowqOiODM8zefAU0GMDi-iwb0tZRMQeo2gkrw52zaL2k3uCzJ8jGJVZ3NzMjVhtQngj3mpAHHyrcOImQYotZJuyzhCGenHPITjDZzPAFjoHFj06Q7iaWFAaqftP7GIxBUs_mNdwYF5P7-63LZLDehDNZomDJRTI6ljv5nl7Em2MiFWzqxgTsSSghLZGb01QKL7xiDSizmvt4J1lPcanEHJC26ollNiVAJMw-YpW4lluxZpw2XO0cxlsSvt1ENYpR7lk1d-rRUWrDNa9yOKUApjQ3L0GhO2K1M5Mynw9GuwLG4Zc1_ecIf0Sh7Pli4H7Dkdi9pLwzDwwXcihoEWEt6lWP3V2tLtU3Kh50YN1TuJnvWfEYWJizvYic83xosjVjPf44BlaVMTcGa8TONmSkdpRjHkwP3Pm_yQ0qgTDvtBU0arfARhNXoN_YI3NrIJYa2PGydgOC3-hEWwC1KDnPHOeK7lSgWDbKIlUUa04mXJQSlYhPcGLt2X2v254HMRc3FypAKaRFR7wpbRWEZjZwrJQOwg=w223-h221-s-no?authuser=0" alt="Imagem de um corretor" />
          <ul>
            <h1>Pedro Malheiros</h1>
            <li>3.000 pontos</li>
            <a href="#" onClick={handleClick1}>
              {mostrarTelefone1 ? formatarTelefone(telefone1) : 'Ver telefone'}
            </a>
          </ul>
        </div>
        <div className="profile">
          <img src="https://lh3.googleusercontent.com/pw/ADCreHcJZ_kFp35zP0-DKXSZ_bNW5ATKwfcCsA-o96faR3nJ544gfjMG_7rnaYXdWNlTtyGHQjLKQG2GNr2XpwSfzMpqn5px2H-yJVwWejOLTfjQmh2RinMG13TR0WFRZyjV_YeTXpa3TygLi80mF02T7GhlpwmcNP6Y9_yO6Vy6blv-euEGlQMuSgXr7MKhi3tmXgBGeRCuhhkZ918U5eHNP8qS1QHZUJKaH-Rsut-fzYTZAd4ZIYNiK6v2YVtQ-i-07Gazy2HwRJ00nBeGAsM-rwIin22RP-mmdSGBPRCil8TpahTwgAS9zlGolRLGHU3Bgx8plLIEmfgfg4_1FpuLcNLY6z4ZiO8PI2oqi7wak1sisfrj_HzRepkEGhs8eXkGj57V9XL9ESWt3XfSDP4KarRisrdzT7qTo4efRPR5-4xdUcWCqBc8c2oUt7zcWpyOE18_WVtECIUbDOzhBVyq2TcnaGsP0SsEK36z3Fl3f4A44aCwj1B_imyClgAL9b65a-jXr5hkcWUQCMD4WNYAt6RUjrKc48sY0f7nt95s0vh6WRJPbqoa2lJ_I4mMn-78jzEbLSPCOeDTc_WRk3aTVOe7kELktMyVwxm6HCwfaR1k9CnLOdACx6ooz8q5bOMyyTOrZOO9ryWv_jspcnN5UX8kjQ8XczfWaajIQkP080b4lJ-g5o-PeXQpPFPYSjq_kwoVJpJ-svncyc14zGvKPGvZPG2uiBEPLTCU3-8lI4UGT7pQJ51_HQQFYvB23o2wxrnBsdY2AWnp_d-r9UCTonErukMcZM8nbbPgRDOb7P4BoPU8HTjHm6KNXGYGA6yndwMuwb_2L0L5MeiCmhBittfGRG99wcF1hdLctdNOihNIFHfU0UIq5qoSFnXG1ogfDDjB-3JC0NMOQ3X9wKBulQ=w221-h223-s-no?authuser=0" alt="Imagem de um corretor" />
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

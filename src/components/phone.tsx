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
          <img src="https://lh3.googleusercontent.com/pw/ADCreHdvxdLP-9CLvWt38b64Vubz-buuiBUYukWO8zph44H5W3rEZHGov0oGmbzEbug3Db8_fG4jJ8lTjBuEqQjsFQypS6vgYAE1nNO-aNRCyI_FtSZKdtsvnR5v9sRQwM_JKhpjwNQ6w3Ob4XBGDqiZkyHEX6g62qjXvd8xmibj-nLJnSr2matRqCOfmevEkKmmCcDTucf0D0RPLRgVPuWhT3mg31au9mRQFqyDejryPwXlCm3GXjsrTunhpp64vOehWem7DYaYemIgkhmvtrSg5i9lS3lwoaaNuIVLtipZZrxEWGFlD4MFqGqy385LuU9ItYy8qsth-X9pyD_bbG_Q8lZHyRk4MDo0txbQzMJEDVevco1zovvG5Hxepxa23UJaYxQlkG1fOAXUvuxbB0ofb5l8XZzVWCHySBpwnKtucnv0mAJSvscYRl6UHELuYnDBgdrDjbxOsRQj00byR0p2EqlVjvkEK7T0LmS03Iq0f05L0geBwEzbY5wviBhzeeD8LgLE1NDgH6da_MkdKB-XgyPDhfOEDQpwAX3y0s9IfEGSoqk5JGf4goLMFkLhQpvcFpQLW97yQ0RoMLWDodo4p0wzhnsfXASxEaAlThy7ZRgrajL3RgQ1NtJ-HKAr_tdQM5iJURnpx1GWXRe6UqfyjRJQzTYHVgE4erGIIdB7WJMiW8fZg2rxGYMaoVIcIxQ3TigQwIv1bWWjnbcYqy-0MziVwO7tTNcB4qEcD33nRzmAxB0-kMGT8faolzDqphSkVvOr-peC8ssV_DdPjNrAV6vjs2xUuqzO_-eTghHKSe8oEN0zTbpHdxj0WWIlW3B0GyotVP7vU51YTanY-_hnUV7AB-aUJZkta4959WcgE8G5J--V2XE8oHNbo3THrCAVcNkatQWcy4KdGKLuHyiv7g=w223-h221-s-no?authuser=0" alt="Imagem de um corretor" />
          <ul>
            <h1>Pedro Malheiros</h1>
            <li>3.000 pontos</li>
            <a href="#" onClick={handleClick1}>
              {mostrarTelefone1 ? formatarTelefone(telefone1) : 'Ver telefone'}
            </a>
          </ul>
        </div>
        <div className="profile">
          <img src="https://lh3.googleusercontent.com/pw/ADCreHd9NJmCNNm3kOAPcnm5_3IcPOOXoUVVYPDIUOswD0SRNOcEi2zGWK1sGNy2_7U0ornsxGtuEWBcqkA_zuzvonOzqw1PY8gu8-hva1Yb1lnuAnqZQfNEB7XzeO3rf1Wu47u_RbC8gtaprQ3TZupFenkgGLCvhKyOk-ejZiVSxlfaGtRFZ_HxAAxgEG8LWxyloi0fZTJPrQqmgoc-7_3mzpjEVp6GAo9TcKoUNs1sWew-LnfFtS0Z1gMzpiQGZo5YC8PFcSu7DeoHxskV8BHoblhLPKVfPT3jDxP94FYkgU23udHf-h4sbbmt7J0Th47auLoxtNsjmCXYVDyqBmmiIJVWCIGcyr7Pmd7fOqlnJZBo6BSO88kMQJ7J2l7rNBnjjvDgytd1TjUGua6FeE7nCtbcO02vqnvPCmAwWupnlFNwmWXFw0BNrDkMBj1QAeE9oOPunAxp_slega0KSZUDokgaa-VBME-fwtLEm-kQ_T8r5EYZHZbaD-b7w4EtXud8Grdnf9X0xqDi24yYatN3dzr0UKbWi8u6hTOJR0Uz-GN1o3FGd1Nnb96psT-URBSTeszaylHowndQFGWEF64rFXG79KXkKNQXgDIJlRDeNJBSB-673I2VIVKN-lQItjw8Ezyeksx8Pz1Zx64kHxvoXuogmmZBdE9-MQrnQz4XsQeLU226AbFCqMl20WLlFsEK0MxrHRjO_XXZhbbRs6A69vD2u3KvTwRGx1EyYcFJsoT1icBiBsNAN-X9854S-LLDvc3QB_TWsbyMM5IX9BZ8N4AKC8o1QN5yHLV4ouNfqOgIM3SaozTn35_8mVQD6l084KfKGXJsoywR-7UPUKkMVk7RKvM-iSt1CG_6rSEl8GTZnPUKELIIG6tzFdO01bSKFpjhGWpGtmd9lGPi-jJMgA=w221-h223-s-no?authuser=0" alt="Imagem de um corretor" />
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

import React, { useState } from 'react';
import '../Style/Header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={`header ${showMenu ? 'mobile-menu' : ''}`}>
      <div className='navigate'>
        <img src="https://photos.google.com/photo/AF1QipNIC7Ll_DvNKiu2Oz2KmCnlP2itzSQqCxXWYwQC" alt="Imovel guide logo" />
        <h2 className='logo'>IMÓVEL <br /> GUIDE </h2>
        <nav className={`desktop-menu ${showMenu ? 'hidden' : ''}`}>
          <ul className='options_list'>
            <li>Condomínios</li>
            <li>Forúm</li>
            <li>Guia</li>
            <li>Artigos</li>
            <li>Ferramentas</li>
          </ul>
        </nav>
      </div>
      <div className='navigate'>
        <nav className={`desktop-menu ${showMenu ? 'hidden' : ''}`}>
          <ul className='options_list'>
            <li>Cotar imóvel</li>
            <li>Planos</li>
            <li>Entrar</li>
            <button>Cadastre-se</button>
          </ul>
        </nav>
        <div className='mobile-menu-icon' onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import '../Style/Header.css'



const Header = () => {
    return (
        <header className='header'>
            <div className='navigate'>
                    <img src="/src/images/ImoGuide_logomarca.png" alt="Imovel guide logo" />
                    <h2 className='logo'>IMÓVEL <br /> GUIDE </h2>
                <nav>
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
                <nav>
                    <ul className='options_list'>
                        <li>Cotar imóvel</li>
                        <li>Planos</li>
                        <li>Entrar</li>
                        <button>Cadastre-se</button>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

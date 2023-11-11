import React from 'react';
import '../Style/Footer.css'



const Footer = () => {
    return (
        <footer className='footer'>
            <div className='navigation'>
                <nav>
                    <ul>
                        <li>Termos</li>
                        <li>Contatos</li>
                        <li>Sobre</li>
                    </ul>
                </nav>
            </div>
            <div className='navigation'>
                <span>© Copyright 2022. Todos os direitos reservados.</span>

                <img src="/src/images/ImoGuide_logomarca.png" alt="Imovel guide logo" />
                <h2 className='logo'>IMÓVEL <br /> GUIDE </h2>
            </div>
        </footer>
    );
};

export default Footer;
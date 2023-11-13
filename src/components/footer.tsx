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

                <img src="https://imovelguide.com.br/images/logo-imovel-guide.png" alt="Imovel guide logo" />
                
            </div>
        </footer>
    );
};

export default Footer;
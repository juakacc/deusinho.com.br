import React from 'react';

import Facebook from '../../../img/social/facebook.svg';
import Instagram from '../../../img/social/instagram.svg';
import YouTube from '../../../img/social/youtube.svg';
import Whatsapp from '../../../img/social/whatsapp.svg';

import './styles.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid-8">
          <h3 className="footer-sub-title">Fale com o Deusinho</h3>
          <a href="https://api.whatsapp.com/send?phone=5583994005530" target="_blank" className="whats" rel="noreferrer">
            <img src={Whatsapp} alt="Link para o Whatsapp" />
          </a>
        </div>

        <div className="grid-8">
          <h3 className="footer-sub-title">Redes Sociais</h3>
          <ul className="footer-redes-sociais">
            <li>
              <a href="https://facebook.com/deusinhoolivedos" target="_blank" rel="noreferrer">
                <img src={Facebook} alt="Link para o Facebook" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/deusinhoolivedos" target="_blank" rel="noreferrer">
                <img src={Instagram} alt="Link para o Instagram" />
              </a>
            </li>
            <li>
              <a href="https://youtube.com/deusinho" target="_blank" rel="noreferrer">
                <img src={YouTube} alt="Link para o Youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <p className="direitos">© Deusinho 2020 - Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;

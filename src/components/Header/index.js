import React from 'react';

import Logo from '../../img/logo.svg';

import './styles.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="grid-3 logo">
          <img src={Logo} alt="Logo do Deusinho" />
        </a>

        <nav className="grid-13 menus">
          <ul>
            <li><a href="/sobre-mim">Sobre mim</a></li>
            <li><a href="/#askme">Pergunte</a></li>
            <li><a href="/plano-de-governo">Plano de Governo</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

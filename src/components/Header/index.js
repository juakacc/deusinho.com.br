import React from 'react';

import Logo from '../../img/logo.svg';

import './styles.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="grid-4 logo">
          <img src={Logo} alt="Logo do Deusinho" />
        </a>

        <nav className="grid-12 menus">
          <ul>
            <li><a href="/sobre-mim">Sobre mim</a></li>
            <li><a href="/#askme">Pergunte</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

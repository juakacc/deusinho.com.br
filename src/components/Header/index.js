import React from 'react';

import './styles.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="grid-4">
          <a href="/">Blog do Deusinho</a>
        </h1>

        <nav className="grid-10 menus">
          <ul>
            <li><a href="/sobre-mim">Sobre mim</a></li>
            <li><a href="/pergunte">Pergunte</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

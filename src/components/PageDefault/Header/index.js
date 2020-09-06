import React from 'react';
import { Link } from 'gatsby';

import Logo from '../../../img/logo.svg';

import './styles.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="grid-3 logo">
          <img src={Logo} alt="Logo do Deusinho" />
        </Link>

        <nav className="grid-13 menus">
          <ul>
            <li><Link to="/sobre-mim">Sobre mim</Link></li>
            <li><Link to="/#askme">Pergunte</Link></li>
            <li><Link to="/plano-de-governo">Plano de Governo</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

import React from 'react';

import PageDefault from '../../components/PageDefault';

import './styles.css';

import NotFoundImage from '../../img/404.svg';

export default function NotFound() {
  return (
    <PageDefault>
      <div className="container not-found">
        <h2 className="sub-title">404 - Página não encontrada</h2>

        <div className="grid-4">
          <img src={NotFoundImage} alt="Página não encontrada" />
        </div>
        <div className="grid-12">
          <p>Desculpe, essa página não foi encontrada, verifique o endereço e tente novamente.</p>
        </div>
      </div>
    </PageDefault>
  );
}

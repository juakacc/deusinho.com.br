import React from 'react';

import PageDefault from '../components/PageDefault';

import '../css/normalize.css';
import '../css/reset.css';
import '../css/grid.css';
import '../css/styles.css';

export default function Home() {
  return (
    <PageDefault>
      <div className="container">
        <p>Seja bem-vindo ao meu Blog, é um prazer ter-lo aqui;</p>
      </div>
    </PageDefault>
  );
}

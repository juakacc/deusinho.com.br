import React from 'react';

import PageDefault from '../../components/PageDefault';

import './styles.css';

function PlanoDeGoverno() {
  return (
    <PageDefault>
      <div className="plane-cover" />

      <div className="container">
        <h2 className="sub-title">Plano de Governo</h2>
      </div>

      <div className="container">
        <div className="grid-16">
          <p>
            Aqui serão listadas algumas de nossas proposta para Olivêdos
            continuar no caminho certo.
          </p>
          <p>
            O que você acha que é essencial para uma Olivêdos melhor?
            Não deixe de comentar comigo!!
          </p>
        </div>
      </div>
    </PageDefault>
  );
}

export default PlanoDeGoverno;

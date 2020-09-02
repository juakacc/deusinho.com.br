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

          <h3>Ajude a construir um plano de governo melhor ainda</h3>
        </div>

        <form name="plan" method="post" data-netlify="true" className="form-default">
          <div>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" />
          </div>

          <div>
            <label htmlFor="name">Área</label>
            <input type="text" id="area" placeholder="Educação, Saúde..." />
          </div>

          <div>
            <label htmlFor="question">Sugestão *</label>
            <textarea id="question" required />
          </div>

          <button type="submit" className="btn">Enviar</button>
        </form>
      </div>
    </PageDefault>
  );
}

export default PlanoDeGoverno;

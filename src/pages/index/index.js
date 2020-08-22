import React from 'react';

import Facebook from '../../img/social/facebook.svg';
import Instagram from '../../img/social/instagram.svg';
import YouTube from '../../img/social/youtube.svg';

import PageDefault from '../../components/PageDefault';
import QuestionsImg from '../../img/perguntas-frequentes.svg';

import '../../css/normalize.css';
import '../../css/reset.css';
import '../../css/grid.css';
import '../../css/styles.css';

import './styles.css';
import Question from '../../components/Question';

export default function Home() {
  return (
    <PageDefault>
      <div className="container">
        <div className="introduction">
          <p>Seja bem-vindo ao meu Blog, é um enorme prazer tê-lo aqui.</p>
          <p>Este é um espaço livre para você expressar a sua opinião.</p>
          <p>Conheça um pouco sobre mim, vamos juntos debater ideias.</p>
        </div>
      </div>

      <div className="container">
        <h2 className="sub-title">Pergunte ao Deusinho</h2>
        <p>Não deixe de perguntar, vou tentar responder o mais rápido possível.</p>

        <form method="post" className="form-question grid-8">
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" />

          <label htmlFor="question">Sua pergunta *</label>
          <textarea id="question" />

          <button type="submit" className="btn">Perguntar</button>
        </form>

        <div className="grid-8 form-image">
          <img src={QuestionsImg} alt="Balões de diálogo" />
        </div>
      </div>

      <div className="container">
        <h2 className="sub-title">Perguntas já respondidas</h2>
        <p>Perguntas de outras pessoas que já foram respondidas, pode ser que te ajude.</p>

        <ul>
          <Question />
          <Question />
          <Question />
          <Question />
        </ul>
      </div>

      <div className="container redes-sociais">
        <h2 className="sub-title">Deusinho nas Redes Sociais</h2>

        <p>Me acompanhe nas redes sociais e conheça mais sobre o meu dia-a-dia</p>

        <ul>
          <li className="grid-1-3">
            <a href="https://facebook.com/deusinhoolivedos" target="_blank" rel="noreferrer">
              <img src={Facebook} alt="Link para o Facebook" />
              <p>Facebook</p>
            </a>
          </li>
          <li className="grid-1-3">
            <a href="https://instagram.com/deusinhoolivedos" target="_blank" rel="noreferrer">
              <img src={Instagram} alt="Link para o Instagram" />
              <p>Instagram</p>
            </a>
          </li>
          <li className="grid-1-3">
            <a href="https://youtube.com/deusinho" target="_blank" rel="noreferrer">
              <img src={YouTube} alt="Link para o Youtube" />
              <p>Youtube</p>
            </a>
          </li>
        </ul>

      </div>
    </PageDefault>
  );
}

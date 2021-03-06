import React from 'react';

import PerfilDeusinho from '../../img/perfil_deusinho.jpg';
import Facebook from '../../img/social/facebook.svg';
import Instagram from '../../img/social/instagram.svg';
import YouTube from '../../img/social/youtube.svg';

import PageDefault from '../../components/PageDefault';
import QuestionsImg from '../../img/perguntas-frequentes.svg';
import Responses from '../../components/Responses';

import './styles.css';
import AskForm from '../../components/AskForm';

export default function Home() {
  return (
    <PageDefault>
      <div className="home-cover" />
      <div className="introduction">
        <div className="container">
          <div className="grid-6 profile-photo">
            <img src={PerfilDeusinho} alt="Foto do Deusinho" />
          </div>
          <div className="grid-10">
            <h1>Oi, eu sou o Deusinho!</h1>
            <p>
              Seja bem-vindo ao meu Blog, é um enorme prazer tê-lo aqui.
              Este é um espaço livre para você expressar a sua opinião.
            </p>
            <p>Conheça um pouco sobre mim, vamos juntos debater ideias.</p>
            <p>
              Sou um orgulhoso filho olivedense. Fui vereador por 4 mandatos,
              sempre elaborando discussões para o bem estar da população. Atualmente
              sou prefeito do nosso amado município, mantendo sempre o lema do trabalho
              buscando ajudar os que mais necessitam.
            </p>
          </div>
        </div>
      </div>

      <div className="container ask" id="askme">
        <h2 className="sub-title">Pergunte ao Deusinho</h2>
        <p>Não deixe de perguntar, vou tentar responder o mais rápido possível.</p>

        <AskForm />

        <div className="grid-8 form-image">
          <img src={QuestionsImg} alt="Balões de diálogo" />
        </div>
      </div>

      <Responses />

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

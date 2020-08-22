import React from 'react';

import './styles.css';

function Question() {
  return (
    <li className="grid-8 question">
      <p>
        <span className="question-author">Joaquim Aníbal </span>
        perguntou há 13 horas atrás
      </p>
      <p className="question-question">Deusinho o que você pretende fazer pela saúde?</p>
      <p className="question-answer">Opa Joaquim, pretendo continuar investindo fortemente na saúde</p>
    </li>
  );
}

export default Question;

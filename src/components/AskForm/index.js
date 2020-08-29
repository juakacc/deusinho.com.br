import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

import './styles.css';

const SAVE_QUESTION = gql`
  mutation CreateQuestion(
    $name: String
    $question: String!
  ) {
    createQuestion(
      author: $name
      question: $question
    ) {
      id
    }
  }
`;

const AskForm = () => {
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');
  const [success, setSuccess] = useState(false);

  const [createQuestion] = useMutation(SAVE_QUESTION);

  const handleSubmit = (e) => {
    e.preventDefault();
    createQuestion({
      variables: {
        name,
        question,
      },
    })
      .then(({ data: { createQuestion: { id } } }) => {
        if (id) setSuccess(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="grid-8">
      { !success ? (
        <form method="post" className="form-question" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div>
            <label htmlFor="question">Sua pergunta *</label>
            <textarea id="question" value={question} onChange={(e) => setQuestion(e.target.value)} required />
          </div>

          <button type="submit" className="btn">Perguntar</button>
        </form>
      ) : (
        <div className="form-submit">
          <p>Pergunta enviada com sucesso, em breve ela será respondida, obrigado!</p>
          <a href="/" className="btn">Fazer outra pergunta</a>
        </div>
      )}
    </div>
  );
};

export default AskForm;

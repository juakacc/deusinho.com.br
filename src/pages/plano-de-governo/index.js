import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'gatsby';
import gql from 'graphql-tag';

import PageDefault from '../../components/PageDefault';

import PlanImage from '../../img/participe.svg';

import './styles.css';

const SAVE_SUGGESTION = gql`
  mutation CreateSuggestion(
    $name: String
    $field: String
    $suggestion: String!
  ) {
    createSuggestion(
      author: $name
      field: $field
      suggestion: $suggestion
    ) {
      id
    }
  }
`;

function PlanoDeGoverno() {
  const [name, setName] = useState('');
  const [field, setField] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [success, setSuccess] = useState(false);

  const [createSuggestion] = useMutation(SAVE_SUGGESTION);

  const handleSubmit = (e) => {
    e.preventDefault();
    createSuggestion({
      variables: {
        name,
        field,
        suggestion,
      },
    })
      .then(({ data: { createSuggestion: { id } } }) => {
        if (id) setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        console.log(name, field, suggestion);
      });
  };

  return (
    <PageDefault>
      <div className="plane-cover" />

      <div className="container">
        <h2 className="sub-title">Plano de Governo</h2>
      </div>

      <div className="container plan">
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
      </div>

      <div className="container">
        <div className="grid-8">
          { !success ? (
            <form method="post" className="form-default" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div>
                <label htmlFor="name">Área</label>
                <input type="text" id="area" placeholder="Educação, Saúde..." value={field} onChange={(e) => setField(e.target.value)} />
              </div>

              <div>
                <label htmlFor="question">Sugestão *</label>
                <textarea id="suggestion" required value={suggestion} onChange={(e) => setSuggestion(e.target.value)} />
              </div>

              <button type="submit" className="btn">Enviar</button>
            </form>
          ) : (
            <div className="form-submit-plan">
              <p>
                Sugestão enviada com sucesso, 
                muito obrigado pela contribuição para uma Olivêdos melhor!
              </p>
              <Link to="/plano-de-governo" className="btn">Enviar outra sugestão</Link>
            </div>
          )}
        </div>

        <div className="grid-8 form-image">
          <img src={PlanImage} alt="Participe do debate" />
        </div>
      </div>
    </PageDefault>
  );
}

export default PlanoDeGoverno;

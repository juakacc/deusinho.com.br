import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import Question from './Question';

import './styles.css';

const QUERY_QUESTIONS = gql`
  {
    questions {
      id
      author
      question
      createdAt
    }
  }
`;

const Responses = () => {
  const { loading, error, data } = useQuery(QUERY_QUESTIONS);

  return (
    <div className="container answers">
      <h2 className="sub-title">Perguntas já respondidas</h2>
      <p>Perguntas de outras pessoas que já foram respondidas, pode ser que te ajude.</p>

      {loading && <p className="without-question">Carregando perguntas...</p>}
      {error && <p className="without-question">Erro ao requisitar as perguntas, tente novamente mais tarde!</p>}

      {data && data.questions && (
        data.questions.length > 0 ? (
          <ul>
            {data.questions.map(({
              author, createdAt, question, id, reply,
            }) => (
              <Question
                id={id}
                author={author}
                createdAd={createdAt}
                question={question}
                reply={reply}
              />
            ))}
          </ul>
        ) : (
          <p className="without-question">Nenhuma pergunta registrada, seja o primeiro a perguntar!</p>
        )
      )}
    </div>
  );
};

export default Responses;

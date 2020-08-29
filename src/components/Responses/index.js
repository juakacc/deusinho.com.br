import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import Question from '../Question';

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

      {loading && <p>Loading...</p>}
      {error && <p>Ocorreu um erro ao requisitar as questões, tente novamente mais tarde!</p>}

      {data && data.questions && (
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
      )}
    </div>
  );
};

export default Responses;

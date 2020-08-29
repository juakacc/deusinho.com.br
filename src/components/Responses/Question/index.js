import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Question({
  id, author, createdAd, question, reply,
}) {
  return (
    <li className="grid-8 question" key={id}>
      <p>
        <span className="question-author">
          {author !== '' ? author : 'Anônimo(a)'}
          {' '}
        </span>
        perguntou há
        {' '}
        {createdAd}
      </p>
      <p className="question-question">{question}</p>
      <p className="question-answer">{reply}</p>
    </li>
  );
}

Question.defaultProps = {
  reply: '',
};

Question.propTypes = {
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  createdAd: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  reply: PropTypes.string,
};

export default Question;

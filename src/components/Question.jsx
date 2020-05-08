import React from 'react';

import useGlobalState from '../useGlobalState';

import { INDEX_QUESTION_LETTER } from '../utils/constants';

const Question = ({ question, position }) => {
  // Global States
  const [selectedQuestion, setSelectedQuestion] = useGlobalState('selectedQuestion');

  const isSelectedClassModifier = selectedQuestion === question.id ? 'question-card--selected' : '';

  const handleSelectQuestion = (event) => {
    const questionID = event.target.id;
    setSelectedQuestion(selectedQuestion === questionID ? null : questionID);
  };

  return (
    <button
      className={`question-card ${isSelectedClassModifier}`}
      id={question.id}
      onClick={handleSelectQuestion}
    >
      <span className="question-letter">{INDEX_QUESTION_LETTER[position]}</span>
      {question.question}
    </button>
  );
};

export default Question;

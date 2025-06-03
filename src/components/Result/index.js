import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Menu } from 'semantic-ui-react';

import Stats from './Stats';
import QNA from './QNA';

const Result = ({
  totalQuestions,
  correctAnswers,
  timeTaken,
  questionsAndAnswers,
  replayQuiz,
  resetQuiz,
}) => {
  const [activeTab, setActiveTab] = useState('Statystyki');

  const handleTabClick = (e, { name }) => {
    setActiveTab(name);
  };

  return (
    <Container>
      <Menu fluid widths={2}>
        <Menu.Item
          name="Statystyki"
          active={activeTab === 'Statystyki'}
          onClick={handleTabClick}
        />
        <Menu.Item
          name="Odpowiedzi"
          active={activeTab === 'Odpowiedzi'}
          onClick={handleTabClick}
        />
      </Menu>
      {activeTab === 'Statystyki' && (
        <Stats
          totalQuestions={totalQuestions}
          correctAnswers={correctAnswers}
          timeTaken={timeTaken}
          replayQuiz={replayQuiz}
          resetQuiz={resetQuiz}
        />
      )}
      {activeTab === 'Odpowiedzi' && <QNA questionsAndAnswers={questionsAndAnswers} />}
      <br />
    </Container>
  );
};

Result.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  timeTaken: PropTypes.number.isRequired,
  questionsAndAnswers: PropTypes.array.isRequired,
  replayQuiz: PropTypes.func.isRequired,
  resetQuiz: PropTypes.func.isRequired,
};

export default Result;

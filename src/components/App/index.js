import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../Layout';
import Loader from '../Loader';
import Main from '../Main';
import Quiz from '../Quiz';
import Result from '../Result';

import { shuffle } from '../../utils';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(null);
  const [data, setData] = useState(null);
  const [countdownTime, setCountdownTime] = useState(null);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [resultData, setResultData] = useState(null);

  const startQuiz = (data, countdownTime) => {
    setLoading(true);
    setLoadingMessage({
      title: 'Ładujemy Twój quiz...',
      message: "To nie potrwa długo!",
    });
    setCountdownTime(countdownTime);

    setTimeout(() => {
      setData(data);
      setIsQuizStarted(true);
      setLoading(false);
    }, 1000);
  };

  const endQuiz = resultData => {
    setLoading(true);
    setLoadingMessage({
      title: 'Pobieramy Twój wynik...',
      message: 'To nie potrwa długo!',
    });

    setTimeout(() => {
      setIsQuizStarted(false);
      setIsQuizCompleted(true);
      setResultData(resultData);
      setLoading(false);
    }, 2000);
  };

  const replayQuiz = () => {
    setLoading(true);
    setLoadingMessage({
      title: 'Przygotowujemy drugą rundę.',
      message: "To nie potrwa długo!",
    });

    const shuffledData = shuffle(data);
    shuffledData.forEach(element => {
      element.options = shuffle(element.options);
    });

    setData(shuffledData);

    setTimeout(() => {
      setIsQuizStarted(true);
      setIsQuizCompleted(false);
      setResultData(null);
      setLoading(false);
    }, 1000);
  };

  const resetQuiz = () => {
    setLoading(true);
    setLoadingMessage({
      title: 'Ładujemy ekran główny.',
      message: 'Dziękujemy za rozwiązanie!',
    });

    setTimeout(() => {
      setData(null);
      setCountdownTime(null);
      setIsQuizStarted(false);
      setIsQuizCompleted(false);
      setResultData(null);
      setLoading(false);
    }, 1000);
  };

  return (
    <Router basename="/quizzo">
      <Layout>
        {loading && <Loader {...loadingMessage} />}
        {!loading && !isQuizStarted && !isQuizCompleted && (
          <Main startQuiz={startQuiz} />
        )}
        {!loading && isQuizStarted && (
          <Quiz data={data} countdownTime={countdownTime} endQuiz={endQuiz} />
        )}
        {!loading && isQuizCompleted && (
          <Result {...resultData} replayQuiz={replayQuiz} resetQuiz={resetQuiz} />
        )}
      </Layout>
    </Router>
  );
};

export default App;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Segment,
  Item,
  Dropdown,
  Divider,
  Button,
  Message,
} from 'semantic-ui-react';

import mindImg from '../../images/mind.svg';

import {
  CATEGORIES,
  NUM_OF_QUESTIONS,
  DIFFICULTY,
  QUESTIONS_TYPE,
  COUNTDOWN_TIME,
  QUESTIONS
} from '../../constants';
import { shuffle } from '../../utils';

import Offline from '../Offline';

const Main = ({ startQuiz }) => {
  const [category, setCategory] = useState('0');
  const [numOfQuestions, setNumOfQuestions] = useState(5);
  const [difficulty, setDifficulty] = useState('0');
  const [questionsType, setQuestionsType] = useState('0');
  const [countdownTime, setCountdownTime] = useState({
    hours: 0,
    minutes: 120,
    seconds: 0,
  });
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [offline, setOffline] = useState(false);

  const handleTimeChange = (e, { name, value }) => {
    setCountdownTime({ ...countdownTime, [name]: value });
  };

  let allFieldsSelected = false;
  if (
    category &&
    numOfQuestions &&
    difficulty &&
    questionsType &&
    (countdownTime.hours || countdownTime.minutes || countdownTime.seconds)
  ) {
    allFieldsSelected = true;
  }

  const fetchData = () => {
    setProcessing(true);

    if (error) setError(null);


    function sample(arr, n) {
      const len = arr.length;
      if (n >= len) return [...arr].sort(() => Math.random() - 0.5); // full shuffle

      // Fisher-Yates shuffle until we’ve moved n items to the front
      const result = [...arr];           // clone so the original stays untouched
      for (let i = 0; i < n; i++) {
        const j = i + Math.floor(Math.random() * (len - i)); // random index ≥ i
        [result[i], result[j]] = [result[j], result[i]];     // swap
      }
      return result.slice(0, n);
    }

    
    let results = QUESTIONS.filter(item => {
        return (category == 0  || (category == 22  && item['category'] >= 16 && item['category'] <= 21) || item['category'] == category)
    });

    results = results.filter(item => {
      return difficulty == 0 || item['difficulty'] == difficulty
  });


    results = sample(results,numOfQuestions)
  

    
    results.forEach(element => {
      element.options = shuffle([
        element.correct_answer,
        ...element.incorrect_answers,
      ]);
    });
    setProcessing(false);
    startQuiz(
      results,
      countdownTime.hours + countdownTime.minutes + countdownTime.seconds
    );
  };

  if (offline) return <Offline />;

  return (
    <Container>
      <Segment>
        <Item.Group divided>
          <Item>
            <Item.Image src={mindImg} />
            <Item.Content>
              <Item.Header>
                <h1>Zrób sobie test</h1>
              </Item.Header>
              {error && (
                <Message error onDismiss={() => setError(null)}>
                  <Message.Header>Błąd!</Message.Header>
                  {error.message}
                </Message>
              )}
              <Divider />
              <Item.Meta>
                <p>Wybierz kategorię pytań (Pytania oznaczone [TEST] pochodzą z testów przedmiotowych)</p>
                <Dropdown
                  fluid
                  selection
                  name="category"
                  placeholder="Kategoria pytań"
                  header="Wybierz kategorię pytań"
                  options={CATEGORIES}
                  value={category}
                  onChange={(e, { value }) => setCategory(value)}
                  disabled={processing}
                />
                <br />
                <p>Ile pytań ma mieć Twój quiz?</p>
                <Dropdown
                  fluid
                  selection
                  name="numOfQ"
                  placeholder="Liczba pytań"
                  header="Wybierz liczbę pytań"
                  options={NUM_OF_QUESTIONS}
                  value={numOfQuestions}
                  onChange={(e, { value }) => setNumOfQuestions(value)}
                  disabled={processing}
                />
                <br />
                <p>Jaki poziom trudności ma mieć Twój quiz?</p>
                <Dropdown
                  fluid
                  selection
                  name="difficulty"
                  placeholder="Wybierz poziom trudności"
                  header="Wybierz poziom trudności"
                  options={DIFFICULTY}
                  value={difficulty}
                  onChange={(e, { value }) => setDifficulty(value)}
                  disabled={processing}
                />
                <br />
                <p>Jaki typ pytań ma mieć Twój quiz?</p>
                <Dropdown
                  fluid
                  selection
                  name="type"
                  placeholder="Wybierz typ pytań"
                  header="Wybierz typ pytań"
                  options={QUESTIONS_TYPE}
                  value={questionsType}
                  onChange={(e, { value }) => setQuestionsType(value)}
                  disabled={processing}
                />
                <br />
                <p>Wybierz czas na rozwiązanie quizu.</p>
                <Dropdown
                  search
                  selection
                  name="hours"
                  placeholder="Wybierz liczbę godzin"
                  header="Wybierz liczbę godzin"
                  options={COUNTDOWN_TIME.hours}
                  value={countdownTime.hours}
                  onChange={handleTimeChange}
                  disabled={processing}
                />
                <Dropdown
                  search
                  selection
                  name="minutes"
                  placeholder="Wybierz liczbę minut"
                  header="Wybierz liczbę minut"
                  options={COUNTDOWN_TIME.minutes}
                  value={countdownTime.minutes}
                  onChange={handleTimeChange}
                  disabled={processing}
                />
                <Dropdown
                  search
                  selection
                  name="seconds"
                  placeholder="Wybierz liczbę sekund"
                  header="Wybierz liczbę sekund"
                  options={COUNTDOWN_TIME.seconds}
                  value={countdownTime.seconds}
                  onChange={handleTimeChange}
                  disabled={processing}
                />
              </Item.Meta>
              <Divider />
              <Item.Extra>
                <Button
                  primary
                  size="big"
                  icon="play"
                  labelPosition="left"
                  content={processing ? 'Przetwarzanie...' : 'Rozpocznij'}
                  onClick={fetchData}
                  disabled={!allFieldsSelected || processing}
                />
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <br />
    </Container>
  );
};

Main.propTypes = {
  startQuiz: PropTypes.func.isRequired,
};

export default Main;

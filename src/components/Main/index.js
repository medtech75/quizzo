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
} from '../../constants';
import { shuffle } from '../../utils';

import Offline from '../Offline';

const Main = ({ startQuiz }) => {
  const [category, setCategory] = useState('0');
  const [numOfQuestions, setNumOfQuestions] = useState(5);
  const [difficulty, setDifficulty] = useState('easy');
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

    const API = `https://raw.githubusercontent.com/medtech75/json/refs/heads/main/qq.json?token=GHSAT0AAAAAADEMAISBHDFSGMIU3BVWY33S2BPUQRA&amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}&type=${questionsType}`;

    let results = [
          {
              "type": "multiple",
              "difficulty": "easy",
              "category": "Science &amp; Nature",
              "question": "Stars consist mainly of hydrogen and which other gas?",
              "correct_answer": "Helium",
              "incorrect_answers": [
                  "Oxygen",
                  "Argon",
                  "Nitrogen"
              ]
          },
          {
              "type": "multiple",
              "difficulty": "easy",
              "category": "Entertainment: Video Games",
              "question": "Which of these video game engines was made by the company Epic Games?",
              "correct_answer": "Unreal",
              "incorrect_answers": [
                  "Unity",
                  "Game Maker: Studio",
                  "Cry Engine"
              ]
          },
          {
              "type": "multiple",
              "difficulty": "easy",
              "category": "Entertainment: Music",
              "question": "Who is the lead singer of Foo Fighters?",
              "correct_answer": "Dave Grohl",
              "incorrect_answers": [
                  "Dave Mustaine",
                  "James Hetfield",
                  "Little Red Riding Hood"
              ]
          },
          {
              "type": "multiple",
              "difficulty": "easy",
              "category": "Entertainment: Music",
              "question": "Which song on Daft Punk&#039;s &quot;Random Access Memories&quot; features Pharrell Williams?",
              "correct_answer": "Get Lucky",
              "incorrect_answers": [
                  "Doin&#039; It Right",
                  "Instant Crush",
                  "The Game of Love"
              ]
          },
          {
              "type": "multiple",
              "difficulty": "easy",
              "category": "Entertainment: Video Games",
              "question": "Which of the following was NOT a playable character in the game Kingdom Hearts: Birth by Sleep?",
              "correct_answer": "Ignis",
              "incorrect_answers": [
                  "Ventus",
                  "Terra",
                  "Aqua"
              ]
          }
      ];
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
    // fetch(API)
    //   .then(respone => respone.json())
    //   .then(data =>
    //     setTimeout(() => {
    //       const { response_code, results } = data;

    //       if (response_code === 1) {
    //         const message = (
    //           <p>
    //             The API doesn't have enough questions for your query. (Ex.
    //             Asking for 50 Questions in a Category that only has 20.)
    //             <br />
    //             <br />
    //             Please change the <strong>No. of Questions</strong>,{' '}
    //             <strong>Difficulty Level</strong>, or{' '}
    //             <strong>Type of Questions</strong>.
    //           </p>
    //         );

    //         setProcessing(false);
    //         setError({ message });

    //         return;
    //       }

          // results.forEach(element => {
          //   element.options = shuffle([
          //     element.correct_answer,
          //     ...element.incorrect_answers,
          //   ]);
          // });

    //       setProcessing(false);
    //       startQuiz(
    //         results,
    //         countdownTime.hours + countdownTime.minutes + countdownTime.seconds
    //       );
    //     }, 1000)
    //   )
    //   .catch(error =>
    //     setTimeout(() => {
    //       if (!navigator.onLine) {
    //         setOffline(true);
    //       } else {
    //         setProcessing(false);
    //         setError(error);
    //       }
    //     }, 1000)
    //   );
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
                <h1>The Ultimate Trivia Quiz</h1>
              </Item.Header>
              {error && (
                <Message error onDismiss={() => setError(null)}>
                  <Message.Header>Error!</Message.Header>
                  {error.message}
                </Message>
              )}
              <Divider />
              <Item.Meta>
                <p>In which category do you want to play the quiz?</p>
                <Dropdown
                  fluid
                  selection
                  name="category"
                  placeholder="Select Quiz Category"
                  header="Select Quiz Category"
                  options={CATEGORIES}
                  value={category}
                  onChange={(e, { value }) => setCategory(value)}
                  disabled={processing}
                />
                <br />
                <p>How many questions do you want in your quiz?</p>
                <Dropdown
                  fluid
                  selection
                  name="numOfQ"
                  placeholder="Select No. of Questions"
                  header="Select No. of Questions"
                  options={NUM_OF_QUESTIONS}
                  value={numOfQuestions}
                  onChange={(e, { value }) => setNumOfQuestions(value)}
                  disabled={processing}
                />
                <br />
                <p>How difficult do you want your quiz to be?</p>
                <Dropdown
                  fluid
                  selection
                  name="difficulty"
                  placeholder="Select Difficulty Level"
                  header="Select Difficulty Level"
                  options={DIFFICULTY}
                  value={difficulty}
                  onChange={(e, { value }) => setDifficulty(value)}
                  disabled={processing}
                />
                <br />
                <p>Which type of questions do you want in your quiz?</p>
                <Dropdown
                  fluid
                  selection
                  name="type"
                  placeholder="Select Questions Type"
                  header="Select Questions Type"
                  options={QUESTIONS_TYPE}
                  value={questionsType}
                  onChange={(e, { value }) => setQuestionsType(value)}
                  disabled={processing}
                />
                <br />
                <p>Please select the countdown time for your quiz.</p>
                <Dropdown
                  search
                  selection
                  name="hours"
                  placeholder="Select Hours"
                  header="Select Hours"
                  options={COUNTDOWN_TIME.hours}
                  value={countdownTime.hours}
                  onChange={handleTimeChange}
                  disabled={processing}
                />
                <Dropdown
                  search
                  selection
                  name="minutes"
                  placeholder="Select Minutes"
                  header="Select Minutes"
                  options={COUNTDOWN_TIME.minutes}
                  value={countdownTime.minutes}
                  onChange={handleTimeChange}
                  disabled={processing}
                />
                <Dropdown
                  search
                  selection
                  name="seconds"
                  placeholder="Select Seconds"
                  header="Select Seconds"
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
                  content={processing ? 'Processing...' : 'Play Now'}
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

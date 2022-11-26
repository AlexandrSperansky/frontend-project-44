#!/usr/bin/env node
import playGame from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  function getRandomInt(max = 25) {
    return Math.round(Math.random() * max);
  }
  const question = getRandomInt();
  const answer = isEvenNumber(question) ? 'yes' : 'no';
  return [question, answer];
};

const initGameEven = () => {
  playGame(rule, getQuestionAndAnswer);
};

initGameEven();
export default initGameEven;
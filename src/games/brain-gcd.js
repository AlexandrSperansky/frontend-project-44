import playGame from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const getRandomInt = (min = 1, max = 25) => Math.floor(Math.random() * (max - min) + min);
  const antirandom = getRandomInt(1, 3);
  const number1 = getRandomInt() * antirandom;
  const number2 = getRandomInt() * antirandom;
  let greatestNumber = number1;
  let minNumber = number2;
  if (number2 > number1) {
    greatestNumber = number2;
    minNumber = number1;
  }
  let answer;
  for (let i = 0; i < greatestNumber; i += i) {
    if (number1 % i === 0 && number2 % i === 0) {
      answer = `${i}`;
    }
    if (greatestNumber % minNumber === 0) {
      answer = `${minNumber}`;
    }
  }
  const question = `${number1} ${number2}`;

  return [question, answer];
};
const initGamegcd = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default initGamegcd;

import playGame from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomNum = (min = 2, max = 45) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (randomNumber) => {
  if (randomNumber <= 1) return false;
  for (let i = 2; i <= randomNumber / 2; i += i) {
    if (randomNumber % i === 0) return false;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const number = getRandomNum();
  const question = number;
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, answer];
};

const initGamePrime = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default initGamePrime;

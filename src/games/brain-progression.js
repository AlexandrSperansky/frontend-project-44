import playGame from '../index.js';

const getRandomNum = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const rule = 'What number is missing in the progression?';
const lengthProgression = getRandomNum(7, 11);

const getProgression = () => {
  const startProgression = getRandomNum();
  const stepOfProgression = getRandomNum(1, 10);
  const progression = [startProgression];
  let currentNumOfProgression = startProgression;
  for (let i = 1; i <= lengthProgression; i += 1) {
    currentNumOfProgression += stepOfProgression;
    progression.push(currentNumOfProgression);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const progression = getProgression();
  const indexOfHiddenNum = getRandomNum(0, lengthProgression - 1);
  const answer = String(progression[indexOfHiddenNum]);
  progression[indexOfHiddenNum] = '..';
  let question = '';
  for (let i = 0; i < progression.length; i += 1) {
    question += `${progression[i]} `;
  }
  return [question, answer];
};

const initGameProgression = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default initGameProgression;

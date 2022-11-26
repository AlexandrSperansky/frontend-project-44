import playGame from '../src/index.js';

const rule = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
    function getRandomInt(max = 15) {
      return Math.round(Math.random() * max);
    }
const operand1 = getRandomInt();
const operand2 = getRandomInt();


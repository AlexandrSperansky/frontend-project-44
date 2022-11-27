import playGame from "../index.js";

const rule = "What is the result of the expression?";
const operations = ["+", "-", "*"];
function getRandomInt(max = 15) {
  return Math.round(Math.random() * max);
}

const getQuestionAndAnswer = () => {
  const operand1 = getRandomInt();
  const operand2 = getRandomInt();
  const getRandomOperator = operations[Math.round(Math.random() * 2)];
  const question = `${operand1} ${getRandomOperator} ${operand2}`;
  let answer;
  if (getRandomOperator === "+") {
    answer = `${operand1 + operand2}`;
  } else if (getRandomOperator === "-") {
    answer = `${operand1 - operand2}`;
  } else if (getRandomOperator === "*") {
    answer = `${operand1 * operand2}`;
  }
  return [question, answer];
};
const initGameCalc = () => {
  playGame(rule, getQuestionAndAnswer);
};

initGameCalc();
export default initGameCalc;

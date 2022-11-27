const getRandomInt = (max = 25) => {
  return Math.round(Math.random() * max);
};
let number = getRandomInt();
console.log(number);
let cd;
const getCD = () => {
  for (let i = 0; i <= number; i++) {
    if (number % i === 0) {
      cd = i;
    }
  }
  return cd;
};
console.log(getCD());

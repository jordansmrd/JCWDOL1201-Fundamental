/** @format */

let result;

const hello = () => {
  greet("hello");
};

const arigatou = () => {
  greet("arigatou");
};

const greet = (str) => {
  result = str;
};

arigatou();
hello();
greet("hei");

console.log(result);

const calculator = (a, b) => a + b;
const displayer = (something) => console.log(something);

displayer("hello");
displayer(calculator(10, 5));
//callback merupakan sebuah function yang diletakan disebuah argument function

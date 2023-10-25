// mumltiple number
const multNumber = 9;

for (let i = 1; i <= 10; i++) {
  console.log(`${multNumber} x ${i}`);
}

// check if it is palindrome
const word = 'madam';

const charOfWord = word.split('');
const reversedWord = charOfWord.slice().reverse();

let isPalindrome = true;

for (let i = 0; i < charOfWord.length; i++) {
  if (charOfWord[i] !== reversedWord[i]) {
    isPalindrome = false;
    break;
  }
}

console.log(`${word} is ${isPalindrome ? 'palindrome' : 'not palindrome'}`);

// convert cm -> km
const cm = 100000;
const km = (cm / 100000).toFixed(2);

console.log(`${cm} cm -> ${km} km`);

// format number as currency (IDR)
const number = 1000;
const arrOfNumber = number.toString().split('');

const result = [];
let stringResult = '';
let counter = 0;

for (let i = arrOfNumber.length - 1; i >= 0; i--) {
  result.push(arrOfNumber[i]);
  if (++counter % 3 === 0) {
    result.push('.');
  }
}

result.reverse();
const idr = `Rp. ${result.join('')},00`;

console.log(`${number} -> ${idr}`);

// remove some string from sentence
const sentence = 'Hello World';
const searchString = 'ell';
const removedSentence = sentence.replace(searchString, '');

console.log(`${sentence}, ${searchString} -> ${removedSentence}`);

// reverse a string
const someString = 'hello';
const reversedString = someString.split('').reverse().join('');

console.log(`${someString} -> ${reversedString}`);

// swap the case of each chars
const beforeSwap = 'The QuiCk BrOwN Fox';
const arrOfWord = beforeSwap.split('');
const arrOfResult = [];

for (const char of arrOfWord) {
  arrOfResult.push(
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
  );
}

console.log(`${beforeSwap} -> ${arrOfResult.join('')}`);

// find largest number
const num1 = 42;
const num2 = 27;

console.log(`num1 ${num1}, num2 ${num2} -> ${num1 > num2 ? num1 : num2}`);

// sort three number
const number1 = 42;
const number2 = 27;
const number3 = 18;

const arrOf3Number = [number1, number2, number3];

console.log(
  `number1 ${number1}, number2 ${number2}, number3 ${number3} -> ${arrOf3Number
    .sort()
    .join(', ')}`
);

// show the type data
const someData = 'hello';

console.log(`${someData} -> ${typeof someData}`);

// change every letter a into *
const words = 'An apple a day keeps the doctor away';
const arrOfWords = words.split('');

for (let i = 0; i < arrOfWords.length; i++) {
  if (arrOfWords[i].toLowerCase() === 'a') {
    arrOfWords[i] = '*';
  }
}

console.log(`${words} -> ${arrOfWords.join('')}`);

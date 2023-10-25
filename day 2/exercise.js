/** @format */

// Write a code to convert celsius to fahrenheit
// Example: 60 Celcius → 140 Fahrenheit
// (60°C × 9/5) + 32 = 140°F

const celcius = 60;
console.log(celcius, " -> ", (celcius * 9) / 5 + 32);

// Write a code to check whether the number is odd or even
// Example: 25 → odd number, 2 → even number

let number = 25;
console.log(number, " -> ", number % 2 == 0 ? "even number" : "odd number");

// Write a code to check whether the number is prime number or not
// Example: 7 → 7 is a prime number
// Example: 6 → 6 is not a prime number
number = 5;
let isPrime = true;
if (number < 2) isPrime = false;
else {
  for (let i = 2; i < number; i++) {
    //5 % 2 === 0 ? false
    //5 % 3 === 0 ? false
    //5 % 4 === 0 ? false

    //1 bukan prime
    if (number % i === 0) isPrime = false;
  }
}
console.log(number, isPrime ? "is a prime number" : "is not a prime number");

// Write a code to find the sum of the numbers 1 to N
// Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// Example: 3 → 1 + 2 + 3 = 6
let result = 0;
for (let i = 1; i <= number; i++) {
  result += i;
}
console.log("sum", result);
// Write a code to find factorial of a number
// Example: 4! → 4 x 3 x 2 x 1 = 24
// Example: 6! → 6 x 4 x 3 x 2 x 1 = 720
result = 1;
for (let i = 1; i <= number; i++) {
  result *= i;
}
console.log("factorial", result);

// Write a code to print the first N fibonacci numbers
// Example: 15 → 610

number = 15;
let prevPos = 0, //angka sebelumnya
  currPos = 1, //angka saat ini
  nextPos = 0; // next angka
for (let i = 2; i <= number; i++) {
  nextPos = prevPos + currPos; //1 , 2 , 5 , 8, 13, 21
  prevPos = currPos; //1 , 2, 3, 5, 8, 13
  currPos = nextPos; //1 ,2, 3, 5, 8 , 13, 21
}
// 1 1 2 3 5 8 13 21
console.log(number, "->", currPos);

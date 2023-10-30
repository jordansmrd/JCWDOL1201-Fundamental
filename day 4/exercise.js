/** @format */

// /** @format */

// Create a function that can create a triangle pattern according to the height we provide like the following :
// 01
// 02  03
// 04  05  06
// 07  08  09  10

// Parameters : height → triangle height

const triagle = (height) => {
  let number = 0; // buat sebuah variable untuk menghitung angka
  for (let i = 1; i <= height; i++) {
    //looping sebanyak 4x sesuai dengan height
    let result = ""; // menampung setiap baris segitiga yang akan diprint
    for (let j = 0; j < i; j++) {
      number++; // increment numbernya => 6
      result += number > 9 ? `${number} ` : `0${number} `; //01 , 02 03 , 04 05 06
    }
    console.log(result); //01 => 02 03 =>
  }
};

triagle(4);

// // Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
// // Parameters : n → total looping
// // Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// // Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

const fizzBuzz = (n) => {
  let arrResult = []; // [1,2, Fizz]
  for (let i = 1; i <= n; i++) {
    let result = i; //1
    if (!(i % 3) && !(i % 5)) result = "FizzBuzz";
    else if (!(i % 3)) result = "Fizz";
    else if (!(i % 5)) result = "Buzz";
    arrResult.push(result);
  }
  return arrResult.toString().replace(/,/g, " ");
};
console.log(fizzBuzz(3));
// Create a function to calculate Body Mass Index (BMI)
// Formula : BMI = weight (kg) / (height (meter))²
// Parameters : weight & height
// Return values :
// < 18.5 return “less weight”
// 18.5 - 24.9 return “ideal”
// 25.0 - 29.9 return “overweight”
// 30.0 - 39.9 return “very overweight”
// > 39.9 return “obesity”

const bmi = (weight, height) => {
  let result = weight / height ** 2;
  if (result < 18.5) console.log("less weight");
  else if (result >= 18.5 && result <= 24.9) console.log("ideal");
  else if (result >= 25 && result <= 29.9) console.log("overweigh");
  else if (result >= 30 && result <= 39.9) console.log("very overweight");
  else console.log("obesity");
};
bmi(74, 1.77);

// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

const removeOdd = (...numbers) => {
  console.log(numbers.filter((number) => !(number % 2)));
  //   console.log(numbers.filter((number) => number % 2 == 0)); sama aja dengan ini
};
removeOdd(1, 2, 3, 4, 5, 6, 8);

// Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]

const splitString = (string = "") => console.log(string.split(" "));
//split merubah string menjadi array
splitString("Hello World");

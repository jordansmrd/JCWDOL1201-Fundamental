/** @format */

// // Write a function to get the lowest, highest and average value in the array (with and without sort function).
// // Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 32, average: 19.8xxx}
const score = (...numbers) => {
  const lowest = numbers.sort((a, b) => a - b)[0]; //[5,12,17,23] => 5
  const highest = numbers.sort((a, b) => b - a)[0]; //[23,17,12,5] => 23
  //   console.log(Math.min(...numbers), "test"); //cara lain lowest
  const avg = numbers.reduce((sum, number) => sum + number, 0) / numbers.length;

  console.log(`lowest : ${lowest} highest : ${highest} average : ${avg}`);
};
score(12, 5, 23, 17);

// // Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
// // Example : arr =  ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
const arrayToString = (...arr) => {
  arr[arr.length - 1] = ` and ${arr[arr.length - 1]}`;
  console.log(arr.toString());
};
arrayToString("apple", "banana", "cherry", "date");

// // Write a function to split a string and convert it into an array of words
// // Example : “Hello World” → [“Hello”, “World”]
const splitString = (string = "") => console.log(string.split(" "));
splitString("Hello World");

// // Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
// // Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
const sumArr = (arr1 = [], arr2 = []) => arr1.map((val, i) => val + arr2[i]);
console.log(sumArr([1, 2, 3], [3, 2, 1]));

// // Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
// // Example : arr = [1, 2, 3, 4], newElement = 4   →   [1, 2, 3, 4]
// // Example : arr = [1, 2, 3, 4], newElement = 7   →   [1, 2, 3, 4, 7]

const addNewElement = (arr = [], element) => {
  //   const check = arr.findIndex((val) => val == element);
  if (arr.indexOf(element) == -1) arr.push(element);
  // -1 artinya not found
  return arr;
};
console.log(addNewElement([1, 2, 3, 4], 4));

// // // Write a function to remove all even numbers in an array and return a new array that contains even numbers only
// // // Example : numbers = [1, 2, 3, 4, 5, 6] → [1, 3, 5]
const removeEven = (...numbers) =>
  console.log(numbers.filter((val) => val % 2));
removeEven(1, 2, 3, 4, 5, 6);

// // // Write a function to insert multiple given integer (not an array) to an array and have a maximum size input.
//The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements).
// // // Example :
// // //               maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// // //               The function will return [5, 10, 24, 3, 6]

const insertArr = (maxSize, ...numbers) => {
  //[5, 10, 24, 3, 6, 7, 8] => length = 7
  numbers.length = maxSize; // resize array length
  return numbers;
};

console.log(insertArr(5, 5, 10, 24, 3, 6, 7, 8));
// // // Write a function that will combine 2 given array into one array
// // // Example : arr1 = [1, 2, 3], arr2 =  [4, 5, 6] → [1, 2, 3, 4, 5, 6]
const combineArr = (arr1 = [], arr2 = []) => arr1.concat(arr2);
console.log(combineArr([1, 2, 3], [4, 5, 6]));

// // // Write a function to find duplicate values in an array
// // // Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
const findDuplicate = (...arr) => {
  //   const duplicate = [];
  //   arr.sort().forEach((val, index) => {
  //     if (val == arr[index + 1]) {
  //       if (duplicate.findIndex((number) => number == val) == -1)
  //         duplicate.push(val);
  //     }
  //   });
  const duplicate = arr
    .sort()
    .filter((val, index) =>
      val == arr[index + 1] ? arr.indexOf(val) === index : null
    );

  return duplicate;
};
//[1, 2, 2, 2, 3, 3, 4, 5, 5]
// val =2, index 1
// val = 2 , index = 1  === 1?
// duplicate = [2,3,6]
console.log(findDuplicate(1, 2, 2, 2, 3, 3, 4, 5, 5));

// // // Write a function to find the difference in 2 given array
// // // Example : arr1 = [1, 2, 3, 4, 5], arr2 =  [3, 4, 5, 6, 7] → [1, 2]
const diff = (arr1 = [], arr2 = []) =>
  arr1.filter((val) => arr2.indexOf(val) == -1);
// value 1
// index dari 1 di arr2 itu index keberapa? -1
// [1,2]

console.log(diff([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]), "diff");

// Based on the array below write a function that will return primitive data types only.
//             let arr = [1, [], undefined, {}, "string", {}, []];
// The function will return [1, undefined, “string”]

const primitive = (...arr) => arr.filter((val) => typeof val != "object");
console.log(primitive(1, [], undefined, {}, "string", {}, []));

// Write a function from a given array of numbers and return the second smallest number
// Example : numbers = [5, 3, 1, 7, 2, 6] → 2
const secondSmallest = (...arr) => arr.sort((a, b) => a - b)[1];
console.log(secondSmallest(5, 3, 1, 6, 2, 6), "2nd smallest");

// Write a function from a given array of mixed data types and return the sum of all the number
// Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
const sum = (...mixed) =>
  mixed.reduce(
    (sum, current) => (typeof current === "number" ? sum + current : sum),
    0
  );
// 3

console.log(sum("3", 1, "string", null, false, undefined, 2));

// Write a function from the below array of number that will return sum of duplicate values.
// let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// The function will return 40

const sumDuplicate = (...numbers) =>
  numbers
    .sort((a, b) => a - b)
    .filter((val, i) => val == numbers[i + 1] || val == numbers[i - 1])
    .reduce((sum, val) => sum + val, 0);
//10, 20, 40, 10, 50, 30, 10, 60, 10
//10,10,10,10,30,40,50,60
//[10,10,10,10]
console.log(sumDuplicate(10, 20, 40, 10, 50, 30, 10, 60, 10));

// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor.
// Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'

const suit = (pick = "") => {
  const options = ["rock", "paper", "scissor"]; //rock
  const playerIndex = options.indexOf(pick.toLowerCase()); //0
  const computerIndex = Math.floor(Math.random() * 3); // 2
  console.log(options[playerIndex], "vs", options[computerIndex]);
  if (
    (playerIndex == 0 && computerIndex == 2) ||
    (playerIndex == 1 && computerIndex == 0) ||
    (playerIndex == 2 && computerIndex == 1)
  )
    return "Win";
  else if (playerIndex == computerIndex) return "draw";
  return "Lose";
};

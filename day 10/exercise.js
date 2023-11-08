/** @format */

// Create a function to convert Excel sheet column title to its corresponding column number.
// Example :
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// …
// Example :
// Input : AB
// Output : 28

//cara hitung 1 digit gmna = 1-26
// 2 digit gmna = 1-702
//3 digit gmna = 1-16384
//nilai max alphabeth itu apa?

const convertSheetCol = (col = "") => {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split(""); //[A,B,C,D,E,F,G,H,I,J,..,Z]
  const array = col
    .toUpperCase()
    .split("")
    .map((char) => alphabets.indexOf(char) + 1);
  //col = "ABa"
  //[1,2,1]
  //max 3 char => length 1-26
  //length 2 => 27-702
  //length 3 => 703-.....
  //XFD

  console.log(array);
  let result = 0;
  if (array.length == 1) {
    result = array[0]; //Z => 26
  } else if (array.length == 2) {
    //AA => [1,1]
    //BB => [2,2]
    // 26 * 1 + 1 = 27
    //AA = 27
    // 26 * 26 + 26
    result = 26 * array[0] + array[1];
  } else if (array.length == 3) {
    // [1,1,2]
    //AAB 26^2 * 1 + 26*1 + 2
    // 676 + 26 + 1 = 704
    // 26**2 * 1 + 26 * 1 + 2
    result = 26 ** 2 * array[0] + 26 * array[1] + array[2];
  } else return console.log("parameter tidak sesuai");

  if (result > 16384) return console.log(`tidak boleh melebihi column XFD`);
  return console.log(`Column ${col} adalah ${result}`);
};

convertSheetCol("ZZZ");

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Example 1:
// Input: nums = [2,2,1]
// Output: 1
// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:
// Input: nums = [1]
// Output: 1

// [4,1,2,1,2]
// [1,1,2,2,4] => filter looping dengan condition
const unique = (nums) => {
  return nums
    .sort((a, b) => a - b)
    .filter((num, idx) => num != nums[idx - 1] && num != nums[idx + 1]);
};
console.log(unique([4, 1, 2, 1, 2, 4, 10]));
// 1,1,2,2,4

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// kata, taka
//KATA => [K,A,T,A] => [A,A,K,T]=> 'A,A,K,T'
//TAKA => [K,A,T,A,Z] => [A,A,K,A,T] => 'A,A,K,T,Z'

const anagramChecker = (t = "", s = "") =>
  t.toUpperCase().split("").sort().join("") ===
  s.toUpperCase().split("").sort().join("")
    ? true
    : false;
console.log(anagramChecker("kata", "kataz"));
//anagram =>[a,n,a,g,r,a,m] => [a,a,r,g,m,n] => aargmn
//nagaram => [m,a,g,a,r,a,m] =>[a,a,r,g,m,n] =>aargmn

// You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

const climbing = (n = 0) => {
  // menggunakan fibonnaci untuk mencari cara yang berbeda untuk menaiki anak tangga
  // 0 1 1 2 3 5 8
  let tempArr = [0, 1];
  for (let i = 2; i < n + 2; i++) {
    console.log(tempArr[i - 2], tempArr[i - 1]);
    tempArr.push(tempArr[i - 2] + tempArr[i - 1]);
  }
  return tempArr[tempArr.length - 1];
};

console.log(climbing(5));

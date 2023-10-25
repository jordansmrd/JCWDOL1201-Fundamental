/** @format */

// Write a code to display the multiplication table of a given integer.
// Example : Number → 9
// Output :
// 9 x 1
// 9 x 2
// …
// 9 x 10
let number = 9;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// Write a code to check whether a string is a palindrome or not.
// Example : ‘madam’ → palindrome
let string = "makan";
let reverseString = ""; //nakam
//i = 4
for (let i = string.length - 1; i >= 0; i--) {
  reverseString += string.charAt(i); //2 => n
}
console.log(string, string === reverseString ? "palindrome" : "not palindrome");

// console.log(
//   string,
//   string === string.split().reverse().toString()
//     ? "palindrome"
//     : "not palindrome"
// );

// Write a code to convert centimeter to kilometer.
// Example : 100000 → “1 km”

const cm = 100000;
console.log(cm, `-> ${cm / 100000} km`);

// Write a code to format number as currency (IDR)
// Example : 1000 → “Rp. 1.000,00”
number = 1000;
console.log(number, `Rp. ${number.toLocaleString("id-ID")},00`);

// Write a code to remove the first occurrence of a given “search string” from a string
// Example : string = “Hello world”, search string = “ell” → “Ho world”
string = "Hello world";
let search = "ell";
console.log(string.replace(search, ""));

// Write a code to capitalize the first letter of each word in a string
// Example : “hello world” → “Hello World”
let capitalize = ""; //Hello World
for (let i = 0; i < string.length; i++) {
  if (i == 0 || string.charAt(i - 1) == " ")
    capitalize += string.charAt(i).toUpperCase();
  else capitalize += string.charAt(i).toLowerCase();
}
// i = 1
// string.charAt(1-1) === " " ? kata baru
console.log(capitalize);
// Write a code to reverse a string.
// Example : “hello” → “olleh”
string = "hello";
reverseString = "";
for (let i = string.length - 1; i >= 0; i--) {
  reverseString += string.charAt(i);
}
console.log(string, "->", reverseString);

// Write a code to swap the case of each character from string
// Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
string = "The QuiCk BrOwN Fox";
let swap = ""; //tHE
for (let i = 0; i < string.length; i++) {
  if (string.charAt(i).toUpperCase() == string.charAt(i))
    swap += string.charAt(i).toLowerCase();
  else swap += string.charAt(i).toUpperCase();
}
console.log(swap);
// Write a code to find the largest of two given integers
// Example : num1 = 42, num2 = 27 → 42
let num1 = 42,
  num2 = 27;
console.log(num1, num2, "->", num1 > num2 ? num1 : num2);

// Write a conditional statement to sort three numbers
// Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
let num3 = 18; // 42,27,18
let lowest = num1,
  middle = num1,
  highest = num1;
// 18 27 42
//lowest
if (num1 > num2) lowest = num2; //27
if (lowest > num3) lowest = num3; //18
//largest
if (num1 > num2) highest = num1; // 42
if (highest < num3) highest = num3; // 42
//middle
if (lowest != num1 && highest != num1) middle = num1;
else if (lowest != num2 && highest != num2) middle = num2;
else middle = num3;

console.log(lowest, middle, highest);

console.log([num1, num2, num3].sort((a, b) => a - b)); //cara kedua

// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
// Example : “hello” → 1
let input = "hello";
if (typeof input === "string") console.log(1);
else if (typeof input === "number") console.log(2);
else console.log(3);
// Write a code to change every letter a into * from a string of input
// Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`

string = "An apple a day keeps the doctor away";
console.log(string.replace(/a/gi, "*")); //regExp

let replace = ""; //* *pple * d*y keeps the doctor *w*y
for (let i = 0; i < string.length; i++) {
  if (string.charAt(i).toLowerCase() == "a") replace += "*";
  else replace += string.charAt(i);
}

console.log(replace);

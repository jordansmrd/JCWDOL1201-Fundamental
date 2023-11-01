/** @format */

// Create a function to calculate array of student data
// The object has this following properties :
// Name → String
// Email → String
// Age → number
// Score → Number
// Parameters : array of student
// Return values :

// Object with this following properties :
// Score
// Highest
// Lowest
// Average

// Age
// Highest
// Lowest
// Average

class Student {
  constructor(name, email, age, score) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.score = score;
  }
}
const students = [
  new Student("naruto", "n@mail.com", 17, 60),
  new Student("sasuke", "s@mail.com", 18, 90),
  new Student("sakura", "sa@mail.com", 17, 100),
];

//age

console.log(students[0]["name"]);
console.log(students[0].name);
console.log(students);

const hla = (students = [], key = "") => {
  students.sort((a, b) => b[key] - a[key]); //urutkan array student besar ke kecil based on key paramnya
  const highest = students[0][key];
  const lowest = students[students.length - 1][key];
  const avg =
    students.reduce((sum, current) => sum + current[key], 0) / students.length;
  return { highest, lowest, avg };
};

console.log(hla(students, "score"));
console.log(hla(students, "age"));

//score

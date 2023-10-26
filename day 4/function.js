//delcaration function

function square(number) {
  //task dari function square
  return number * number;
}

function square2(number) {
  number * number;
}

function square3(number) {
  console.log(number * number, "print dari square3"); //print
}

function print(value) {
  console.log(value); //8
}

//square merupakan nama function
//number merupakan parameter
// parameter adalah sebuah variable yang exist di dalam sebuah function
// passing value ke dalam function lewat parameter
// return merupakan hasil dari function
square(5); // dia menghasil ankga perkalian 5*5
console.log(square(5), "dengan return");
console.log(square2(5), "tanpa return");

let hasil = square(8); //64
let hasil2 = square2(9);
console.log(hasil);
console.log(hasil2);

let hasil3 = square3(2);
console.log(hasil3, "hasil 3");

function penjumlahan(angka1, angka2) {
  print(angka1 + angka2);
}
penjumlahan(5, 3);

let number1 = 10,
  number2 = 11;

penjumlahan(number1, number2);
// pada menciptakan function kita memasukan variable ke dalam () yg dianggap sebagai parameter
// pada saat kita memanggil function, argument adalah value yang dipassing ke dalam parameter

//variable di dalam parameter hanya exist di dalam function

function penguarangan(angka1, angka2) {
  print(angka1 - angka2);
}

let angka1 = 8,
  angka2 = 5;
penguarangan(angka2, angka1);
// variable di dalam argument tidak menentukan urutan parameter
// tetapi parameter menentukan urutan di dalam argm

const perkalian = function (angka1, angka2) {
  print(angka1 * angka2);
};

const pembagian = (angka1, angka2) => {
  //task
  print(angka1 / angka2);
};

const penjumalahan3 = (angka1, angka2, angka3) => angka1 + angka2 + angka3; // return angka1+angka2+angka3
const penjumalahan3_2 = (angka1, angka2, angka3) => {
  return angka1 + angka2 + angka3;
};

console.log("arrow", penjumalahan3(1, 2, 3));
console.log("cb", penjumalahan3_2(1, 2, 3));

//pembagian adalah nama function
//angka1,angka2 adalah parameter
//

const greetings = () => {
  const hello = "Hello";
  return hello;
};

console.log(greetings());

// memory stack
// greetings
// greetings dipanggil
// greetings selesai dipanggil

let a; //undefined

const say = (name, greet = "hello,") => {
  console.log(greet, name);
};

say();

say("david");
say("david", "selamat malam,");

module.exports = { say, greetings }; //export

const restFunction = (param1, param2, ...restparam) => {
  console.log(param1, "param1");
  console.log(param2, "param2");
  console.log(restparam, "restParam");
};

restFunction(1, 2, 3, 4, 5, 6, 7);

const testFunction = (param1, param2, param3) => {
  console.log(param1, "param1");
  console.log(param2, "param2");
  console.log(param3, "param3");
};
testFunction(1, 2, 3, 4, 5, 6, 7);

const restFunction2 = (...restParam) => {
  console.log(restParam, "restParam");
};
restFunction2(1, 2, 3, 4, 5, 6);

const restPenjumlahan = (...numbers) => {
  let result = 0;
  //   numbers.map((value) => {
  //     result += value;
  //   });

  for (let number of numbers) result += number;

  return result;
};

console.log(
  restPenjumlahan(1, 2, 3, 4, 5, 6, 7, 1, 2, 32, 32, 32, 323, 232, 323)
);

//nested function
const getMsg = (name) => {
  const say = () => "hello, " + name;
  const welcomeMsg = () => " welcome to Purwadhika";

  return say() + welcomeMsg(); // hello, aryo welcome to purwadhika
};
console.log(getMsg("aryo"));

const greetingsClosure = (name) => {
  const hello = "hello ";
  return () => hello + name;
};
//arrow function bersifat single statement
// dimana arrow function tidak perlu repot2 tulis return

const greetDavid = greetingsClosure("david");
// const greetDavid = () => "hello " + "david"

console.log(greetDavid());
console.log(greetingsClosure("naruto")());

const fullname = (fName, lName) => fName + " " + lName;

const greet = (cb) => "hello " + cb;

console.log(greet(fullname("jordan", "ong")));
//call back function
// function yang berada di dalam arg/parameter

const names = ["udin", "nobita", "doraemon"];

const map = names.map((values, idx) => {
  return values === "nobita" ? "cengeng" : values;
});
//map adalah sebuah method yang akan me-return sebuah array
// dimana hasil array yang direturn merupakan hasil return dari callback functionnya
//panjang arraynya sama dengan banyak loopingnya

const tampung = [];
const foreach = names.forEach((values) => {
  tampung.push(values);
});

console.log(map, "ini map");
console.log(foreach, "ini foreach");
console.log(tampung);

const multiplier = (factor, number) => number * factor;
console.log(multiplier(5, 3));

const multiplier2 = (factor) => (number) => factor * number;
console.log(multiplier2(5)(3));
//parameter dari function multiplier2 adalah factor
// multiplier(5) => function
// multiplier(5)(3)

// hasil return dari sebuah function memiliki tipe data

const perkalian2 = (number) => number * number; //tipe data number
const saysay = (string) => string + "hehehe"; // string

const mul3 = multiplier2(3); //ini tipe datanya apa?
// (number) => 3 * number
const mul5 = mul3(5); // 3*5
console.log(mul5, "ini hasilya");

console.log(mul3);

// function hasil returnnya adalah function lagi

const countDown = (fromNumber) => {
  console.log(fromNumber); //5 4 3 2 1
  let nextNumber = fromNumber - 1; //4 3 2 1 0

  if (nextNumber > 0) return countDown(nextNumber);
};

countDown(5);

const parseint = parseInt("1"); //convert string to int
console.log(typeof parseint);
console.log(isNaN("a"));

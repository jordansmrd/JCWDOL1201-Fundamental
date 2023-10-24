/** @format */

console.log("Hello World"); //fungsi dari javascript untuk print out yang kita isi di dalamnya

let message; // declaration
message = "Hello World 2"; //assign

console.log(message); // memanggil variable message dan print out

var pakaian = "baju merah"; // declare & assign
pakaian = "baju biru"; //re-assign
var pakaian = ""; // redeclare & reassign
console.log(pakaian);

let sepatu = "converse"; //declare & assign
sepatu = "nike"; // re-assign
// let sepatu = "addidas"; // tidak bisa diredeclare
console.log(sepatu);

// a menggunakan variable sepatu untuk menampung sepatu converse
// si b tidak menyadari bahwa variable sepatu sudah digunakan,
// maka dia malah mengganti isi dari variable sepatu

const topi = "new era"; // declare & assign
// topi = "NY"; // tidak bisa re-assign
// const topi = "topi ulang tahun"; -- tidak bisa redeclare

console.log(topi);

// Must contain only letters, digits, or the symbols “$” and “_”
// The first character must not digit
// Case-sensitive
// Can’t use reserved words

let say = "hello"; //alamat 1
let say2 = "hello 2"; // alamat 2
let say_ = "hello 3";
let say$ = "hello 4";
let Say = "hello 5";

// let 123say = "tidak bisa"
// let hello% = "tidak bisa"
// let const = "tidak bisa";
// let let ="tidak bisa";
// let break = "tidak bisa";

// STRING;

// "" double
// '' single
// `` back tick
let string = "ini string";
string = `ini string`;
string = ' "hehehe" ';
string = " 'hehe' ";
string = ` '' ""`;
// string = ````;

//Number
let angka = 123;
let angka2 = 456;
let bigInt = 123n;
console.log(typeof angka, "ini angka");

//Boolean
let kenyang = true;
let lapar = false;
console.log(typeof kenyang, "ini kenyang");

// null
let Null = null; // biasa digunakan sebagai sebuah variable yang akan memiliki isi tapi tidak untuk saat ini
// product, qty,location
// mouse , 10, null
console.log(typeof Null, "ini Null");

// Undefined
let Undefined;

console.log(Undefined);

//object
const mobil = {
  warna: "merah",
  merk: "toyota",
};
console.log(typeof mobil, "ini mobil");

//array
const merkSepatu = ["addias", "converse", "nike"];
console.log(typeof merkSepatu, "ini merkSepatu");

//Mutable vs Immutable
const mouse = "mouse hitam"; //immutable
// mouse = "mouse merah"; tidak bisa reassign

const arr = [1, 2, 3, 4]; //kumpulan angka
arr.push(5);
console.log(arr);

let name = "jhonny"; // stack pertama
let newName = name; // stack kedua mengambil dari value stack pertama
newName = "jhon";

let person = {
  name: "Jhonny",
  age: 26,
};

let newPerson = person; //bersifat sebagai pointer
newPerson.name = "udin";

//deep copy = mengambil value dari variable mutable dan dijadikan sebagai pointer
//shallow copy = mengambil value dari variable mutable dan tidak dijadikan pointer
let deepCopy = person; // sifat menjadi sebuah pointer
// dia akan menunjuk value dari variable person
// dimana apabila terjadi perubahan didalam deepcopy akan mengubah isi dari person (reference)

let shallowCopy = { ...person }; //spread

console.log(name, newName);
console.log(person, newPerson);

deepCopy.name = "ujang";

console.log(person, deepCopy, shallowCopy);

// tipe data dan value

let Angka = 123;

let string2 = "hello purwadhika";
console.log(string2, string2.length, "digits");
console.log(string2.slice(6, 11));
console.log(string2.replace("hello", "malam,"));
console.log(string2.toUpperCase());
console.log(string2.charAt(10));
console.log(string2.indexOf("p"));
// operators + - * /
let string3 = string2 + " online!";
console.log(string3 + " online online");
console.log(`ini string ${string3}. `); //literal
console.log("ini string " + string3 + ". ");

//index
// char = 1 digit string
// string = kumpulan char
// setiap char di dalam string memiliki posisi yang disebut sebagai index
// index dimulai dari 0

// object memiliki property dan method
// prop and method adalah sebuah key
// method adalah sebuah fungsi dalam object
// property adalah variable dalam object

//buat aplikasi text editor seperti word, excel
// aku replace dengan saya

//Number built in method
let number = 10;
console.log(number.toString());

console.log(10 + "10"); // number+string = string
console.log(10 * "abc"); // NaN = Not a Number

console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Boolean(-1)); //true
// number selain 0 dianggap true

console.log(Boolean("hello")); //true
console.log(Boolean("")); //false
console.log(Boolean(" ")); //true
// string yang lengthnya lebih dari 0 dianggap true

let date = new Date(0);
date = new Date("2017-01-26");
console.log(date);

//operator 2
console.log(10 + 10); //10 tambah 10 = 20
console.log(10 - 5); //10 kurang 5 = 5
console.log(10 * 3); //10 kali 3 = 30
console.log(10 / 5); //10 bagi 5 = 2
console.log(10 ** 2); //10 pangkat 2 = 100
console.log(10 % 3); // 3*3 = 9. 10-9 = 1
console.log(1 + 1 + "1"); //"21", 1+1 =2 => 2+ "1" = "21"
console.log("1" + 1 + 1); // "111" => "1" + 1 = "11" => "11" + 1 = "111"

let number2 = 5;
number2 + 2; //7 tidak diassign ke dalam number2
number2 = number2 + 2; //7
number2 * 1000;
console.log(number2);
number2 += 30; // sama saja dengan number2 = number2 + 30
console.log(number2);
number2++; // number2 = number2 + 1 => 38 (increment)
console.log(number2);
number2--; // number2 = number2 - 1 => 37 (decrement)
console.log(number2);
number2 += 2; //increment by 2
number2 -= 3; //decrement by 3

//postfix & prefix
let pre = 0;
console.log(++pre, "ini adalah prefix");
let post = 0;
console.log(post++, "ini adalah postfix");
console.log(post);

//comparison operator
console.log(2 == 3); // 2 sama dengan 3 = false
console.log(2 == "2"); // value 2 dengan "2" = true
console.log(2 === "2"); // value 2 dengan "2" adalah sama, tetapi tipe data mereka berbeda. sehingga jawabannya adalah false
// == komparasi antar value
// === komparasi antar value dan tipe data

console.log(2 != 3); // 2 tidak sama dengan 3 = true
console.log(2 != 2); // 2 tidak sama dengan 2  = false.
console.log(2 !== "2"); // 2 tidak sama dengan "2" = true. karena secara tipe data mereka berbeda
console.log(2 > 1); // 2 lebih besar dari 1 = true
console.log(2 < 3); // 2 lebih kecil dari 3 = true
console.log(2 >= 2); // 2 lebih besar atau sama dengan 2 = true
console.log(1 <= 3); // 1 lebih kecil atau sama dengan 3 = true.

//cari luas persegi panjang

// hint, luas = panjang * lebar

// pseudocode =
// akan ada 2 variable panjang dan lebar
// untuk mencari luas maka panjang dikali dengan lebar
// tampilkan hasil luas di dalam terminal

let panjang = 5,
  lebar = 3;
let luas = panjang * lebar;

console.log(`luas dari panjang ${panjang} dan lebar ${lebar} adalah ${luas} `);

// pelajari tipe data
// pelajari built in method dan prop di dalam variable tipe data tertentu
// pelajari psuedocode

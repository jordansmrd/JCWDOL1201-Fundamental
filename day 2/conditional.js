/** @format */

// if conditional statement
let age = 15;

if (age >= 17) {
  //task
  console.log("anda dapat membuat ktp");
  console.log("ini statement kedua");
} else {
  //task
  console.log("anda belum cukup umur untuk membuat ktp");
}

let grade = "F";
if (grade === "A") console.log("excelent result");
else if (grade === "B") console.log("great result");
else if (grade === "C") console.log("avarage result");
else console.log("invalid grade!");

if (1 == "1") console.log("sama");
else console.log("tidak sama");

let provinsi = "banten";

if (provinsi === "banten") {
  console.log("di banten ada gading serpong");
  console.log("di banten ada bsd");
} else console.log("bukan banten");

let kota = "tangerang selatan";
let kodepos = 11113;
if (
  provinsi === "banten" &&
  kota === "tangerang selatan" &&
  kodepos === 15310
) {
  console.log("welcome to bsd city");
} else if (
  provinsi === "banten" &&
  kota === "tangerang kota" &&
  kodepos === 15311
) {
  console.log("welcome to pasar lama tangerang");
} else if (
  (provinsi === "DKI JKT" && kota === "Jakarta barat") ||
  kodepos === 11113
)
  console.log("welcome to jakarta");
else console.log("bukan tangerang");

//nested if
let gender = "man";
let name = "naruto";
age = 17;
if (gender === "man") {
  if (age <= 10) {
    if (name === "naruto") console.log("anak konoha");
    else console.log("anak cowo");
  } else if (age > 10 && age <= 17) console.log("cowo remaja");
  else console.log("pria dewasa");
} else if (gender === "woman") {
  if (age <= 10) console.log("anak cewe");
  else if (age > 10 && age <= 17) console.log("cewe remaja");
  else console.log("wanita dewasa");
}

let kendaraan = "motor";
let brand = "toyota";

if (kendaraan === "mobil") console.log("ini adalah mobil");
else if (brand === "toyota") console.log("ini adalah mobil brand toyota");
else console.log("ini adalah motor");

if (kendaraan === "mobil") console.log("ini adalah mobil");
if (brand === "toyota") console.log("ini adalah mobil brand toyota");
else console.log("ini adalah motor");

if (!(kendaraan === "mobil")) console.log("ini adalah motor not mobil");
// ! = tidak
// kendaraan === mobil adalah false
// !(false) = true

///switchcase
const fruit = "papaya";

switch (fruit) {
  case "papaya": //if
    console.log("ini buah pepaya");
    break; //memberitahu switch case untuk berhenti menjalankan task dari case di bawahnya
  case "mangoes": // else if
    console.log("ini buah mangga");
    break;
  case "oranges": //else if
    console.log("ini adalah buah jeruk");
    break;
  default: //else
    console.log("ini bukan buah ");
}

let number = 1;
switch (number) {
  case "1":
    console.log("ini adalah ==");
    break;
  default:
    console.log("ini adalah ===");
}

//falsy truthy
// Falsy
// "" (empty string)
// 0
// null
// undefined
// NaN

// Truthy
// " " (blank character string)
// [] (empty array)
// {} (empty object)
// 1
// "1" (string)
// "0" (string)
// "false" (string)
// "true" (string)

if (1) console.log("ini adalah true");
if (!0) console.log("ini adalah 0 ");
if ("hello") console.log("ini hello true");
if (!"") console.log("tidak muncul");

let angka = 1;
if (angka) console.log("ini true dari variable angka");

let nama = "";
if (!nama) console.log("nama kosong, wajib diisi");

//ternary sebuah if else dalam bentuk single statement
gender = "female";
if (gender == "male") console.log("namanya joko");
else console.log("namanya nuna");

gender == "male" ? console.log("namanya joko") : console.log("namanya nuna");

let kenegaraan = "indonesia";

kenegaraan == "indonesia"
  ? console.log("halo indonesia") //if
  : kenegaraan == "jepang" //else if
  ? console.log("halo jepang")
  : console.log("halo korea"); // else

console.log("hehehe");

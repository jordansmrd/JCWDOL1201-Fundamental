let arr1 = ["A", "B", "C", "D", "E"];
let arr2 = new Array("A", "B", "C", "D", "E");

console.log(arr1);
console.log(arr2);
//number
//string
//array
//object
//date

const arrNumber = [1, 2, 3, 4, 5]; // array of number
const numbers = [1, 2, 3, 4, 5]; // array of number
const books = ["buku ipa", "buku ips", "naruto", "komik one piece"];

const student1 = {
  name: "udin",
  email: "udin@mail.com",
  age: 17,
};
const student2 = {
  name: "ujang",
  email: "ujang@mail.com",
  age: 18,
};

const students = [student1, student2];
console.log(students);

// built in method array

console.log(numbers);

//toString merubah array menjadi sebuah string
console.log(numbers.toString().replace(/,/g, ""));

// numbers.push(" 7 "); // tidak disarankan untuk menambahkan tipe data lain ke dalam array

//join merubah array menjadi string dan mengganti setiap , menjadi value yang berada di parameter join
console.log(numbers.join("-"));

console.log(numbers);
numbers.push(6); //tambahkan 6 di dalam array number
// push merupakan method untuk menambahkan value ke dalam array di posisi index terakhir

numbers.pop(); //menghapus last index dari array
console.log(numbers);

numbers.shift(); //menghapus index pertama dari sebuah array
console.log(numbers);

numbers.unshift(5); //menambahkan value ke index pertama dari sebuah array
console.log(numbers);

numbers.splice(0, 2, 8); // mengahpus index di dalam array, dengan ketentuan
// parameter pertama menjadi lokasi index
// parameter kedua menjadi total index yang akan dihapus start dari parameter pertama
// parameter ketiga adalah value yang ditambahkan ke dalam array dan diletakan berdasarkan index paramater 1
console.log(numbers);

console.log(numbers.length); // memunculkan total data yang ada di dalam array

const numbers2 = [11, 12, 13, 14];
const gabunganNumbers = numbers.concat(numbers2); // menggabungkan 2 buah array dan disimpan ke dalam variable baru
console.log(gabunganNumbers);
const gabunganNumbers2 = [...numbers, ...numbers2]; //spread array numbers dan numbers2, lalu memasukan valuenya ke dalam array baru

console.log(gabunganNumbers2);
gabunganNumbers.push(4);
console.log(gabunganNumbers);
console.log("angka 4 berlokasi di index ke", gabunganNumbers.indexOf(4)); //method untuk mencari index dari value di dalam array dan

const fruits = ["apel", "mangga", "durian", "rambutan", "anggur"];
console.log(fruits.sort()); //mengurutkan berdasarkan alpabeth
console.log(gabunganNumbers.sort((a, b) => a - b)); // mengurutkan array of numbers
console.log(fruits.reverse());

console.log(gabunganNumbers.sort((a, b) => b - a)); // mengurutkan array of numbers dari besar ke kecil
for (let number of gabunganNumbers) console.log(number);

for (let i = 0; i < gabunganNumbers.length; i++)
  console.log(gabunganNumbers[i], "ini for biasa");

gabunganNumbers.map((value, index) => {
  console.log(value, "merupakan index ke", index);
});
//butuh parameter
//parameter di dalam map merupakan sebuah callback function
// () => {} || () =>
// callback function juga memilliki parameter

const numbers3 = [1, 2, 3, 4, 5];
const mapFilter = numbers3.map((values) => {
  //   console.log(values, "map");
  if (values % 2 === 0) return values;
});
//sebuah method yang return sebuah array based on return dari callback
console.log(mapFilter);
const filteredNumber = numbers3.filter((values) => {
  if (values % 2 === 0) return values;
}); // method yang return sebuah array yang sesuai dengan kondisi returnnya

console.log(filteredNumber, "hasil filter");
// numbers3.forEach((values) => {
//   console.log(values);
// }); //sebuah method yang ngelooping tapi tidak memberikan return

const found = numbers3.find((values) => {
  if (values % 2 === 0) return values;
});
console.log(found, "ini found");

// numbers3.reduce((values) => {
//   console.log(values);
// });

let sum = 0;
numbers3.forEach((values) => {
  sum += values;
});
console.log(sum);

let sum2 = numbers3.reduce((sum, value) => sum + value, 0);
let sum3 = numbers3.reduce(
  (prevValue, currentValue) => prevValue + currentValue
);

//sum 3 loncat ke index 1

//sum2 looping dibaca dari index ke 0

// sum = 0
// sum + value
console.log(sum2);
console.log(sum3);
//1 parameter callback
//2 parameter initial values

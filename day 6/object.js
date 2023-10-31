/** @format */

const bmw = {
  brand: "bmw",
  model: "m135i",
  price: 800000000,
};

const toyota = {
  brand: "toyota",
  model: "innova",
  price: 500000000,
};

//template  = class
// class merupakan template dari Object
class Car {
  type = "mobil";
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

const honda = new Car("honda", "jazz", 300000000);
const ferrari = new Car("ferrari", "model ferrari", 3000000000);

// console.log(bmw, toyota);
// console.log(honda);
// console.log(ferrari);

const user = {
  name: "David",
  greet() {
    console.log("hello");
  },
};

console.log(user);
console.log(user.name);
user.greet();

const person = {
  name: "frengky",
  age: 26,
  address: {
    street: "jalan batu besar",
    postalCode: 15311,
  },
};

person.hobby = "basket"; //tambah key baru
person.age = 20; // reassign key lama
delete person.hobby; //menghapus key di dalam object

// person = variable = object
// variable object akan memiliki keys
// kita tidak mengubah/reassign value dari objectnya. tapi kita mengubah keynya
console.log(person.name); //cara access key di dalam object
console.log(person["name"]); //cara access key di dalam object

console.log(person.address["name"]);
console.log(person?.address?.province);

console.log(Object.keys(person)); // return sebuah array, dimana isi array merupakan nama-nama key dari object tsb
console.log(Object.entries(person)); // return nested array, dimana sebelah kiri adalah key dan sebelah kanan adalah value

//looping seluruh key yg ada di dalam object person
for (let key in person) {
  //key diaccess dengan bentuk string
  console.log(key, person[key]); // print value dari person
}

const naruto = {
  firstName: "naruto",
  lastName: "uzumaki",
  get fullName() {
    return this.firstName + " " + this.lastName; //naruto uzumaki
  },
  set fullName(value = "") {
    //sasuke uchiha => ["sasuke","uchiha"]
    const splittedValues = value.split(" "); //string akan diubah menjadi array, dipisahkan lewat " "
    this.firstName = splittedValues[0]; // reassign value prop firstname
    this.lastName = splittedValues[1]; // reassign value prop lastname
  },
  fullName2() {
    return this.firstName + " " + this.lastName; //naruto uzumaki
  },
};
//getter merupakan sebuah function dalam object yang return sebuah tipe data
//getter diaccess seperti sebuah property tidak seperti method

console.log(naruto);
console.log(naruto.fullName); //getter = menarik data
naruto.fullName = "naruto saburo"; //setter = mengubah data
console.log(naruto.fullName); //getter function/method
console.log(naruto.fullName2()); //function biasa

//destructure = unpack values object/array

const computer = {
  vga: "3080",
  processor: "i7 13700k",
};

const { vga, processor } = computer;

console.log(vga);
console.log(processor);
console.log(computer.vga);

let a, b;
[a, b] = [10, 20];
console.log(a);

let data1 = [1, 2, 3];
let data2 = [4, 5, 6];
let data3 = data1.concat(data2);
let data4 = [...data1, ...data2];
let data5 = [data1, data2];
console.log(data3);
console.log(data4);
console.log(data5);

let data6 = { name: "udin" };
let data7 = { age: 20 };
let data8 = { ...data6, ...data7 };
const { name, age } = data8;
console.log(data8);
console.log(name, age);

const person2 = {
  firstName: "udin",
  lastName: "ujang",
  greet() {
    const firstName = "lulu"; //ini variable
    //this refer ke key dalam object
    console.log(`Hello nama lengkap saya adalah ${firstName} ${this.lastName}`);
  },
};

person2.greet();

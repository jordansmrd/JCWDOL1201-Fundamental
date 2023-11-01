/** @format */

//class declaration
class User {
  name = ""; // bukan variable, buat key "name"

  //private prop
  #email;
  constructor(name, email) {
    this.name = name;
    this.#email = email;
  }

  greeting() {
    console.log("hello");
  }

  get getEmail() {
    return this.#email;
  } //readonly
  set getEmail(value) {
    this.#email = value;
  }
}

//class expression
const User2 = class {
  greeting() {
    console.log("hello");
  }
};

// class merupakan cetakan dari sebuah object
// sehingga setiap object yg diciptakan dari class akan selalu memiliki keys di dalam class tersebut

const udin = new User("udin", "udin@mail.com"); // value udin merupakan argument yg dipassing ke dalam function constructor di dalam class User
udin.greeting(); // calling method greeting di dalam object udin
console.log(udin.name); // accessing key name di dalam object udin

console.log(udin.getEmail);

udin.getEmail = "duin@mail.com";
console.log(udin.getEmail);

//static

class DB {
  static name = "db";
  #bukanStatic = "bukan static";
  static #connection = ""; //private
  static #initializedConnection() {
    const number = Math.ceil(Math.random() * 100); //1-100
    this.#connection = `new database connection ${number}`;
  }

  static getConnection() {
    if (!this.#connection) this.#initializedConnection();

    return this.#connection; //new database connection 59
  }
  getBukanStatic() {
    //ini dideclare dalam class maka bisa access semua key mau public/private
    return this.#bukanStatic;
  }
}

console.log(DB.getConnection());

console.log(DB.name);
const db = new DB();
console.log(DB.bukanStatic);
console.log(DB.getConnection());
console.log(db.getBukanStatic());

// db.getBukanStatic2 = function () {
//     this.#bukanStatic;
// } tidak bisa access private key dalam class

// class merupakan template object
// class harus dibuat sebuah object untuk bisa digunakan isinya
// static key dalam sebuah class membuat kita bisa mengakses key tanpa harus menciptakan object terlebih dahulu

// web dev
// frontend = tampilan
// backend = process dibelakang layar yg memanipulasi data
// database = tempat untuk menyimpan data

// const user = {
//     id: 1,
//     email :"user1@mail.com",
//     password: "password"
// }
// ngisi form register
// fe adalah formnya
// data dikirim ke backend
// dari backend ngecek data,validasi dll
// data akan disimpan di dalam database

// create ,read, update ,delete = CRUD

// user,product,dll
// user pasti crud , product pasti crud

class Entity {
  create() {}
  delete() {}
  update() {}
  read() {}
}

const product = new Entity();
const user = new Entity();

// c => c++/ c#
// ga bisa buat object
// const a = {

// }

// javascript => strict rulesnya typescript

// let number = 0;
// number = "";

class Product {
  #stock;
  constructor(name, price) {
    this.price = price;
    this.name = name;
  }
  showStock() {
    if (!this.#stock) return "set stock terlebih dahulu";
    return this.#stock;
  }
  setStock(value) {
    if (typeof value == "number") return (this.#stock = value);
    return console.log(value, "bukan tipe data number");
  }
}

//getter setter tidak bisa untuk private key

const keyboard = new Product("keyboard razer", 500000);
keyboard.setStock(5);
keyboard.setStock("10");
console.log(keyboard);
console.log(keyboard.showStock());

console.log(typeof "50");

//keyboard
//buku

//nama,warna,berat,panjang,lebar

//author,releaseYear

const komikNaruto = new Product("buku komik naruto", 5000);
komikNaruto.author = "si udin";
komikNaruto.releaseYear = 1999;
console.log(komikNaruto);

const komikShinchan = new Product("buku komik shinchan", 4000);
komikShinchan.author = "si ujang";
komikShinchan.releaseYear = 1990;
console.log(komikShinchan);

class Book extends Product {
  constructor(name, price, author, releaseYear) {
    super(name, price); //super adalah method yang menjalankan constructor dari class Product
    this.author = author;
    this.releaseYear = releaseYear;
  }
  showStock() {
    console.log("hehehe");
  } //override method showStock milik product
}

const komikOnePiece = new Book("buku komik one piece", 5000, "si ujang", 1999);
console.log(komikOnePiece);
komikOnePiece.setStock(50);
komikOnePiece.showStock();
//produk name ,price ,category
//book author, releaseyear
//laptop brand, vga, processor

// input 100 produk
// 50 produk buku
// 50 produk laptop

console.log(komikOnePiece instanceof Book); //true
console.log(komikOnePiece instanceof Product); //true
console.log(komikNaruto instanceof Book); //false

//object, key, props, method
//class, public,private,static, encapsulation, inhertance, getter ,setter

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    //read
    return this.firstName + " " + this.lastName;
  }

  set fullName(fullname = "") {
    //write
    //ujang uchiha
    const spillted = fullname.split(" "); // ["ujang", "uchiha"]
    this.firstName = spillted[0];
    this.lastName = spillted[1];
  }
}
//getter setter maka function akan dianggap sebagai sebuah property

const person1 = new Person("udin", "uzumaki");

console.log(person1);
console.log(person1.fullName);
// person1.setFullName("ujang uchiha");
person1.fullName = "ujang uchiha"; //dijalankan seperti props padahal dia adalah method
console.log(person1.fullName);

const a = {
  fname: "",
  lname: "",
  get fullname() {
    return this.fname + " " + this.lname;
  },
  set fullname(values) {
    const spillted = values.split(" ");
    this.fname = spillted[0];
    this.lname = spillted[1];
  },
};

console.log(a);
a.fullname = "kucing garong";
console.log(a.fullname);
console.log(a);

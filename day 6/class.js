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

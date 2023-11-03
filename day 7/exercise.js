/** @format */

// /** @format */

// // Create a program to create transaction
// // Product Class
// // Properties
// // Name
// // Price
// // Transaction Class
// // Properties
// // Total
// // Product
// // All product data
// // Qty
// // Add to cart method → Add product to transaction
// // Show total method → Show total current transaction
// // Checkout method → Finalize transaction, return transaction data

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
class Transaction {
  #total = 0;
  #products = [];

  addToCart(product, qty) {
    if (product instanceof Product && qty > 0) {
      product.qty = qty;
      this.#products.push(product);
    } else console.log("invalid product");
  }
  showTotal() {
    this.#total = this.#products.reduce(
      (sum, current) => sum + current?.price * current?.qty,
      0
    );
    return this.#total;
  }
  checkout(pay = 0) {
    this.showTotal();
    if (this.#total > pay) return console.log("uang anda kurang");
    this.#products = [];
    console.log(
      "terima kasih sudah berbelanja",
      "kembalian anda adalah Rp." + (pay - this.#total).toLocaleString("id-ID")
    );
    return (this.#total = 0);
  }
}
const transaction = new Transaction();
transaction.addToCart(new Product("kemeja h&m", 300000), 2);
transaction.addToCart(new Product("celana h&m", 400000), 1);
console.log(transaction.showTotal());
transaction.checkout(1200000);
console.log(transaction.showTotal());

// Create a function to check if two objects are equal
// Example
// Input :  { a: 2 } & { a: 1 }
// Output: false
// Example
// Input :  { a: “Hello” } & { a: 1 }
// Output: false
// Example
// Input :  { a: 1 } & { a: 1 }
// Output: true

const checkEqual = (obj1 = {}, obj2 = {}) => {
  const entries1 = Object.entries(obj1).sort();
  const entries2 = Object.entries(obj2).sort();
  console.log(entries1);
  console.log(entries2);
  if (entries1.length != entries2.length) return false;
  for (let i = 0; i < entries1.length; i++) {
    if (entries1[i][0] !== entries2[i][0] || entries1[i][1] !== entries2[i][1])
      return false;
  }
  return true;
};
console.log(checkEqual({ a: 1, b: 1 }, { a: 1, b: 1 }));
// Create a function to get the intersection of two objects
// Example
// Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// Output: { a: 1 }

const intersection = (obj1 = {}, obj2 = {}) => {
  let intersec = {};
  for (let key of Object.keys(obj1)) {
    //a , b
    if (obj1[key] === obj2[key]) {
      intersec[key] = obj1[key]; // insertect.a = obj1.a , { a : 1}
    }
  }
  // dot square bracket

  return intersec; //{ a : 1}
};
console.log(intersection({ a: 1, b: 2 }), { a: 1, c: 3 });

// Create a function to merge two array of student data and remove duplicate data
// Student data : name & email
// Example :
// Array1 → [
// { name: "Student 1", email : "student1@mail.com"  },
// { name: "Student 2", email : "student2@mail.com"  }
// ]
// Array2 → [
// { name: "Student 1", email : "student1@mail.com"  },
// { name: "Student 3", email : "student3@mail.com"  }
// ]
// Result :
// ArrayResult → [
// { name: "Student 1", email : "student1@mail.com"  },
// { name: "Student 2", email : "student2@mail.com"  },
// { name: "Student 3", email : "student3@mail.com"  }
// ]

const merged = (arr1 = [], arr2 = []) => {
  arr2.forEach((val, idx) => {
    if (
      arr1.findIndex(
        (val2) => val2.name == val.name && val2.email == val.email
      ) == -1
    ) {
      arr1.push(val); // student 3
    }
  });
  return arr1;
};

console.log(
  merged(
    [
      { name: "Student 1", email: "student1@mail.com" },
      { name: "Student 2", email: "student2@mail.com" },
    ],
    [
      { name: "Student 1", email: "student1@mail.com" },
      { name: "Student 3", email: "student3@mail.com" },
    ]
  )
);

// Create a function that can accept input as an array of objects and switch all values into property and property into value
// Example :
// Input : [{ name: "David", age: 20 }]

const tukar = (arrObj = []) =>
  arrObj.map((val) => {
    let newObj = {};
    // ["name", "age"]
    Object.keys(val).map((key) => (newObj[val[key]] = key)); //{"david" : "name", "20" : "age"}
    return newObj;
  });

let arr = [
  { name: "David", age: 20 },
  { name: "a", age: 18, email: "a@mail.com" },
];
console.log(tukar(arr));
// Create a function to find a factorial number using recursion
// Example
// Input :  5
// Output: 5! = 5 x 4 x 3 x 2 x 1 = 120
function factor(n = 0, r = 1) {
  //n =5 , 4 ,3 ,2 , 1
  if (n > 1) return factor(n - 1, (r *= n)); // factor(4,5) , factor(3, 20), factor(2,60), factor(1,120)
  // return r; //120
  console.log(r);
}
factor(5);

// Specifications :
// Create a shooting game between two player
// Each player has three properties : name, health and power
// Each player will take turns to shooting
// Before shooting, players get a chance to get random items (health +10 or power +10)
// The game will continue until one of the players has health <= 0
// Requirements :
// Create ShootingGame & Player class
// ShootingGame class :
// constructor(player1, player2) → player objects as a parameter
// getRandomItem() → return { health: 0 or 10, power: 0 or 10 }
// start() → start shooting games
// Player class :
// Property → name, health (default 100), power (default 10)
// damage(power) →  subtract player health
// useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
// showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)
// ShootingGame start() function flow :
// In every turn :
// Show each player status before shooting
// Get random item for each player before shooting
// Show each player status after shooting
// Show winner name

class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.power = 10;
  }
  damage(power) {
    this.health -= power;
    if (this.health < 0) this.health = 0;
  }
  useItem(item) {
    this.health += item.health; //110
    this.power += item.power; //10
  }
  showStatus() {
    console.log(
      `Player ${this.name} (Health => ${this.health}, Power => ${this.power}) `
    );
  }
}

// const player1 = new Player("naruto");
// const player2 = new Player("sasuke");
// console.log(player1, player2);

class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    return Math.floor(Math.random() * 2) //0 atau 1
      ? { health: 0, power: 10 }
      : { health: 10, power: 0 };
  }
  start() {
    let first = Math.floor(Math.random() * 2);
    // jika 0 maka player 2 akan jalan duluan
    // jika 1 maka player 1 akan jalan duluan
    while (this.player1.health > 0 && this.player2.health > 0) {
      this.player1.showStatus(); //Player udin (Health => 10, Power => 20)
      this.player2.showStatus(); //Player ujang (Health => 50, Power => 40)
      this.player1.useItem(this.getRandomItem()); //Player udin (Health => 100, Power => 20)
      this.player2.useItem(this.getRandomItem()); //Player ujang (Health => 110, Power => 10)
      if (first) {
        this.player2.damage(this.player1.power); //player health = 20 , player 1 power : 30
        if (this.player2.health > 0) this.player1.damage(this.player2.power);
        else break;
      } else {
        this.player1.damage(this.player2.power);
        if (this.player1.health > 0) this.player2.damage(this.player1.power);
        else break;
      }
    }

    this.player1.showStatus();
    this.player2.showStatus();
    console.log(
      this.player1.health <= 0
        ? `the winner is ${this.player2.name}`
        : `the winner is ${this.player1.name}`
    );
  }
}

let game = new ShootingGame(new Player("udin"), new Player("ujang"));
// console.log(game);

game.start();

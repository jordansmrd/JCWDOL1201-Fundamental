/** @format */
// nomor 1
//buat program order goFood
// food => { name : "capcay" , price : 50000, qty : 2 }
// pada saat menambahkan makanan yang sama , maka qty akan diupdate
// apabila makanan yg ditambah belum ada di cart maka push
// restoran => { name : "kwetiaw 99", jarak : 5 }
// 1km harga ongkir adalah 2000
//berapa total pricenya ?

// buat 4 function
// 1. hitung total biaya
// 2. addFood menambahkan makanan ke cart
// 3. menghapus makanan di cart
// 4. mengedit qty makanan tertentu di dalam cart

//CRUD = > CREATE , READ (GET=>) , UPDATE ,DELETE
class Food {
  constructor(name, price, qty) {
    this.name = name;
    this.price = price;
    this.qty = qty;
  }
}

class GoFood {
  #foods = [];
  addFood(food) {
    if (food instanceof Food) {
      const check = this.#foods.findIndex((val) => val.name == food.name);
      if (check == -1) this.#foods.push(food);
      else {
        this.#foods[check] = {
          ...this.#foods[check],
          qty: this.#foods[check].qty + food.qty,
        };
      }
    } else {
      console.log("bukan makanan");
    }
  }

  showOrder() {
    this.#foods.forEach((val) => console.log(val));
  }

  deleteOrder(foodName) {
    const check = this.#foods.findIndex((val) => val.name == foodName);
    if (check == -1) return console.log("makanan tidak ditemukan");
    this.#foods.splice(check, 1);
  }

  editQty(foodName, qty) {
    const check = this.#foods.findIndex((val) => val.name == foodName);
    if (check == -1) return console.log("makanan tidak ditemukan");
    this.#foods[check] = { ...this.#foods[check], qty };
  }
  total() {
    console.log(
      "total",
      this.#foods.reduce((sum, curr) => sum + curr.price * curr.qty, 0)
    );
  }
}

const goFood = new GoFood();
goFood.addFood(new Food("capcay", 50000, 2));
goFood.addFood(new Food("bihun", 30000, 1));
goFood.addFood(new Food("capcay", 50000, 2));
goFood.deleteOrder("capcay");
goFood.editQty("bihun", 50);
goFood.showOrder();
goFood.total();

// nomor 2 => buat lah 5 function dengan parameter tinggi untuk menciptakan segitia bintang dengan menggunakan looping

// expected output :

// *
// **
// ***
// ****
let number = 5;

for (let i = 0; i < number; i++) {
  let star = ""; //i = 0, 1, 2
  for (let j = 0; j <= i; j++) {
    // 3 <=2 ? true
    star += "*"; // *, **, ***
  }
  console.log(star);
}
console.log();

// *****
//  ****
//   ***
//    **
//     *

for (let i = 0; i < number; i++) {
  star = ""; // i= 0 , 1, 2, 3,4, 5
  for (let j = 0; j < number; j++) {
    if (j < i) star += " "; // 5 < 4 ?
    else star += "*"; // *****, " ****", "  ***", "   **", "    *"
  }

  console.log(star);
}

//     *
//    **
//   ***
//  ****
console.log();

for (let i = 0; i < number; i++) {
  star = ""; // i =0,1, 2,3, 4 ,5
  for (let j = 0; j <= number; j++) {
    if (j < number - i) star += " "; // 5 < 5 ? , 5 < 4, 5 < 3, 5 < 2 ,5< 1
    else star += "*"; // "     *", "    **", "   ***", "  ****", " *****"
  }
  console.log(star);
}

console.log();
// *****
// ****
// ***
// **
// *
for (let i = 0; i < number; i++) {
  star = ""; //i = 0 , 1 , 2, 3 , 4
  for (let j = 0; j < number - i; j++) {
    //5 < 5, 4 < 4, 3 < 3 ,0< 2 ,1< 1
    star += "*"; // *****, ****, *** , **, *
  }

  console.log(star);
}

//     *
//    * *
//   * * *
//  * * * *
// * * * * *

for (let i = 1; i <= number; i++) {
  star = ""; // i = 1, 2, 3,4, 5
  //   console.log(i);
  for (let j = 0; j < number; j++) {
    if (number - i > j) star += " "; // 4 > 4, 3 > 4, 2>4, 1 > 4, 0> 4
    else star += "* "; // "    * ", "   * * ", "  * * * ", " * * * * ", "* * * * * "
  }

  console.log(star);
}

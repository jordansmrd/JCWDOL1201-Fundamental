/** @format */

// Given an array nums of size n, return the majority element.
//The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.
// Example 1:
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
// Input: nums = [2,2,1,1,1,2,2] => [2,1]

//[1,1,1].length = 3
//[2,2,2,2].length => 4
//3.5 < 4
// Output: 2

const majority = (nums = []) => {
  let max = 0;

  new Set(nums).forEach((val) => {
    if (nums.length / 2 < nums.filter((num) => num == val).length) max = val;
  });
  return max ? max : "no majority";
};

console.log(majority([3, 2, 3]));
//3.length = 2
//2.length = 2
// 2 > 2
console.log(majority([2, 2, 1, 1, 1, 2, 2]));

// Create a function to convert roman numeral to integer.
// Example 1:
// Input: s = "III”
// Output: 3
// Explanation: III = 3.
// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: L = 50, V= 5
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4, C = 100 , D = 500

//L,M,V,I,X,D,C
//IV, XC, IX, CM

const romanConverter = (roman = "") => {
  let arr = new Array();
  //single digit
  arr[1000] = "M";
  arr[50] = "L";
  arr[1] = "I";
  arr[5] = "V";
  arr[10] = "X";
  arr[100] = "C";
  arr[500] = "D";

  //double digit
  arr[9] = "IX";
  arr[900] = "CM";
  arr[90] = "XC";
  arr[4] = "IV";
  arr[400] = "CD";

  let tempRoman = roman.toUpperCase().split("");
  let sum = 0;
  for (let i = 0; i < tempRoman.length; i++) {
    let current = arr.indexOf(tempRoman[i]); //10 1
    let next = arr.indexOf(tempRoman[i + 1]); //1 5

    //1 < 5 ?
    if (current < next) {
      sum += arr.indexOf(tempRoman[i] + tempRoman[i + 1]); //arr.indexOf("IV") 10+4 = 14
      i++;
    } else {
      sum += arr.indexOf(tempRoman[i]); //sum = 10
    }
  }

  return sum;
};
console.log("ROMAN", romanConverter("MDCCLXXIV"));

// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown →
// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:
// Input: numRows = 1
// Output: [[1]]

//[[1][1,1]]
// index ke 2 dst sebuah array [1,??,1] => index ke 1 dst
// berapa kali kita ngeloop ? patternnya length array prev dikurang 1

const pascal = (numRows = 0) => {
  const arr = [[1], [1, 1]];
  //3
  for (let i = 2; i < numRows; i++) {
    const temp = []; //[2]
    for (let j = 0; j < arr[i - 1].length - 1; j++) {
      temp.push(arr[i - 1][j] + arr[i - 1][j + 1]);
      //arr[i-1] = [1, 1] = 2
    }
    arr.push([1, ...temp, 1]);
  }
  //[[1]]
  arr.length = numRows;

  return arr;
};
console.log(pascal(1));

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

const maxProfit = (prices = []) => {
  let min = Infinity;
  let max = 0;
  //  7, 1, 5, 3, 6, 4;
  prices.map((val) => {
    if (val < min) {
      min = val; //1
      max = val; //6
    }
    if (val > max) {
      max = val; //6
    }
  });

  return max - min;
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7, 6, 4, 3, 1]));

class Biodata {
  #nama;
  #tanggal_lahir;
  #alamat;
  #mobile;
  #email;
  constructor(nama, tanggal_lahir, alamat, mobile, email) {
    this.#nama = nama;
    this.#tanggal_lahir = new Date(tanggal_lahir);
    this.#alamat = alamat;
    this.#mobile = mobile;
    this.#email = email;
  }
  data() {
    return {
      nama: this.#nama,
      tanggal_lahir: this.#tanggal_lahir,
      alamat: this.#alamat,
      mobile: this.#mobile,
      email: this.#email,
    };
  }
  say() {
    return `halo nama saya ${this.#nama}, umur saya ${Math.floor(
      (new Date() - this.#tanggal_lahir) / 1000 / 3600 / 24 / 365
    )} tahun,alamat saya di ${this.#alamat}`;
  }
}

const a = new Biodata("udin", "01/21/1996", "bsd", "", "");

class Dokter extends Biodata {
  #alamat_rumah_sakit;
  #pengalaman_bekerja;
  #profesi;
  constructor(
    nama,
    tanggal_lahir,
    alamat,
    mobile,
    email,
    alamat_rumah_sakit,
    pengalaman_bekerja
  ) {
    super(nama, tanggal_lahir, alamat, mobile, email);
    this.#profesi = "dokter";
    this.#alamat_rumah_sakit = alamat_rumah_sakit;
    this.#pengalaman_bekerja = pengalaman_bekerja;
  }
  say() {
    return `hello nama saya ${this.say().nama}, saya berprofesi sebagai ${
      this.#profesi
    } dan beroperasi di ${this.#alamat_rumah_sakit}`;
  }
}

class Ojol extends Biodata {
  #kendaraan;
  #plat_nomor;
  #profesi;
  constructor(
    nama,
    tanggal_lahir,
    alamat,
    mobile,
    email,
    kendaraan,
    plat_nomor
  ) {
    super(nama, tanggal_lahir, alamat, mobile, email);
    this.#profesi = "ojol";
    this.#kendaraan = kendaraan;
    this.#plat_nomor = plat_nomor;
  }
  say() {
    return `hello nama saya ${this.data().nama}, saya berprofesi sebagai ${
      this.#profesi
    } dan kendaraan saya adalah ${this.#kendaraan}`;
  }
}

const grab = new Ojol(
  "udin",
  "01/21/1996",
  "bsd",
  "123",
  "udin@mail.com",
  "nissan gtr",
  "b2121"
);

console.log(grab.say());

/** @format */

const obj = {
  nama: "udin",
  umur: 100,
};

const strObj = JSON.stringify(obj);

console.log(strObj);
console.log(JSON.parse(strObj));

//JSON.stringfy merupakan convesion dari obj ke json string obj
//JSON.parse merubah dari json obj ke obj biasa

//browser sifatnya hanya menyimpan tipe data string

const { penduduk_konoha } = require("./data.json");
console.log(penduduk_konoha);

const sayHello = require("./external"); //import
sayHello();

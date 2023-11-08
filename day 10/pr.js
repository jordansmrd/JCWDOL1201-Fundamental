/** @format */
// buat sebuah class tokopedia
// dimana setiap produk memiliki categori yang berbeda beda
// pada saat belanja bisa add to cart
// terdapat stock di dalam produk
// apabila stock lebih sedikit dari pada request add to cart maka dia akan error
// bisa checkout, pada saat checkout cart akan kosong dan stock akan berkurang
// menu untuk menambahkan produk, edit produk, delete produk

// produk, name, stock, category , warna, price

// category 2
// pakaian => ukuran, brand
// buku => author,totalPage

// ada class tokopedia
// tokopedia akan memiliki banyak produk yg beda category
// produk yg ada bisa dipindahkan ke cart
// setiap product punya stock masing masing
// pada saat add to cart akan membutuhkan qty product (product,qty)
// pada saat addtocart produk yg qty lebih kecil dari stock maka akan error
// terdapat function checkout untuk membayar produk di keranjang
// pada saat produk berhasil terbayar, cart akan kosong dan stock product akan berkurang

class Product {
  constructor(name, stock, category, warna, price) {
    this.name = name;
    this.stock = stock;
    this.category = category;
    this.warna = warna;
    this.price = price;
  }
}

class Pakaian extends Product {
  constructor(name, stock, warna, price, size, brand) {
    super(name, stock, "pakaian", warna, price); // constructor product
    this.size = size;
    this.brand = brand;
  }
}

class Buku extends Product {
  constructor(name, stock, warna, price, author, totalPage) {
    super(name, stock, "buku", warna, price);
    this.author = author;
    this.totalPage = totalPage;
  }
}

class Tokopedia {
  #products = []; //menampung produk
  #carts = []; // keranjang belanja

  showProducts() {
    //munculkan seluruh produk yg ada
    this.#products.forEach((product) => console.log(product));
  }
  addProduct(product) {
    if (product instanceof Product) {
      const check = this.#products.findIndex((p) => p.name == product.name); //cek apakah produk yg mau diinput udah ada diproduk atau belum?
      if (check == -1)
        this.#products.push(product); //input produk ke dalam array products
      else console.log("product sudah terdaftar");
    } else {
      console.log("product tidak jelas");
    }
  }
  addToCart(nama, qty) {
    const idxProduct = this.#products.findIndex(
      (product) => product.name.toLowerCase() == nama.toLowerCase()
    );

    if (idxProduct == -1) return console.log("product tidak ditemukan");

    const { name, price, stock } = this.#products[idxProduct];

    if (qty > stock) return console.log("qty melebihi stock");
    const idxCart = this.#carts.findIndex(
      (product) => product.name.toLowerCase() == nama.toLowerCase()
    );

    if (idxCart == -1) this.#carts.push({ name, qty, price: qty * price });
    else this.#carts.splice(idxCart, 1, { name, qty, price: qty * price });
    console.log("product berhasil ditambahkan");
  }
  showCarts() {
    if (!this.#carts.length) return console.log("cart kosong");
    this.#carts.forEach((product) => console.log(product));
  }
  checkOut(payment = 0) {
    if (!this.#carts.length) return console.log("cart masih kosong");
    const total = this.#carts.reduce((sum, current) => sum + current.price, 0);
    if (payment < total)
      return console.log("uang anda kurang", total - payment);
    else {
      this.#carts.forEach((product) => {
        const productIndex = this.#products.findIndex(
          (val) => val.name == product.name
        );
        this.#products[productIndex].stock -= product.qty; // products[0].stock = 90
      });
      this.#carts = [];
      console.log("kembalian anda", payment - total);
    }
  }
}

const tokped = new Tokopedia();
tokped.addProduct(
  new Buku("naruto", 100, "putih", 7000, "masashi kishimoto", 100)
);
tokped.addProduct(new Pakaian("kemeja H&M", 10, "biru", 300000, "xl", "H&M"));

tokped.addProduct("hehehe");

tokped.addToCart("naruto", 10);

tokped.showProducts();
// tokped.addToCart("naruto", 100);
tokped.showCarts();
tokped.checkOut(100000);
tokped.showCarts();
tokped.showProducts();

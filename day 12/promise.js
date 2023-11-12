/** @format */

const tryPromise = new Promise((resolve, reject) => {
  let isError = false;
  if (!isError) resolve("success");
  else reject("error");
});

tryPromise
  .then((rus) => console.log(rus)) //isi res = success
  .catch((err) => console.log(err)) //isi err => error
  .finally(() => console.log("done")); //finally dijalankan pada saat then/catch telah dijalankan

//anggap kita mau get data dari sumber lain
//untuk ambil data dari sumber tsb. butuh waktu (async) => promise
// pada saat data berhasil diambil(dengan kurun waktu tertentu) maka dianggap resolve
// pada saat data gagal diambil, maka diakan masuk ke dalam catch. error ditangkap dengan catch,lalu error diprint
// sedangkan finally berjalan setelah then/catch

const fetchData = async () => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("fetch selesai"));

  return users?.map((user) => user.name);
};

const fetch2 = async () => {
  const users = await fetchData();
  console.log(users);

  const users2 = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json().then((users) => {
        const ids = users.map((val) => val.id); //dependent, kapan ada isinya?
        console.log(ids);
      });
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("fetch selesai")); //promise sifat async independent

  //   users2.map((val) => console.log(val));
};

fetch2();

//await membuat sebuah async jadi sync
//promise berjalan secara async
//untuk mendapatkan hasil dari promise melewati then
//untuk mendapatkan hasil dari then maka kita harus menunggu promise selesai (independent)
//apabila kita masuk ke dalam kasus dimana ada sebuah kegiatan/task yg melibatkan variable hasil dari promise
//untuk dapat hasil promisenya , kita harus menunggu promise selesai dengan menambahkan await

// frontend => user berkomunikasi dengan program
// backend => program berkomunikasi dengan program

// tampilan website => register
//hasil ketikan manusia yg diinput akan kita masukan ke dalam database
//database itu terhubung dengan backend
//user menggunakan frontend untuk berkomunikasi (register)
//untuk menyimpan data hasil input user di frontend
//maka frontend akan mengirim request ke backend
// request untuk menyimpan data hasil ketikan user

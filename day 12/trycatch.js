/** @format */

//try => mencoba => mengesekusi sebuah codingan
//catch => menangkap error apabila codingan gagal dieksekusi

const tryCatch = () => {
  try {
    const num1 = "asd";
    const num2 = 5;
    if (isNaN(num1) || isNaN(num2)) throw new Error("bukan number");
    console.log(num1 * num2);
  } catch (err) {
    console.log(err);
  }
};

tryCatch();

const fetchData = async () => {
  try {
    const respond = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await respond.json();
    users.map((user) => console.log(user.name));
  } catch (err) {
    console.log(err);
  }
};

fetchData();

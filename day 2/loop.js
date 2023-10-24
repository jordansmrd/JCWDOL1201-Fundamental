/** @format */

//for loop

for (let i = 0; i < 3; i++) {
  //task
  console.log("hello"); // 0,1,2,
}
// statement 1: let i = 0 dipanggil pertama kali for dijalankan
// statement 2: i < 3 adalah kondisi yang menentukan apakah task harus/tidak dijalankan
// statement 3: i++ akan dijalankan setiap seluruh task berhasil dijalankan

let number = 0;
while (number < 3) {
  //task
  console.log("hello tapi dengan while");
  number++; // 1,2,3
}

while (true) {
  console.log("ini adalah infinite loop");
  break;
}

number = 0; // falsy
do {
  //task
  console.log("ini jalan sebelum ada kondisi");
} while (number);

for (let i = 0; i < 5; i++) {
  if (i == 2) continue; //skip apabila i ==2
  console.log("ini angka", i);
}

const numberOfFactorial = 6;
let result = 1;
let message = "factorial 6 => ";
for (let i = 1; i <= numberOfFactorial; i++) {
  //   message += i == numberOfFactorial ? i : `${i} x `;
  if (i == numberOfFactorial)
    message += i; // factorial 6 => 1 x 2 x 3 x 4 x 5 x 6
  else message += `${i} x `; // factorial 6 => 1 x 2 x 3 x 4 x 5 x

  result *= i; // 1, 2, 6, 24, 120 , 720
}
console.log(message, "adalah", result);

// kesulitan memahami soal
// problem, expected result
// kesulitan menemukan solusi
// kesulitan coding

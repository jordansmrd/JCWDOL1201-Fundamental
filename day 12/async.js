/** @format */

//async merupakan rangkaian kegiatan yang proses pengerjaannya dilakukan/diselesaikan tidak saling menunggu
//sync merupakan rangkaian kegiaan yg proses pengerjaannya dilakukan/diselesaikan sambil menunggu 1 sama lain

//sync => customer pergi ke resto. pesan makanan
// pesan (tunggu), makanan datang, makan, selesai makan, bayar, pulang

//kasir, chef, cleaner satu resto yang sama
//kasir melayani customer 1 (mencatat pesanan), catat customer 2
//chef akan memasak makanan milik customer (bikin nasi goreng porsi besar untuk customer 1 dan 2)
//cleaner membersihkan meja bekas customer

//bahwa kasir menyelesaikan pekerjaannya duluan walaupun pekerjaannya berbarengan dengan entah chef/cleaner

const message = () => {
  console.log("async is easy");
};
setTimeout(message, 1000); //merupakan function memiliki 2 arg.
// arg1 akan dijalankan setelah arg2(waktu dalam ms) terlaksana

console.log("ini sequence 2");
console.log("ini sequence 3");

// ["seq1", "seq2","seq3"] => secara sequence

// ["seq2","seq3","seq1"] => secara result

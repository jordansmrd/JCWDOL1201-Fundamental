/** @format */

//linear search

const linearSearch = (arr, x) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) return i; //return index dari nilai x
  }
  return -1; //not found
};

// console.log(linearSearch([1, 2, 3, 4, 5], 10));

//binary search
//array wajib sorted
//biasanya mencari sebuah angka
//membagi menjadi 2 bagian per angka yang dia ingin cari

const binarySeach = (arr, l, r, x) => {
  //range merupakan last index dari array

  if (r >= l) {
    //range lebih besar dari lowest index
    let mid = l + Math.floor((r - l) / 2); // 5 +2 = 7
    console.log("mid=" + mid, "l=" + l, "r=" + r);
    //r = 4
    //l = 0 , 3
    //x = 10
    //mid = 2, 3

    if (arr[mid] == x) return mid;
    if (arr[mid] > x) return binarySeach(arr, l, mid - 1, x);
    return binarySeach(arr, mid + 1, r, x);
  }

  return -1;
};

let arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
let x = 38;
console.log("binary search", binarySeach(arr, 0, arr.length - 1, x));

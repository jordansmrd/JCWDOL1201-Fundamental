/** @format */

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr, i, "before");

    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
    console.log(arr, i, "after");
  }
  return arr;
};

console.log(bubbleSort([5, 3, 8, 4, 6]));

const selectionSort = (arr) => {
  let min;
  for (let i = 0; i < arr.length; i++) {
    //1000 data
    min = i; //terkecil ada di index 0 pertama kali
    for (let j = i + 1; j < arr.length; j++) {
      //1 - 999 = minimum
      if (arr[j] < arr[min]) min = j;
    }

    if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]]; //switching value
  }
  return arr;
};

console.log(selectionSort([29, 72, 98, 13, 87, 66, 52, 51, 36]));

console.log([5, 3, 10, 2, 9].sort((a, b) => a - b));

/** @format */

const fruits = ["banana", "apple", "jackfruit", "apple"];

const newFruits = new Set(fruits);

console.log(newFruits);
newFruits.forEach((val) => {
  console.log(val);
});

newFruits.add("avocado");
console.log(newFruits.size);
console.log(newFruits.entries());
console.log(newFruits);

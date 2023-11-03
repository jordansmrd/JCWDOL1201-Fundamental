/** @format */
//search
//insert
//delete
//modify

const myMap = new Map();

myMap.set("david", "001");
myMap.set("Buchanan", "002");

for (let [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}

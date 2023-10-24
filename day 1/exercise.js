/** @format */

// Write a code to find area of rectangle.
// Example : length = 5, width = 3 → 15
let length = 5,
  width = 3;
console.log("area of rectable =", length * width);

// Write a code to find perimeter of rectangle.
// Example : length = 5, width = 3 → 16
console.log("perimeter of rectable =", length * 2 + width * 2);

// Write a code to find diameter, circumference and area of a circle.
// Example : radius = 5
// Output : diameter = 10, circumference = 31.4159, area = 78.539
let radius = 5;
let diameter = radius * 2;
let circumference = (2 * Math.PI * radius).toFixed(4);
let area = (Math.PI * radius ** 2).toFixed(3);
console.log(
  "diameter =",
  diameter,
  "circumference =",
  circumference,
  "area =",
  area
);

// Write a code to find angles of triangle if two angles are given.
// Example : a = 80, b = 65 → 35
let a = 80;
let b = 65;
console.log("angle c =", 180 - a - b);

// Write a code to get difference between dates in days.
// Example : date1 = 2022-01-20, date2 = 2022-01-22 → 2
let date1 = new Date("2022-01-20");
let date2 = new Date("2022-01-22");
console.log((date2 - date1) / 1000 / 3600 / 24, "days");

// Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
// Example : 400 days → 1 year, 1 month, 5 days
// Example: 366 days → 1 year, 0 month, 1 day

let days = 400;
let year = Math.floor(days / 365);
let month = Math.floor((days % 365) / 30);
let day = (days % 365) % 30;
console.log(days, "days →", year, "year", month, "month", day, "days");

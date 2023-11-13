/** @format */

// Create a code that could handle a queue on food ordering process, with this specification:
// ● Create a class to handle queuing process in a file.
// ● Create file to handle and execute queue class.
// ● Each queue process takes a random interval from 1-10 seconds.
// ● Clue : Use while & promise
const FoodOrders = require("./class");

const order = new FoodOrders();
order.addFood("bihun");
order.addFood("ayam goreng");
order.addFood("kfc");
order.addFood("cakwe");
order.process();

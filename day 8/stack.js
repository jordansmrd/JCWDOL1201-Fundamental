/** @format */

class Stack {
  #maxSize;
  #container = [];
  constructor(maxSize = 10) {
    this.#maxSize = maxSize;
  }
  push(element) {
    if (this.#isFull()) return console.log("stack overflow");
    this.#container.push(element);
  }
  pop() {
    if (this.#isEmpty()) return console.log("stack underflow");
    this.#container.pop();
  }
  getElements() {
    return this.#container;
  }
  #isFull() {
    return this.#container.length >= this.#maxSize;
  }
  #isEmpty() {
    return this.#container.length === 0;
  }
}

const stack = new Stack(5);
stack.pop();
// stack.push(10);
stack.push(2);
// stack.push(3);
// stack.push(5);
// stack.push(7);
console.log(stack.getElements());
stack.pop();
// stack.push(9);
console.log(stack.getElements());

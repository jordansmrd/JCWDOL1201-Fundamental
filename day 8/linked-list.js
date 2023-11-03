/** @format */
const list = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: {
            value: 5,
            next: null,
          },
        },
      },
    },
  },
};

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
const node = new Node("a");

console.log("head =", node);
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(element) {
    let node = new Node(element); // { element : "C", next: null}
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head; //  {element : "A", next : { element : "B", next: null} deep copy

      while (current.next) {
        current = current.next; // { element : "B", next: null} deep copy
      }
      current.next = node; //  {element : "A", next : { element : "B", next: { element : "C", next: null}} }
    }
    this.size++; // size = 2
  }

  printList() {
    let curr = this.head;
    // {element : "A", next : { element : "B", next: { element : "C", next: null}} }
    while (curr) {
      console.log(curr.element); // "A" "B" "C"
      curr = curr.next; // null
    }
  }
  insertAt(element, index) {
    if (index < 0 || index > this.size)
      return console.log("please enter a valid index");
    else {
      const node = new Node(element); // {element : "D" , next : null}
      let curr = this.head;
      // {element : "A", next : { element : "B", next: { element : "C", next: null}} }

      if (index == 0) {
        node.next = this.head;
        this.head = node;
        //{element : "D" , next :  {element : "A", next : { element : "B", next: { element : "C", next: null}} }}
      } else {
        curr = this.head;
        let prev;
        let it = 0;
        //index  = 1

        while (it < index) {
          it++;
        }

        for (let i = 0; i < index; i++) {
          prev = curr;
          // { element : "B", }
          curr = curr.next; //next: { element : "C", next: null}
        }

        prev.next = node; //  { element : "B",  next : { element : "C", next: null}}
        node.next = curr; // { element : "A" ,next: element : "D" , next : { element : "B",  next : { element : "C", next: null}}}
      }

      this.size++; // 4
    }
  }

  removeAt(index) {
    if (index < 0 || index >= this.size)
      return console.log("please enter a valid index");
    else {
      let curr = this.head;
      let prev = curr;

      if (index === 0) {
        this.head = curr.next;
      } else {
        for (let i = 0; i < index; i++) {
          prev = curr;
          curr = curr.next;
        }

        prev.next = curr.next;
      }
      this.size--;
      return curr.element;
    }
  }

  removeElement(elemet) {
    let current = this.head;
    let prev = null; //nampung

    while (current != null) {
      if (current.element === elemet) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;

        return current.element;
        //, {element : "A",  next : { element : "B",  next : { element : "C", next: null}
      }

      //node.next = curr; // { element : "A" ,}
      // D
      prev = current;
      current = current.next; //next: element : "D" , next : { element : "B",  next : { element : "C", next: null}}
    }
    return null;
  }

  indexOf(element) {
    let count = 0;
    let current = this.head;

    while (current != null) {
      if (current.element === element) {
        return count;
      }

      count++;
      current = current.next;
    }
    return -1;
  }
}

const linkedList = new LinkedList();
linkedList.add("A");
linkedList.add("B");
linkedList.add("C");
linkedList.add("D");

linkedList.insertAt("new Value", 1);
linkedList.removeElement("B");
linkedList.removeAt(1);
linkedList.printList();

console.log(linkedList.indexOf("C"));

console.log(linkedList);

// string, number, object, array, class

// sulit memahami ekspektasi jawaban dari soal
// kesulitan menerapkan oop
// private dipakai pada saat kita mau melakukan validasi input

// const obj = {
//   name: "sagar",
//   class: "7th",
// };

// for (const [key, value] of Object.entries(obj)) {
//   console.log(key, value);
// }

//?? classes

// class Player {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
//   introduce() {
//     console.log(`Hi i m ${this.name}`);
//   }
// }

// const player1 = new Player("sagar", "noob");
// player1.introduce();

//?? implmenting an array
//?? because array is an object
class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
  }
  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new Array();
console.log(newArray.get(0));

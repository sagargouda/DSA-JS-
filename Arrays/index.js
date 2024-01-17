//!! practice

//?? decalaring
// let arr = new Array(2, 3, 4, 32, 2);
// console.log(arr);

//?? array can store anything

// let arra = ["agar", 23, "sgaar"];
// console.log(arra);

//?? interview question

// let arr = [1, 2, 7, 3, 45, 556, 5][(2, 6)];
// console.log(arr); //6

//??
// let arr = [1, 2, 3, 4, 4, 4, 6];
// arr.unshift(9);
// arr.shift();
// arr.shift();
// console.log(arr);

//?? inbuilt tracversal method
//?? map
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// numbers.map((item, index, array) => {
//   console.log(item, index);
// });

//?? filtyer
// const number = [1, 2, 3, 4, 54, 5];
// const nnn = number.filter((item) => {
//   return item > 50;
// });

// console.log(nnn);

//?? reduce

// const number = [1, 2, 3, 4, 4, 5, 56, 6, 6, 7];

// const nea = number.reduce((prev, curr) => {
//   return prev + curr;
// }, 0);

// console.log(nea);
// console.log(nea == number);

//?? some (similar filter )

// let num = [1, -2, -3, 34, -4, 4, 4, -55, 6];

// const ams = num.some((value, index) => {
//   return value > 0;
// });

// console.log(ams);

//??every (if every elemenmt satisy condition than it's tyrtue or else false)

// let num = [1, -2, -3, 34, -4, 4, 4, -55, 6];

// const ams = num.every((value, index) => {
//   return value > 0;
// });

// console.log(ams);

//?? find
// const numbers = [1, 2, 3, 3, 43, 4, 44, 4, 4, 3, -100];

// const answer = numbers.find((num, index) => {
//   if (num < 0) {
//     console.log(index);
//     return num;
//   }
// });
// console.log(answer);

//?? spread and rest (tc and sc = o(n))
// const num = [1, 2, 3];
// const num2 = [4, 5, 6, 6];

// const finalNum = [...num, ...num2];
// console.log(finalNum);

//?? concat (tc = 0(n) and sc = 0(n))
// const num = [1, 2, 3, 3, 4];
// const num2 = [6, 554, 44];
// const newarr = num.concat(num2);
// console.log(newarr);

//?? slice (tc = 0(k) and sc = 0(k))

// const sgaar = "sgaarreddy";
// const newStr = sgaar.slice(2, 5);
// console.log(newStr);

//?? splice  (tc = 0(n) and sc = 0(1))

// const sagar = ["sgar", "reddy", "kya"];
// sagar.splice(1, 2);
// console.log(sagar);

//?? fill  (tc = 0(n) and sc = 0(1))
// const nums = [1, 2, 2, 2, 2];
// nums.fill(5);
// console.log(nums);

//?? findindex (tc = 0(n) and sc = 0(1))
// const nums = [1, 2, 2, 3, 3, -2];
// const answe = nums.findIndex((ans) => {
//   return ans < 0;
// });

// console.log(answe);

//?? flat method  (tc = 0(n) and sc = 0(n)) creates a new shallow copy array
// const nested = [[1, 2, 2, 3], [3, 243, 3, 345], [43]];

// const ans = nested.flat();
// console.log(ans);

//?? flat method (we can also mention depth)
// const nested = [
//   [1, 2, 3, 3, [2, 21, 2, 2, [2, 2, 2, 33, 3]]],
//   [21, 2, 2, 2, 21, 3, 3, 3],
// ];
// const ans = nested.flat(3);
// console.log(ans);

//?? reverse array (tc = 0(n) and sc = 0(1))
// const num = [1, 2, 3, 3, 4, 4, 54, 5];
// const ans = num.reverse();
// console.log(ans);

//? sort method   (tc = 0(nlogn) and sc = 0(1))
// const sgara = [1, 2, 23, 1, 2, 2, 1, 2, 32, 3];
// sgara.sort((a, b) => b - a);
// console.log(sgara);

//!! converting array to map

// const num = [12, 23, 1, 10, 23, 34];

// const numberMap = new Map(num.map((value, index) => [index, value]));
// console.log(numberMap);

//!! converting set to array using array.from()

// function answer(arr) {
//   const newset = Array.from(new Set(arr));
//   console.log(newset);
// }
// answer([1, 2, 2, 3, 4, 5, 23, 3, 44, 54]);

//!! second largest
// const arr = [12, 2, 21, 2, 12, 21, 32, 32];
// const largest = Math.max(...arr);

// const secondLargest = arr.filter((val) => val < largest);
// const secondLargestValue = Math.max(...secondLargest);

// console.log(secondLargestValue);

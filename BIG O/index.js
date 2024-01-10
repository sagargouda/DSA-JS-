//!! first question(map method)

// const nemo = ["sagar", "nemo"];

// function findNemo(array) {
//   array.forEach((find, index) => {
//     if (find === "nemo") {
//       console.log(`found nemo in index ${index}`);
//     }
//   });
// }

// findNemo(nemo);

//!! creating array and filling it

// const sgar = new Array(100).fill(3);
// console.log(sgar);

//!! BIg o question
// function funChallenge(input) {
//   let a = 10; //o(1)
//   a = 50 + 3; //o(1)

//   for (let i = 0; i < input.length; i++) {
//     //o(n)
//     anotherFunction(); //o(n)
//     let stranger = true; //o(n)
//     a++; //o(n)
//   }
//   return a; //o(1)
// }

// time complexity = 3 + n + n + n + n
// BIG O(3+4n) = O(n);

//!! BIG o rule 1
// big 0 cares about worst case
//!! BIG o rule 2
/// dropp the constants
//!!  BIG o rule 3
// diffrent terms of input

function sgaar(box1, box2) {
  box1.forEach((element) => {
    console.log(box1);
  });
  box2.forEach((element) => {
    console.log(box2);
  });
}
//?? here bove the big o is O(a+b) becvaus ethe parameters are diffrent we don't know what they contain

//!! Big 0 rule 4
// o(n + n*2) here drop non dominant one

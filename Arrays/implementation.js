//?? Implementing evry js array  method

//!! forEach
// function forEach(array, callback) {
//   const { length } = array;

//   for (let index = 0; index < length; index++) {
//     const value = array[index];
//     callback(value, index, array);
//   }
// }

// forEach([1, 2, 3, 4, 5, 6], (value, index) => {
//   console.log(`Element at index ${index} : ${value}`);
// });

//!! map
// function map(array, callback) {
//   const result = [];
//   const { length } = array;

//   for (let index = 0; index < length; index++) {
//     const value = array[index];

//     result[index] = callback(value, index, array);
//   }
//   return result;
// }

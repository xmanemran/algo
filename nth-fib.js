console.clear();

// method 1
// function fib(nth) {
//   if (nth == 1) {
//     return 0;
//   } else if (nth == 2) {
//     return 1;
//   } else {
//     return fib(nth - 1) + fib(nth - 2);
//   }
// }
// const start = +new Date();
// console.log(fib(50));
// const end = +new Date();
// console.log('Time required: ', end - start);
// // 701408733
// // Time required:  8450

// method 2
// function fib(nth, db) {
//   if (db[nth]) {
//     return db[nth];
//   } else {
//     if (nth == 1) {
//       db[nth] = 0;
//       return db[nth];
//     } else if (nth == 2) {
//       db[nth] = 1;
//       return db[nth];
//     } else {
//       db[nth] = fib(nth - 1, db) + fib(nth - 2, db);
//       return db[nth];
//     }
//   }
// }
// var db = {};
// const start = +new Date();
// console.log(fib(50, db));
// const end = +new Date();
// console.log('Time required: ', end - start);
// // 7778742049
// // Time required:  2

//  method 3
// function fib(nth) {
//   if (nth == 1) {
//     return 0;
//   } else if (nth == 2) {
//     return 1;
//   } else {
//     let arr = [0, 1];
//     for (let index = 3; index <= nth; index++) {
//       if (index == nth) {
//         return arr[0] + arr[1];
//       } else {
//         arr = [arr[1], arr[0] + arr[1]];
//       }
//     }
//   }
// }
// const start = +new Date();
// console.log(fib(50));
// const end = +new Date();
// console.log('Time required: ', end - start);
// // 7778742049
// // Time required:  2

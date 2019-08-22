console.clear();

const array = [2, 1, 6, 4, 9];
const target = 10;
const result = [];

// // Method 1
// // Time = O(n^2) | space = O(1)
// for (let i = 0; i < array.length - 1; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] + array[j] == target) {
//       result.push([array[i], array[j]]);
//     }
//   }
// }

// // Method 2
// // Time = O(n) | Space = O(n)
// let db = {};
// for (let i = 0; i < array.length; i++) {
//   const requireDigit = target - array[i];
//   if (db[requireDigit]) {
//     result.push([requireDigit, array[i]]);
//   } else {
//     db[array[i]] = true;
//   }
// }

// Method 3
// Time = O(n) | space = O(1)

const newArray = array.sort();
let left = 0;
let right = array.length - 1;
while (left < right) {
  const total = newArray[left] + newArray[right];
  if (total < target) {
    left++;
  } else if (total > target) {
    right--;
  } else {
    result.push([newArray[left], newArray[right]]);
    left++;
    right--;
  }
}

console.log(result);

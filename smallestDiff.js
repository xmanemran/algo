console.clear();

Array.prototype.sortNumeric = function() {
  return this.sort((a, b) => a - b);
};

const array = [22, 26, 9, 13];
const array2 = [5, 20, 17];
let result = [];
let diff = Infinity;

// // Method 1
// // Time = O(n^2) | Space = O(1)
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array2.length; j++) {
//     const currentDiff = Math.abs(array[i] - array2[j]);
//     if (currentDiff < diff) {
//       result = [array[i], array2[j]];
//       diff = currentDiff;
//     }
//   }
// }

// Method 2
// Time = O(n) | space = O(1)
const newArray = array.sortNumeric();
const newArray2 = array2.sortNumeric();

let firstpointer = 0;
let secondPointer = 0;

while (firstpointer < newArray.length && secondPointer < newArray2.length) {
  const currentDiff = Math.abs(
    newArray[firstpointer] - newArray2[secondPointer]
  );

  if (diff > currentDiff) {
    diff = currentDiff;
    result = [firstpointer, secondPointer];
  }

  if (newArray[firstpointer] < newArray2[secondPointer]) {
    firstpointer++;
  } else if (newArray2[secondPointer] < newArray[firstpointer]) {
    secondPointer++;
  } else {
    firstpointer++;
    secondPointer++;
  }
}

console.log(newArray[result[0]], newArray2[result[1]]);

console.clear();
Array.prototype.sortNumeric = function() {
  return this.sort((a, b) => a - b);
};

const array = [22, 26, 9, 13, -2];
const target = 20;
let result = [];

// // Method 1
// // Time = O(n^3) | Space = O(1);
// for (let i = 0; i < array.length - 2; i++) {
//   for (let j = i + 1; j < array.length - 1; j++) {
//     for (let k = j + 1; k < array.length; k++) {
//       if (array[i] + array[j] + array[k] === target) {
//         result.push([array[i], array[j], array[k]]);
//       }
//     }
//   }
// }

// Method 2
// Time = O(n^2) | Space = O(1);
const newArray = array.sortNumeric();
let selected, left, right;

for (let selected = 0; selected < array.length - 2; selected++) {
  left = selected + 1;
  right = array.length - 1;
  while (left < right) {
    const tempSum = array[selected] + array[left] + array[right];
    if (tempSum > target) {
      right--;
    } else if (tempSum < target) {
      left++;
    } else {
      result.push([array[selected], array[left], array[right]]);
      right--;
      left++;
    }
  }
}

console.log(result);

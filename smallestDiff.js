console.clear();

// Method 1
// Time = O(n^2) | Space = O(1)
const array = [12, 26, 9, 13];
const array2 = [5, 20, 17];
let result = [];
let diff = Infinity;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array2.length; j++) {
    const currentDiff = Math.abs(array[i] - array2[j]);
    if (currentDiff < diff) {
      result = [array[i], array2[j]];
      diff = currentDiff;
    }
  }
}

console.log(result);

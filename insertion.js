var arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

for (let i = 1; i < arr.length; i++) {
  for (let j = i; j >= 0; j--) {
    if (arr[j - 1] > arr[j]) {
      const temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    } else {
      break;
    }
  }
}

console.log(arr);

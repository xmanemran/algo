var arr = [9, 8, 7];

for (let i = 0; i < arr.length; i++) {
  let smallIndex = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[smallIndex]) {
      smallIndex = j;
    }
  }
  const temp = arr[smallIndex];
  arr[smallIndex] = arr[i];
  arr[i] = temp;
}

console.log(arr);

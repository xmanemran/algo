console.clear();

var arr = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

var first = arr[0] > arr[1] ? arr[0] : arr[1];
var second = arr[0] < arr[1] ? arr[0] : arr[1];
var third;

for (let index = 2; index < arr.length; index++) {
  if (arr[index] > first) {
    third = second;
    second = first;
    first = arr[index];
  } else if (arr[index] > second) {
    third = second;
    second = arr[index];
  } else {
    if (third) {
      third = arr[index] > third ? arr[index] : third;
    } else {
      third = arr[index];
    }
  }
}

console.log([third, second, first]);

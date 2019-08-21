console.clear();

var string = 'abba';

// // Method 1
// // Time O(n^2) | space O(n)
// // string concat time complex is n^2
// var compString = '';
// for (let i = string.length - 1; i >= 0; i--) {
//   compString += string[i];
// }

// if (string == compString) {
//   console.log('True');
// } else {
//   console.log('False');
// }

// // Method 2
// // Time O(n) | space O(n)
// // string concat time complex is n^2
// var compString = [];
// for (let i = string.length - 1; i >= 0; i--) {
//   compString.push(string[i]);
// }

// if (string == compString.join('')) {
//   console.log('True');
// } else {
//   console.log('False');
// }

// // Method 3
// // // Time O(n) | space O(n)
// function checkIsPalindrome(string) {
//   if (string.length <= 1) {
//     return 'True';
//   } else {
//     if (string[0] == string[string.length - 1]) {
//       return checkIsPalindrome(string.substr(1, string.length - 2));
//     } else {
//       return 'False';
//     }
//   }
// }
// console.log(checkIsPalindrome(string));

// Method 4
// Time O(n) | space O(1)
let left = 0,
  right = string.length - 1,
  status = 'True';

while (left !== right && left < right) {
  if (string[left] == string[right]) {
    left++;
    right--;
    status = 'True';
  } else {
    status = 'False';
    break;
  }
}

console.log(status);

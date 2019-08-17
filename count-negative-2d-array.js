console.clear();

var arr = [
  [-4, -3, 1, 0],
  [-2, 2, 1, 0],
  [-1, 1, 2, 3],
  [1, 2, 4, 5]
];


let selectedRow = 0;
let count = 0;

for(let selectedCol = arr.length -1 ; selectedCol >= 0; selectedCol--){
  const selectedItem = arr[selectedRow][selectedCol];
  const selectedItemBottom = arr[selectedRow + 1][selectedCol];
  if(selectedItem < 0 && selectedItemBottom < 0){
    selectedRow++;
    selectedCol++;
  } else if(selectedItem < 0){
    count += selectedRow + 1;
  }
}

console.log(count);

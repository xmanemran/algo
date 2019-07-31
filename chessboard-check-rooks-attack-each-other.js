console.clear();

var arr = [
  [0, 1, 0],
  [0, 0, 0],
  [1, 0, 0]
];


function check(arr) {
  let cantAttack = true;
  for(let i = 0; i < arr.length; i++){
    if(arr[i].reduce((total, num) => (total + num), 0) > 1){
      cantAttack = false;
      break;
    }
    
    if(arr.reduce((total, row) => (total + row[i]), 0) > 1){
      cantAttack = false;
      break;
    }
  }
  return cantAttack;
}

console.log(check(arr));

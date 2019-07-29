var arr = [3, 1, 4, 5, 12, 2];

function secondLargestNumber(arr){
  if(arr.length <= 1){
    console.log('NONE');
  } else {
    let large = arr[0] > arr[1] ? arr[0] : arr[1];
    let secondLarge = arr[0] < arr[1] ? arr[0] : arr[1];
    
    for(let i = 2; i < arr.length; i++){
      if(arr[i] > large){
        secondLarge = large;
        large = arr[i];
      } else {
        if(arr[i] > secondLarge){
          secondLarge = arr[i];
        }
      }
    }
    console.log(secondLarge);
  }
}

secondLargestNumber(arr)

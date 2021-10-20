// function area
function lastIndexOf(someArray, value) {
  let position = -1;
  for (let i = 0; i < someArray.length; i++){
    if (value == someArray[i]){
      position = i;
      
    }
    
  }
  return position;
}

// main area
//et someArray = [25, 26, 27, 25, 29, 30, 25];
//console.log(lastIndexOf(someArray, 25));

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));
console.log(lastIndexOf([ 5, 5, 5 ], 5));
console.log(lastIndexOf([], 3));


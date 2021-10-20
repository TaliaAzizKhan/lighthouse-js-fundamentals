
function range(start, end, step) {
  let some_array = [];
  if (((typeof(start) === "undefined") || (typeof(end) === "undefined") || (typeof(step) === "undefined")) || (start >= end) || (step <= 0)) 
  {
    return some_array
  }
  else 
  {
    let i = start;
    while (i <= end ){
      some_array.push(i);
      i = i + step;
    }
    return some_array;
  } 
}

console.log(range(0, 10, 2));


console.log(range(10, 30, 5));


//console.log(range(-5, 2, 3));
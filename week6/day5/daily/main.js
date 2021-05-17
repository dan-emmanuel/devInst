// allTruthy(true, true, true) ➞ true

// allTruthy(true, false, true) ➞ false

// allTruthy(5, 4, 3, 2, 1, 0) ➞ false



function allTruthy(){
  for (let index = 0; index < arguments.length; index++) {
    const element = arguments[index];
    if(element!==true){return false}
    
  }
  return true
}

console.log(allTruthy(true, true, true))
console.log(allTruthy(true, false, true))
console.log(allTruthy(5, 4, 3, 2, 1, 0))
function allTrue() {

  for (i = 0; i < arguments.length; i++) {
      if(Boolean(arguments[i])===false){
        return false
      }
  }
  return true
}


console.log(allTrue(true,true,true))
console.log(allTrue(true,false,true))
console.log(allTrue(5, 4, 3, 2, 1, 0))



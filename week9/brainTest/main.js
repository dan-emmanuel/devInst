let sizeafterCycles = (nbr)=>{
  let height = 1
  for (let index = 1; index <= nbr; index++) {
    Boolean(index%2)?height*=2:height+=1
    
  }
  return height
}

console.log(sizeafterCycles(1))
console.log(sizeafterCycles(2))
console.log(sizeafterCycles(3))
console.log(sizeafterCycles(4))
console.log(sizeafterCycles(5))

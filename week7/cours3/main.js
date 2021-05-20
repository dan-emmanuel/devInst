let array  = ["1,2,5,6,7", "2,5,7,8,15"]


let firsArray = array[0].split(",")
let secondArray = array[1].split(",")

let sames = firsArray.filter(e=>secondArray.includes(e))


console.log(sames)
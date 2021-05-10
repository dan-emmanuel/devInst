let numbers = [1,2,3,4,5,6,7,8,9]

let sumer = (array)=>{
    let sum = 0
    array.forEach(element => {
        sum+=element
    });
    return sum
}

let sum = sumer(numbers)

console.log(sum)
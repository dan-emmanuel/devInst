const numbers = [5,0,9,8,7,4,6,3,2,1];

// Using the .toString() method convert the array to a string.
let numbersToString = numbers.toString()
console.log(numbersToString)
// Using the .join()method convert the array to a string. Try passing different values into the join.
// Eg .join("+"), .join(" "), .join("")
numbersToString = numbers.join("+")
console.log(numbersToString)
numbersToString = numbers.join(" ")
console.log(numbersToString)
numbersToString = numbers.join("")
console.log(numbersToString)
// Bonus : To do this Bonus look up how to work with nested for loops
// Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
for (let i = 0; i < numbers.length-1; i++) {
    for (let j = 0; j < numbers.length; j++) {
        const element = numbers[j];
        let jLoopChangedNumbers
        do {
            jLoopChangedNumbers = false
            if(element<numbers[j+1]){
                numbers[j] = numbers[j+1] 
                numbers[j+1] = element 
                jLoopChangedNumbers = true
            }
        } while (jLoopChangedNumbers);
        
        
    }
}
console.log(numbers)

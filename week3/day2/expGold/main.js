// ex1
let me = ["my","favorite","color","is","blue"]

let sentence = me.join(' ');

// ex2

let str1 = "mix"
let str2 = "pod"
let newWord  = `${str2.slice(0,2)}${str1.slice(2)} ${str1.slice(0,2)}${str2.slice(2)}`
console.log(newWord)

let firstWord = "Hello"
let secondWord = "World"
let thirdWord  = `${secondWord.slice(0,3)}${firstWord.slice(3)} ${firstWord.slice(0,3)}${secondWord.slice(3)}`
console.log(thirdWord)

// ex3
    // sum
        let num1 = prompt(`waht's the first of the operation ?`)
        let num2 = prompt(`waht's the second of the operation ?`)

        let sum = num1+num2
        alert(sum)

    // substract
         num1 = prompt(`waht's the first of the operation ?`)
         num2 = prompt(`waht's the second of the operation ?`)

        let diff = num1-num2
        alert(diff)

    // multiply
         num1 = prompt(`waht's the first of the operation ?`)
         num2 = prompt(`waht's the second of the operation ?`)

        let product = num1*num2
        alert(product)
    // divied
         num1 = prompt(`waht's the first of the operation ?`)
         num2 = prompt(`waht's the second of the operation ?`)

        let quotient = num1/num2
        alert(quotient)
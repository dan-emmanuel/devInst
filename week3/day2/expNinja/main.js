
// ex nemo
let userSentence = prompt("please say a sentence with nemo word")

let nemoPosition  = userSentence.toLowerCase().split(" ").indexOf("nemo")

if(nemoPosition!=-1){
    alert(`I found Nemo at ${nemoPosition}!`)
}else{
    alert(`I can’t find Nemo`)
}


// Exercise 1 : Evaluation

5 >= 1
// output true
console.log(5 >= 1)
0 === 1
// output false
console.log(0 === 1)
4 <= 1
// output false
console.log(4 <= 1)
1 != 1
// output false
console.log(1 != 1)
"A" > "B"
// output false
 console.log( "A"> "B")
"B" < "C"
// output true
 console.log( "B"< "C")
"a" > "A"
// output true
 console.log( "a"> "A")
"b" < "A"
// output flase
 console.log("b"< "A")
true === false
// output false
console.log(true === false)
true != true
// output false
console.log(true != true)

// Exercise 2 : Evaluation
let c;
let a = 34;
let b = 21;
a = 2;
a + b
// output = 23
console.log(a + b)

// Exercise 1 :  Ask For Numbers


let numbers = prompt("please say a sentence with nemo word").split(",")

let sum= 0

numbers.forEach(element => {
    sum +=element
});

console.log(sum)
let sentence = ""
// ex Boom\
let numberofo  = parseInt( prompt(`how many o you want ?`))
if(numberofo<2){
    sentence = ("boom")
}else if(numberofo<2){


}

if(numberofo%2==0){
    sentence+=`!`
}

if(numberofo%5==0){
    sentence.toUpperCase()
}

console.log(sentence)

// Exercise 1 : Your Favorite Colors
// Create an array called colors where the value is a list of your favorite colors.
let colors  = ["blue", "green" , "yellow", "purple",  "orange"]

colors.forEach((element,index) => {
    let indexNmae
    switch (index) {
        case 0:
            indexNmae = `1st`
        break;
        case 1:
           indexNmae = `2nd` 
        break;
        case 2:
           indexNmae = `3rd` 
        break;
        default:
           indexNmae = `${index}th` 
        break;
    }
    console.log(`my ${indexNmae} choice  is ${element}`)
});



// Write code to remove “Greg” from the people array.
let people = ["Greg", "Mary", "Devon", "James"]
people.shift()
// Write code to replace “James” to “Jason”.
let placeTorChange = people.indexOf("James")
console.log(placeTorChange)
people.splice(placeTorChange, 0, 'Jason')
// Write code to add your name to the end of the people array.
people.push("dan")
// Using a loop, iterate through the people array and console.log each person.
people.forEach(element=>console.log(element))
// Using a loop, iterate through the people array and after you console.log “Jason” exit the loop.
for (let index = 0; index < people.length; index++) {
    const element = people[index];
    console.log(element)
    if(element=="Jason"){break}
}
// Write code to make a copy of the people array using slice. The copy should NOT include “Mary” or your name.
peopleCopy = people.slice(1,-1)
// Write code that console.logs Mary’s index. take a look at indexOf on google.
let maryIndex = people.indexOf("Mary")
// Write code that gives the indexOf “Foo” (this should return -1). Why does it return -1
let fooIndex = people.indexOf("Foo")
// it should have retun false which is 0 but 0 is the first place of the array so the index of method says : if there's no answer for what you are looking for i return you -1

// Create a variable called last which value is the last element of the array.
let last = people[people.length-1]

// Exercise 3 : Repeat The Question
let number
do {
    number = parseInt(prompt(`what's your number`))
} while (number<10);

// exercice 4 
let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
}

let currentName = prompt("what's your name? ").toLowerCase()

if(guestList.hasOwnProperty(currentName) ){
    console.log(`Hi! I'm ${currentName}, and I'm from  ${guestList[currentName]}.`)
}else{
    console.log("Hi! I'm a guest.")
}

// Exercise 5 : Family

let famillY  = {
    name:"doe",
    members:{mother:"jane",father:"John",son:"mickael",daughter:"alison"},
    adress : "5th Av.",
    city:"N.Y",
    languages: ["french","english","hebrew"]
}

console.log(Object.keys(famillY))
console.log(Object.values(famillY))

// Exercise 7 : Secret Group

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]

function myFunction(total, value) {
    return total + value[0];
}

let groupName = names.reduce(myFunction);
console.log(groupName)
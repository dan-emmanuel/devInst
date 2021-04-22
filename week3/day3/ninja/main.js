// Exercise 1 : The World Translator

let language = prompt("what's your language ?").toLowerCase()

switch (language) {
    case "hebrew":
        console.log("Shalom")
    break;
    case "english":
        console.log("Hello")
    break;
    case "french":
        console.log('Bonjour')
    break;
     
    default:
        console.log("01110011 01101111 01110010 01110010 01111001")
    break;
}



// Exercise 2 : The Grade Assigner


let grade = parseInt(prompt("what's your grade ?"))


if(typeof grade=="number"){

    if(grade >90){
        console.log(`A`)
    }else if(grade > 80 && number <= 90){
        console.log(`B`)
    }else if(grade >= 70 && number <= 80){
        console.log(`C`)
    }else{
        console.log(`D`)
    }
}else{
    console.log(`grade is not a number`)

}

// Exercise 3 : Verbing
let verb = prompt("what's your verb ?").toLowerCase()


switch (true) {
    case /[a-zA-Z]{3,}ing/.test(verb):
        verb+="ly"
    break;
    case /[a-zA-Z]{3,}/.test(verb):
        verb+="ing"

    break;
   
    default:
        

    break;
    }
console.log(verb)
// simole if/else Statement
let x=4,y=5


if(x>y){
    console.log(` x is bigger`)
}else if(x<y){
    console.log(` y is bigger`)

}else{
    console.log(` there both are the sames`)


}



// ex2 chiwaea
let newDog = `Chihuahua`
console.log(newDog.length)
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())




if(newDog==`Chihuahua`){
 console.log(`I love Chihuahuas, it’s my favorite dog breed`)
}else{
 console.log(`I dont care, I prefer cats`)

}




// Exercise 3: Even Or Odd

let number =parseInt(prompt("please enter a number"))
if(typeof number=="number"){
    if(number%2==0){
        console.log(`x is an even number`)
    }else{
        console.log(`x is an odd number`)

    }
}else{
    console.log(`x is not a number`)

}


// Exercise 3: Even Or Odd
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]

switch (users.length) {
    case 0:
        console.log(` no one is online`)
    break;
    case 1:
        console.log(`${users[0]} is online`)
    break;
    case 2:
        console.log(`${users[0]} and ${users[1]} are online`)
        
    break;
    default:
        console.log(`${users[0]} and ${users[1]} + ${users.length-2} more users are online`)

    break;
}


// 1. Write a JavaScript for loop that will iterate from 0 to 15. 
// For each iteration, it will check if the current number is odd or even, 
// and display a message to the screen.
let array = []

for (let index = 0; index < 15; index++) {
    array.push(index)
}


array.forEach(element => {
    if(element%2==0){
        console.log(`${element} is odd`)
    }else{        
        console.log(`${element} is even`) 
    }
});

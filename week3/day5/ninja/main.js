// Exercise 1 : Checking The BMI

// Create two objects, each object should hold a persons details. Here are the details:
let user1 = {
    FullName: "John",
    Mass: 75,
    Height: 180,
    getIbm : ()=>user1.Mass/Math.pow(user1.Height, 2)
}

let user2 = {
    FullName: "Jane",
    Mass: 55,
    Height: 165,
    getIbm : ()=>user2.Mass/Math.pow(user2.Height, 2)
}


highestBMI =  ()=> user1.getIbm() > user2.getIbm() ? user1 : user2


console.log(`the highest BMI is ${highestBMI().FullName}'s`)


// Exercise 2 : Grade Average
let notes = [90,76,89,54,34,87,90,76,89,79]
let notes2 = [25,25,25,25,25,45,45,45,45,79]

// Create a function called findAvg(gradesList) that takes an argument called gradesList.
// Your function must calculate and console.log the average.
// If the average is above 65 let the user know they passed
// If the average is below 65 let the user know they failed and must repeat the course.
// Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
// Hint One function must call the othe
function findAvg(gradesList){
    function adder(total, value) {
        return total + value;
    }

    return gradesList.reduce(adder)/gradesList.length

}

function  coursePassed (average) {
    let message  = average>=65?"you passed" :  "you need to repeat the course"
    console.log(message)
}

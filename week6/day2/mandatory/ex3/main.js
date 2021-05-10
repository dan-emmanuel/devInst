let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Check if this array includes the color “Violet”.
console.log(colors.includes("Violet"))
console.log(colors.some(el=>el=="Violet"))


// Write a JavaScript program that displays the colors in the following order 
// : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…


colors.forEach((element,ind) => {
    console.log(`${ind}# choice is ${element}.`)
});
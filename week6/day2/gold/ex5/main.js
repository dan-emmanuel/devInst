const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';


let ToTrim = startLine.indexOf("||")+3
console.log(ToTrim)
turtle =turtle.padStart(ToTrim)
rabbit =rabbit.padStart(ToTrim)


turtle = turtle.trim().padEnd(9, '=')
// remove all blanks 
// add = form the end of the string upt the string.length==9
console.log(startLine)
console.log(turtle)
console.log(rabbit)


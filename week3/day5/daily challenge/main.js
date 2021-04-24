// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, 
let text =""
for (let index = 0; index < 6; index++) {
    text+="*"
    console.log(text)
}
// then by using two nested for loops (Nested means one inside the other - check out “nested for loops” on Google).
for (let i = 0; i < 6; i++) {
    let text =""
    for (let j = 0; j <=i; j++) {
        text+="*"
    };
    console.log(text)
}
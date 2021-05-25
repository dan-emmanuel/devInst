
// ex1

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// ['bread',"carrot", "potato", 'chicken',"apple", "orange"]
// ------2------
const country = "USA";
console.log([...country]);
// ["USA"]
// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
// [undefined,undefined]


// ex2
let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];



// Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)
console.log(users.map(e=>`Hello ${e.firstName}`))


// Using the filter() method, congratulate only the Full Stack Residents.
console.log(users.filter(e=>e.role==="Full Stack Resident"))


// ex3

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// Use the reduce() method to combine all of these into a single string.
let reducer = (accumulator, currentValue) => `${accumulator} ${currentValue}`
console.log(epic.reduce(reducer,""))


// Exercise 4 : Employees #2


let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
// Use the filter() method to congratulate the students that passed the course.

reducer = (accumulator, currentValue) => `${accumulator}, ${currentValue.name}`


console.log(student.filter(e=>e.isPassed).reduce(reducer,"Congratulations to "))
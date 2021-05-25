// ex1
const letters = ['x', 'y', 'z', 'z'];
let letterObjectFor  = {}
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  letterObjectFor[element] = index
}
console.log(letterObjectFor)

let letterObjectForReduce = letters.reduce((previousValue, currentValue,index)=>{previousValue[currentValue] = index;return previousValue },{})
console.log(letterObjectForReduce)

// ex2
const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },
];

let gameInfoNames = gameInfo.map(e=>`${e.username}!`)

let gameInfoRed  = gameInfo.filter(e=>e.team=="red")

console.log(gameInfoNames,gameInfoRed)



const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];

let sum = data.reduce((previousValue,current)=>previousValue+current.age,0)
console.log(sum)

const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '

let userEmailValid = userEmail3.split(' ').join('');

console.log(userEmailValid)



let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

let newUser = users.map(e=>{return {[`${e.firstName} ${e.lastName}`]:e.role}})

console.log(newUser)



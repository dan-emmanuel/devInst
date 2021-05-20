let array = [1,2,3,4]

let twoMultiply  = (array)=>{
  let newArray = []
  array.forEach(element => newArray.push(element*2));
  return newArray
}
console.log(twoMultiply(array))


let newArrray2 = array.map(x=>x*2)
console.log(newArrray2)


let users = ['eli','adam','galina','ziv'];

let usersMail = users.map(x=>`${x}@gmail.com`)
console.log(usersMail)


let arraNumbers =  [0,1,1,2,3,5,8]

function filterit(array){
  let filtered = []
  array.forEach(element => {
    if(element>3){filtered.push(element)}})
  return filtered 
}

console.log(filterit(arraNumbers))

let dragons  =  ['Tim', 'Johnathan', 'Sandy', 'Sarah',"alisa"];

let filternames = dragons.filter(el=> /sa/i.test(el))
console.log(filternames)

let employees = [
  {
      firstName: 'John',
      lastName: 'Doe',
      age: 27,
      joinedDate: 'December 15, 2017'
  },

  {
      firstName: 'Ana',
      lastName: 'Rosy',
      age: 25,
      joinedDate: 'January 15, 2019'
  },

  {
      firstName: 'Zion',
      lastName: 'Albert',
      age: 30,
      joinedDate: 'February 15, 2011'
  }
];

let older = employees.filter(el=>el.age>26)
console.log(older)


let numbersArray =  [2, 5, 10,100]


let sum =  (array)=>{
  let toReturn = 0
  array.forEach(element => toReturn+=element);
  return toReturn
}

console.log(sum(numbersArray))

let summedArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(summedArray)



let account = [{dolars:2}, {dolars:5}, {dolars:10},{dolars:100}]

let reducedVal = account.reduce((accumulator, currentValue) => accumulator.dolars + currentValue.dolars,0)
console.log(reducedVal)
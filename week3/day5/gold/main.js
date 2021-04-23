// Exercise 1 : Building Management
console.log("// Exercise 1  : Building Management")
let building = {
    number_levels : 4,
    number_of_apt_by_level : {
        "1": 3,
        "2": 4,
        "3": 9,
        "4": 2,
    },
    name_of_tenants : ["Sarah", "Dan", "David"],
    number_of_rooms_and_rent:  {
        "Sarah": [3, 990],
        "Dan":  [4, 1000],
        "David": [1, 500],
    },
}


// Console.log the number of levels in the building.
console.log( `number of levels in the building ${building.number_levels}`)
// Console.log how many apartments are on levels 1 and 3.
console.log(`nbr of apartments in level 1 ${building.number_of_apt_by_level[1]}`,`nbr of apartments in level 3 ${building.number_of_apt_by_level[3]}`)
// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(`second tenant :${building.name_of_tenants[1]}`, `${building.name_of_tenants[1]}'s number room :${building.number_of_rooms_and_rent[`${building.name_of_tenants[1]}`][0]}` )

// Check if the sum of Sarah and David’s rent is bigger than Dan’s rent.
let  someOneRent = (name)=> building.number_of_rooms_and_rent[`${name}`][1]

let danPayLess = (someOneRent("Sarah")+someOneRent("David"))>someOneRent("Dan")
// If it is than increase Dan’s rent.(do not understand what to do)
if(danPayLess){
    building.number_of_rooms_and_rent[`Dan`][1] += (someOneRent("Sarah")+someOneRent("David"))-someOneRent("Dan")
}



// Exercise 2 :Divisible By Three
console.log("// Exercise 2 :Divisible By Three")

let numbers = [123, 8409, 100053, 333333333, 7]

numbers.forEach(element => console.log(!(element%3)));


// Exercise 3 : Playing With Numbers
console.log("// Exercise 3 : Playing With Numbers")

let age = [20,5,12,43,98,55],summ = 0,max = age[0];

for (let index = 0; index < age.length; index++) {
    const element = age[index];
    summ+=element;
    if(element>max)max=element;
}

console.log(`summ of ages = ${summ}`)
console.log(`max age = ${max}`)



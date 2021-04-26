// Exercise 1 : Age Difference
let yearOne = 1950,yearTwo = 1985 

let pers1 = {
    name:"one",
    yearBorn : yearOne
}

let pers2 = {
    name:"two",
    yearBorn : yearTwo
}


let younger = pers1.yearBorn>pers2.yearBorn?pers1:pers2


let oldest = younger==pers1?pers2:pers1
let currentYear = new Date().getFullYear()
let halfyoungerAge  = parseInt((currentYear-younger.yearBorn)/2)

let yearTofind = oldest.yearBorn+halfyoungerAge

console.log(`in ${yearTofind} ${oldest.name} was half age of current's ${younger.name}'s age` )

// Exercise 2 : Zip Codes

// 1stWay
let zip = prompt("your zip code ?")

// 1stWay

if((zip-9999)>0&&(zip-99999)<0){
    console.log(`this a correctZipCode`)
}else{
    console.log(`no correctZipCode`)

}
// second way
if(/^[0-9]{5}$/.test(zip)){
    console.log(`this a correctZipCode`)
}else{
    console.log(`no correctZipCode`)

}

// remove voyels
let word   = prompt("emter a word")
console.log(word.replace(/[aeiouAEIOU]/g, ""))
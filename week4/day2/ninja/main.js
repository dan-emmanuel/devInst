// Exercise 1: Random Number
// Instructions
// Get a random number between 1 and 100.
let randomed = (Math.floor(Math.random() * 101))

for (let index = 0; index < randomed; index++) {
	if(index%2===0)console.log(index)
	
}
// Console.log all even numbers from 0 to the random number.


// Exercise 2: Capitalized Letters
// Instructions
// Create a function that takes a string as an argument.
// Have the function return:
// The string but all letters in even indexes should be capitalized.
// The string but all letters in odd indexes should be capitalized.
// Note:
// Index 0 will be considered even.
// The argument of the function should be a lowercase string with no spaces.
// For example,

// capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']

function capitalize(string){
	let toReturn = [] 
	for (let index = 0; index < string.length; index++) {
		const element = string[index];
		if(index==0){
			toReturn[0] = element.toUpperCase()
			toReturn[1] = element.toLowerCase()

		}else{
			console.log(index%2==0)
			if(index%2==0){
				toReturn[0]+=element.toUpperCase()
				toReturn[1]+=element.toLowerCase()
			}else{
				toReturn[0]+=element.toLowerCase()
				toReturn[1]+=element.toUpperCase()
			}
		}
	}
	console.log(toReturn)
	return toReturn
}
capitalize("abcdef")
// Exercise 3 : Is Palindrome?
// Instructions
// Write a JavaScript function that checks whether a string is a palindrome or not.
// Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, e.g., madam, bob or kayak.
// palindrome
function IsPalendrome(string){
		let subStrinLength = Math.trunc(string.length/2)
		let first =string.substring(0, subStrinLength)
		let second = string.length%2==0?string.substring(subStrinLength, subStrinLength*2):(string.substring(subStrinLength+1, subStrinLength*2+1))
		for (let index = 0; index < first.length; index++) {
			if (first[index]!==second[first.length-index-1]) {
				return false 
			}
		}
		return true
	
}
console.log(IsPalendrome("123321"))
console.log(IsPalendrome("madam"))


// Exercise 4 : Biggest Number
// Instructions
// Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
// Note : This function should work with any array;
// Example:

const array = [-1,0,3,100, 99, 2, 99] ;// should return 100 
const array2 = ['a', 3, 4, 2]; // should return 4 
const array3 = []; // should return 0

function biggestNumberInArray(array){
	let toreturn
	for (let index = 0; index < array.length; index++) {
		const element = array[index];

		if(index==0){
			toreturn = typeof element=="number"?element:0
		}else{
			
			if(element>toreturn && typeof element=="number" )toreturn=element
		}
	
	}
	return  toreturn==undefined?0:toreturn
}
console.log(biggestNumberInArray(array))
console.log(biggestNumberInArray(array2))
console.log(biggestNumberInArray(array3))

// Exercise 5: Unique Elements
// Instructions
// Write a JS function that takes an array and returns a new array with only unique elements.

// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]
// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]
function onlyOne(array){

	let toreturn = []
	array.forEach(element => {
		if(!(toreturn.includes(element)))toreturn.push(element)
	});
	return toreturn
}

console.log(onlyOne([1,2,3,3,3,3,4,5]))

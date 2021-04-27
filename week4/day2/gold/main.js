// Exercise 1 : Is_Blank
// Instructions
// Write a program to check whether a string is blank or not.
// console.log(isBlank('')); --> true
// console.log(isBlank('abc')); --> false

let  isBlank = (string)=> string==""

// Exercise 2 : Abbrev_name
// Instructions
// Write a JavaScript function to convert a string into an abbreviated form.

// console.log(abbrevName("Robin Singh")); --> "Robin S."
let  abbrevName = (string) => string.splice(string.indexOf(" "),string.length,".")


// Exercise 3 : SwapCase
// Instructions
// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example :
let SwapCase = (string)=>{
	for (let index = 0; index < string.length; index++) {
		const element = string[index];
		if(element==element.toUpperCase()){
			string=string.substring(0,index)+element.toLowerCase()+string.substring(index+1)
		}else{
			string=string.substring(0,index)+element.toUpperCase()+string.substring(index+1)
		}
	}
	console.log(string)
};
SwapCase("The Quick Brown Fox")
// if you input 'The Quick Brown Fox' 
// the output should be 'tHE qUICK bROWN fOX'.


// Exercise 4 : Omnipresent Value
// Instructions
// Create a function that determines whether an argument is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.
// To illustrate:

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// 3 exists in every element inside this array, so is omnipresent.
// Examples
let  isOmnipresent = (array,omni)=>{
	let finalReturn = true,index=0
	while (finalReturn&&index<(array.length-1)) {
	
		finalReturn = array[index].includes(omni)
		index++
	}
	console.log(finalReturn)
	return finalReturn
}

// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false

isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)
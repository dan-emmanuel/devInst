// Part I

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.

function infoAboutMe() {
  console.log(
    `Hi, I'm Dan, I'm 30 and i like sport, science and spend timme with familiy.`
  );
}

infoAboutMe();

// Part II

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with those arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

function infoAboutPerson(personName, personAge, personFavoriteColor) {
   console.log( `Hi, I'm ${personName}, I'm ${personAge} and my favorite color is ${personFavoriteColor}.`)
}

// infoAboutPerson("Dan", 30, "blue");


// Part III

// Add a parameter personHobbies to the function infoAboutPerson(personName, personAge, personFavoriteColor, personHobbies).
// The function should
// console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// console.log the person’s hobbies one by one (ie. loop through the array of hobbies).
// Call the function twice with those arguments:
// infoAboutPerson("David", 45, "blue", ["tennis", "painting"])
// infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])

function infoAboutPerson(personName, personAge, personFavoriteColor,hobbies) {
	console.log(hobbies)
	// hobbies.forEach((element) => {console.log(element)});
	console.log( `Hi, I'm ${personName}, I'm ${personAge} and my favorite color is ${personFavoriteColor}.`)

}
 
infoAboutPerson("David", 45, "blue", ["tennis", "painting"])
infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])


// Exercise 2 : Keyless Car
// Instructions
// Ask the user for their age, and save the value to a variable.
// Create a function called checkDriverAge() that will notify the user if they are permitted to drive. They must be at least 18 to drive.
// if the user is too young, alert “Sorry, you are too young to drive this car. Powering off”
// if the user is old enough, alert “You are old enough to drive, Powering On. Enjoy the ride!”
// if the user just turned 18, alert “Congratulations on your first year of driving. Enjoy the ride!”
// Call the function.
// Instead of using prompt to ask the user for their age, have the checkDriverAge() function accept an argument age.

let driverAge = parseInt(prompt("How old are you ?"))

function checkDriverAge (age){
	let message
	if(age<18){
		message = "Sorry, you are too young to drive this car. Powering off"
	} else if(age>18){
		message = "You are old enough to drive, Powering On. Enjoy the ride!"
	}else{
		message = "Congratulations on your first year of driving. Enjoy the ride!"
	}

	console.log(message)
}


checkDriverAge(driverAge)

// Exercise 3: Odd Or Even
// Instructions
// Create a function called checkNumber() that takes no parameter.
// In the function, loop through numbers from 0 to 100.
// Add an if/else block
// If the number is even, console.log "the number <number> is even"
// Else, console.log "the number <number> is odd"
// Call the function
function checkNumber(){

	for (let number = 0; number <= 100; number++) {
		if(number%2==0){
			console.log(`${number} is an even number`)
		}else{
			console.log(`${number} is an odd number`)
	
		}
	
	}
		
}

checkNumber()

// Exercise 4: Find The Numbers Divisible By 23
// Instructions
// Create a function call isDivisible() that takes no parameter.
// In the function, loop through numbers from 0 to 500.
// Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers divisible by 23.
	// function isDivisible (){
	// 	let toReturn = []
	// 	console.log(toReturn)

	// 	for (let number = 0; number <= 500; number++) {
	// 		if(number%23==0)toReturn.push(number)
			
	// 	}
	// 	console.log(toReturn)
	// 	console.log(toReturn.reduce((accumulator, currentValue) => accumulator + currentValue))
	// }

	// isDivisible()
// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313


// Bonus: Add a parameter divisor to the function.

function isDivisible (divisor){
	let toReturn = []
	console.log(toReturn)

	for (let number = 0; number <= 500; number++) {
		if(number%divisor==0)toReturn.push(number)
		
	}
	console.log(toReturn)
	console.log(toReturn.reduce((accumulator, currentValue) => accumulator + currentValue))
}

isDivisible(2)


// isDivisible(divisor)

// Example:
// isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
// isDivisible(45) : Console.log all the numbers divisible by 45, and their sum


// Exercise 5 : Amazon Shopping
// Instructions

// Create a function called checkBasket().
// It should:
// prompt the user for an item
// let the user know if the item is in the basket
// Hint: Use the in keyword inside the conditional

let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}

function checkBasket(){
	if(prompt("what's your article ?").toLowerCase() in amazonBasket){
		console.log("you already got it in your basket")
	}else{
		console.log("this article is not yet into your basket")
	}
}
// Exercise 6 : What’s In My Wallet ?
// Instructions
// Given a item price and an array representing the amount of change in your pocket, determine whether or not you can afford the item.
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// Quarters  = 0.25
// Dimes = 0.10
// Nickels = 0.05
// Pennies = 0.01
// To illustrate:
// changeEnough([25, 20, 5, 0], 4.25) should return true, 
// since having 25 quarters, 
// 20 dimes, 
// 5 nickels 
// and 0 pennies 
// gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

// Examples

// changeEnough([2, 100, 0, 0], 14.11) ➞ false
// changeEnough([0, 0, 20, 5], 0.75) ➞ true

function changeEnough(arr,comparator){
	let totalAmount = 0,currentValue
	arr.forEach((element,index) => {
		switch (index) {
			case 0:
				currentValue = 0.25
			break;
			case 1:
				currentValue = 0.10
			break;
			case 2:
				currentValue = 0.05
			break;
			default:
				currentValue = 0.01
			break;
		}
		totalAmount += element&currentValue

	});

	return comparator-currentValue>0
}


// Exercise 7 : Shopping List
// Instructions

// Add the stock and prices objects to your js file.
// Create an array called shoppingList with the following  items: “banana”, “orange”, and “apple”.
// It means that you have 1 banana, 1 orange and 1 apple in your cart.
// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock.
// If the item is in stock find out the price in the prices object.
// Call the myBill() function.
// Bonus: If the item is in stock, decrease the item’s stock by 1
let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList = ["banana","orange","apple"]
function myBill (){
	let billAmount = 0
	shoppingList.forEach(element => {
		if(stock[element]>0){
			billAmount+=prices[element]
			stock[element]--
		}
	});
	return billAmount
} 

console.log(myBill())

// Exercise 8 : Tips
// Instructions
// John created a simple tip calculator to help calculate
//  how much to tip when he and his family go to restaurants.

// The calculator has the following rules:
// 1. Tip 20% when the bill is less than $50,
// 2. Tip 15% when the bill is between $50 and $200,
// 3. Tip 10% if the bill is more than $200.

// Ask John for the amount of the bill.
// Create the program explained above.
// In the end, John would like to know:
// Tip amount.
// Final bill (bill + tip).
// (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

function calculator (bill){
	let factor = 0.2
	if(bill>50){
		factor-=0.05
	}
	if(bill>200){
		factor-=0.05
	}

	let tipAmount = (bill*factor).toFixed(2)
	let finalBill = bill+tipAmount
	console.log(tipAmount)
	console.log(finalBill)

}
calculator(500)


// Exercise 9 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.
// Define a function called planeRideCost().
function hotelCost(numberNights){
	numberNights = parseInt(numberNights)
	let hotelCost = 140
		if(isNaN(numberNights)){
			return false
		}else{
			return hotelCost *=numberNights 
		}
}
	
// It should ask the user for their destination.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$
// If the user doesn’t answer or if the answer is not a string, ask again.
function planeRideCost(dest){
	dest = dest.toLowerCase()
		switch (dest) {
			case "london":
				planeCost =183
			break;
			case "paris":
				planeCost =220
			break;
			case "":
				planeCost = false
			break;
		
			default:
				planeCost =300
			break;
		}
	return planeCost
}
// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.
function rentalCarCost(dayRent){
	dayRent = parseInt(dayRent)
	if(isNaN(dayRent)){
		return false
	}else{
		return dayRent<10?dayRent*40:dayRent*40*0.95
	}
}

(function totalVacationCost(){
	let totalSteps = [
					[hotelCost,"how many night will you stay ?"],
					[planeRideCost,"where do you want to go ?"],
					[rentalCarCost,"how many day will you rent the car ?"]
				],totalAmount=0,lastval
	
	totalSteps.forEach((element)=>{
		do {
			lastval = element[0](prompt(element[1]))
		} while (lastval==false);
		console.log(lastval)
		totalAmount +=lastval
	})
	console.log(totalAmount)
	return totalAmount
})()
// Define a function called totalVacationCost() 
// that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost.
// Call the function totalVacationCost()
// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function.
// Create a global variable called bankAmount which value is the amount of 
// money currently in your account.
let bankAmount = 1000

// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
const vat = 17/100

// Create an array with all your monthly expenses - both positive and negative 
// (money made and money spent).
// Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
let spent = [34,17,15,-66,-80,-500,776]

// Create a program that modifies the expenses (ie. the expenditures, ie. 
// the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.

// first way
spent.forEach((element,index) => {
    element>0?bankAmount+=element:bankAmount+=element*(1+vat)
});

console.log(bankAmount)

// secondWay
bankAmount = 1000
spent.forEach((element,index,array) => {
    if(element<0){
        array[index] += element*vat
    }
    bankAmount+=array[index]

});
console.log(bankAmount)

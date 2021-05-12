// Create a function called calculateTip() that takes no parameter.

// Create a variable called billAmount that fetches the value of the input,
//  which id is billAmt (check the HTML file) –> It’s the amount of the bill.
// Create a variable called serviceQuality that fetches the value of the input,
//  which id is serviceQual (check the HTML file) –> It’s the quality of the service.

// Create a variable called numberOfPeople that fetches the value of the input, 
// which id is numOfPeople (check the HTML file) –> It’s the number of people sitting at the table.

// Create a condition :
// If serviceQuality is equal to zero, or billAmount is empty, alert the user to enter these values.
// Create another condition after the first one :

// If the input numberOfPeople is empty or is smaller than 1, 
// set a default value of 1 to numberOfPeople and make sure that the tag which id is each, 
// is not displayed (check the end of the HTML file).

// Create a variable named total: the value should be 
// ( billAmount * serviceQuality ) / numberOfPeople 
// (the outcome is the average tip each person should pay)

// Use the toFixed method to round total to two decimal points.

// Add the CSS property “display:block” to the tag which id is totalTip.

// Display the variable total in the tag which id is tip

function calculateTip() {
    let billAmount = document.querySelector(`#billamt`).value

    let serviceQual = document.querySelector(`#serviceQual`).value
    
    let numberOfPeople = document.querySelector(`#peopleamt`).value
    console.log(parseInt(serviceQual))
    console.log(serviceQual)

    console.log(document.querySelector(`#billamt`))

    if(parseInt(billAmount)==0||serviceQual==""){
        alert("please feed up the service quality and the bill amount")
    }
    if(numberOfPeople==0||numberOfPeople<1){
        document.querySelector(`#peopleamt`).value=1
        document.querySelector(`#each`).display="none"
    }
    let total = (( billAmount * serviceQual ) / numberOfPeople).toFixed(2)

    document.querySelector("#totalTip").display="block"
    
    document.querySelector("#tip").textContent = total

}

document.querySelector("#calculate").addEventListener("click",calculateTip)
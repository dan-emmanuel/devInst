

let tries = 0
function test(userNumber,computerNumber) {
    console.log(computerNumber)
    tries++
    if(tries<3){
        if(parseInt(userNumber)==computerNumber){
            alert ("WINNER")
            return true
        }else if(parseInt(userNumber)>computerNumber){
            userNumber = test(prompt ("Your number is bigger then the computer’s, guess again"),computerNumber)
        }else{
            userNumber = test(prompt ("Your number is smaller then the computer’s, guess again"),computerNumber)
        }
    }else{
        alert ("out of chances")
    }

}




function playTheGame() {
    let letsPlay = confirm ("would like to play the game")
    if(!letsPlay){
        alert ("No problem, Goodbye")
    }else{
        
        function isRelevantNumber(userNumber){
     
            if(isNaN(parseInt(userNumber))){
                isRelevantNumber(prompt ("Sorry Not a number, try again"))
                return false
            }else if(parseInt(userNumber)<0 || parseInt(userNumber)>10){
                isRelevantNumber(prompt ("Sorry it’s not a good number, try again"))
                return false
            }else{
                let computerNumber  = Math.floor(Math.random() * 11)
                test(userNumber,computerNumber)
            }
        }
        isRelevantNumber(prompt("enter a number between 0 and 10 "))
    }
}


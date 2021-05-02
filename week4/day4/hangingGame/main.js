String.prototype.replaceAt = function(index, replacement){
	return `${this.substr(0, index)}${replacement}${this.substr(index + replacement.length)}`;

}

// Prompt player 1 for a word. The word must have a minimum of 8 letters. 

let player1Word 

do {
	player1Word = prompt("Write your word")
} while (player1Word.length<8);

// Present the word in the console with stars (********).
let toShow = ""
while (toShow.length<player1Word.length)toShow+="*"
console.log(toShow)
// At this point continuously prompt player 2 for a letter.
// If the letter is in the word chosen by player 1, 
// display the word in stars again but with the correct letter (*****t**).
// If the letter appears in the word multiple times, make sure it is seen in all the correct places when showing the stars with the correct guesses (***t**t*).
// If player 2 guesses incorrectly 10 times display a message in the console saying YOU LOSE.
// Show a list of all the guesses after each turn. In your code prevent player 2 from guessing the same letter twice.
// If player 1 wins, display a message that says CONGRATS YOU WIN.
let tries = 1
while (toShow.includes("*")&&tries<10){
	let player2Leter = prompt("What's your letter ?")
	if(toShow.includes(player2Leter)){
		console.log(`you've already try ${player2Leter}`)
	}else{
		for (let index = 0; index < player1Word.length; index++) {
			const element = player1Word[index];
			if(element==player2Leter)toShow = toShow.replaceAt(index,player2Leter)
		}
	}
	
	console.log(`this is your ${tries}${tries==1?"st":tries==2?"nd":tries==3?"rd":"th"} try`)

	console.log(toShow)

	



	tries++
}

if(!toShow.includes("*")){
	console.log(`congatulation you won !`)
}else{
	console.log(`sorry you lost the word you were looking for is : ${player1Word}`)
}
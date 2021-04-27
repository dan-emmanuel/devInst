// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

// stars and words

// Hint
// The number of stars that wraps the sentence, must depend on the length of the longest word.


// Requirements
// To do this challenge you only need Javascript(No HTML and no CSS)





function feedArray (numberofword){
	let arrayOfWords = []
	for (let index = 0; index < numberofword; index++) {
		arrayOfWords.push(prompt("what'syour next word ?"))
		
	}
	return arrayOfWords
}

function createTheFrame(array) {
	let todisplay = ``
	let longest = array.reduce((a, b)=>{
			return a.length > b.length ? a.length : b.length;
		}
	);
	while (todisplay.length<longest+4) todisplay+="*"
	todisplay+='\n';
	for (let index = 0; index < array.length; index++) {
		let toadd = ""
		toadd+='* '
		const element = array[index];
		toadd+=`${element}`
		while (toadd.length<longest+3) toadd +=' '
		toadd +=' *\n'
		todisplay+=toadd
	}
	let toadd=``
	while (toadd.length<longest+4) toadd+="*"
	todisplay+=toadd
	console.log(todisplay)

}
createTheFrame(feedArray(prompt("how many word in the frame ?")))
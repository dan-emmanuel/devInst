let allBooks = [
	{
		title:"Harry Potter",
		author : "JK Rowling",
		image :"./assets/hpot.jfif",
		alreadyRead : true
	},
	{
		title:"Sherlock holmes",
		author : "Sir Arthur Conan Doyle",
		image :"./assets/sherlo.jfif",
		alreadyRead : false
	},
	{
		title:"Germinal",
		author : "Emile Zola",
		image :"./assets/germ.jfif",
		alreadyRead : true
	},
	{
		title:"The fourmiz",
		author  :"Bernard Werber",
		image :"./assets/fourm.jfif",
		alreadyRead : true
	},

]

let table = document.createElement('table')
let thead = (document.createElement('thead'))
table.append(thead)
console.log(table)
let theadsText = ["title","author","image","Already Read"]
for (let index = 0; index < theadsText.length; index++) {
	const element = theadsText[index]
	let currentTh = document.createElement('th')
	let currentText =  document.createTextNode(element)
	currentTh.appendChild(currentText)
	thead.append(currentTh)
}
 let tbody = document.createElement("tbody")
table.append(tbody)

for (let index = 0; index < allBooks.length; index++) {
	let element = allBooks[index]
	let currentTr = document.createElement('tr')
	
	for (let j = 0; j < Object.keys(element).length; j++) {
		const element2 = allBooks[index][Object.keys(element)[j]];
		console.log(Object.keys(element)[j])
		console.log(allBooks)
		let currentTd = document.createElement('td')
		if(Object.keys(element)[j]=="image"){
			let image = document.createElement('img')
			image. src = `${element2}`
			image.width = `100`
			currentTd.append(image)
		}else if(Object.keys(element)[j]=="alreadyRead"){
			let checkbox = document.createElement('input')
			checkbox.type="checkbox"
			checkbox.checked=element2
			currentTd.append(checkbox)
		}else{
			let currentText =  document.createTextNode(element2)
			currentTd.appendChild(currentText)
		}
		
		
		currentTr.append(currentTd) 
	}
	tbody.append(currentTr)
}
document.querySelector('.listBooks').append(table)
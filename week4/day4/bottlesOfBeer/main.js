

let numberOfBottles = prompt(`how many bottles on the wall ??`)
let toRemove = 1
while (numberOfBottles>0) {
	console.log(`${numberOfBottles} bottles of beer on the wall \n
${numberOfBottles} bottles of beer \n`)

	toRemove = (numberOfBottles-toRemove)>0?toRemove:numberOfBottles

	console.log(`Take ${toRemove} down, pass ${toRemove==1?`it`:`them`} around`)
	numberOfBottles -=toRemove
	console.log(numberOfBottles>0?`${numberOfBottles} bottles of beer on the wall`:`no more bottles of beer on the wall`)
	toRemove+=1
	
}


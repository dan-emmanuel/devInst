let arr  = [1,2,10,5,4];

let arrMet1 = []
let arrMet2 = []


for (let index = 0; index < arr.length; index++) {
	const element = arr[index];
	arrMet1.push(element*2)
}


arr.forEach(element => {arrMet2.push(element*2)});


// const arrMet3 = arr.map(x => x * 2);



console.log(arrMet1,arrMet2)





let arr2 = ['eli','sharon','john']

arr2.forEach((el,ind,arr)=>arr[ind] = `${el}@gmail.com`)
console.log(arr2)


array.forEach(element => {
	
});
let icecreamShop = {
	address : "Tel Aviv",
	dateOfCreation : 1987,
	flavours : ["vanilla", "chocolate", "caramel"],
	scoops : [1, 2, 3, "bucket"],
	employees : {
		names : ["David", "John"],
		salary : [2000, 1800],
		currency : "$"
	}
};

console.log(icecreamShop.employees.names[1])
let johnPosition = icecreamShop.employees.names.indexOf("John")
console.log(`John has a salary of ${icecreamShop.employees.currency}${icecreamShop.employees.salary[johnPosition]}`)



icecreamShop.employees.names.push("franck")
icecreamShop.employees.names.salary(2500)


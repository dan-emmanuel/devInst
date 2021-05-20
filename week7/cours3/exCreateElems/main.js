let employees = `{
    "status":"ok",
    "employees": [
        {
            "firstName": "John",
            "lastName": "Doe",
            "age": 27,
            "joinedDate": "December 15, 2017"
        },

        {
            "firstName": "Ana",
            "lastName": "Rosy",
            "age": 25,
            "joinedDate": "January 15, 2019"
        },

        {
            "firstName": "Zion",
            "lastName": "Albert",
            "age": 30,
            "joinedDate": "February 15, 2011"
        }
    ]
}`;





let currentEmployee = (obj)=>{
    let toReturn = `<div>`
    for (const property in obj) {
        toReturn+= `<p> ${property} : ${obj[property]}</p> `
        
    }
    toReturn+=`<br> <br> </div>`
    return toReturn
}
let DomCreator = (array,employeesAsObj)=>array.reduce((accumulator, currentValue)=>`${accumulator} ${currentEmployee(currentValue)}`,`${currentEmployee(employeesAsObj.employees[0])}`)
let insertEmployees = (employeesObj =JSON.parse(employees) ,array = JSON.parse(employees).employees)=>{
    
    document.querySelector(`#employees`).innerHTML=DomCreator(array,employeesObj)
}

let filterEmployee = (name,employeesAsObj)=>employeesAsObj.employees.filter(e=>e.firstName.toLowerCase().includes(name.toLowerCase()))

let insertSearched = (e)=>{
    let employeesAsObj = JSON.parse(employees)
    let searchedVal = document.querySelector(`#searchedValue`).value
    insertEmployees(employeesAsObj,filterEmployee(searchedVal,employeesAsObj))
}

document.querySelector(`#generator`).addEventListener(`click`,()=>insertEmployees())



document.querySelector(`#search`).addEventListener(`click`,insertSearched)

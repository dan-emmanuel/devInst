let shoppingList=[]


let form = document.createElement('form')

let inputText  = document.createElement("input")
inputText.type="text"
let button  = document.createElement("button")
let textButton = document.createTextNode("AddItem")
button.appendChild(textButton)


form.append(inputText)
form.append(button)

document.querySelector("#root").append(form)


form.addEventListener("submit",e=>{
    e.preventDefault();
    shoppingList.push(inputText.value)
    inputText.value=""
    console.log(shoppingList)
})


let clearAllBut = document.createElement("button")

clearAllBut.appendChild(document.createTextNode("Clear all"))
document.querySelector("#root").append(clearAllBut)


clearAllBut.addEventListener("click",e=>{
    inputText.value=""
    shoppingList=[]
})
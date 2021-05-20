let input = document.querySelector("#input")
let submiter = document.querySelector("#submiter")
let shower = document.querySelector("#shower")


let array = []


function controller (e){
  array.push(input.value)
  console.log(array)
  showerEval(array)
  input.value = ''
}


function showerEval(params) {
  shower.innerHTML =  params.reduce((accumulator, currentValue) => accumulator + `<div>${currentValue}</div>`,``)
}



submiter.addEventListener("click",controller)
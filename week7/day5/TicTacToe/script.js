const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]
let occurs = {}
let boxs = document.querySelectorAll(`.box`)
let winnerModal = new bootstrap.Modal(document.getElementById('winnerModal'))
let newGame = document.querySelector(`#newGame`)
let elms = []
let positions = () => elms.map(e=>e.textContent)
let xpositions = () => positions().map((e,index)=>{if(e=="X"){return index}}).filter(e=>e!=undefined)
let oPosition = () => positions().map((e,index)=>{if(e=="O"){return index}}).filter(e=>e!=undefined)
let getBestNextMove = ()=>{
  let xposts = xpositions()
  let bestNexMove = winCombos.filter(e=>!xposts.some(e2=>e.includes(e2)))
  if(oPosition().length>0){
    bestNexMove = bestNexMove.filter(e=>oPosition().every(el=>e.includes(el)))
  }
  console.log(bestNexMove)
  let counts = {};
  for (let i = 0; i < bestNexMove.length; i++) {
      let currentArr = bestNexMove[i]
      currentArr.forEach(element => {
        if(!counts.hasOwnProperty(element)){
          counts[element] = {}
          counts[element].position=element
          counts[element].arr = bestNexMove.filter(e=>e.includes(element))
        }
      });
  }
  counts = Object.values(counts)
  let bestMatch 
  let previousLength = 0
  counts.forEach(element => {
    if(element.arr.length>previousLength&&!(oPosition().includes(element.position))){
      previousLength = element.arr.length
      bestMatch = element
    }
  });
  if(bestMatch==undefined){
    // !je suis laaaaaaaaaaaaaaaaaaaaaaaaaa
  }
  return bestMatch
}
let  arrayEquals = (a, b)=>{
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}

let winnerShower = (e) =>{ 
  document.querySelectorAll(`.modal-body`).textContent = e
  winnerModal.show()

  newGame.classList.remove("d-none")
  for (let index = 0; index < boxs.length; index++) {
    boxs[index].onmousedown= e=> false
  }
  for (let index = 0; index < boxs.length; index++) {
    const element = boxs[index];
    element.onmousedown = (e)=>{
      
      let currentElem = e.target
      currentElem.textContent="X"
      if(winCombos.some(e=>arrayEquals(e,xpositions()))){
        winner
      }else{
        boxs[getBestNextMove().position].textContent = "O"
      }
    }
    
  }
}

newGame.onmousedown = (e) =>{ 
  for (let index = 0; index < boxs.length; index++) {
    boxs[index].textContent = ""
  }
  newGame.classList.add("d-none")
}

for (let index = 0; index < boxs.length; index++) {
  const element = boxs[index];
  elms.push(element)

  element.onmousedown = (e)=>{
    let currentElem = e.target
    currentElem.textContent="X"
    if(winCombos.some(e=>arrayEquals(e,xpositions()))){
      winnerShower("Good Job You Won!")
    }else{
      boxs[getBestNextMove().position].textContent = "O"
      if(winCombos.some(e=>arrayEquals(e,oPosition()))){
        winnerShower("Sorry the computer Won, try again")
      }
    }
  }
  
}
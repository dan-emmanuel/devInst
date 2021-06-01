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
  let bestNextMovesMatchAllO = [...bestNexMove]
  if(oPosition().length>0){
    bestNextMovesMatchAllO = bestNextMovesMatchAllO.filter(e=>oPosition().every(el=>e.includes(el)))
  }
  let counts = {};
  for (let i = 0; i < bestNextMovesMatchAllO.length; i++) {
      let currentArr = bestNextMovesMatchAllO[i]
      currentArr.forEach(element => {
        if(!counts.hasOwnProperty(element)){
          counts[element] = {}
          counts[element].position=element
          counts[element].arr = bestNextMovesMatchAllO.filter(e=>e.includes(element))
        }
      });
  }
  counts = Object.values(counts)
  let bestMatch 
  let previousLength = 0
  counts.forEach(element => {
    if(element.arr.length>previousLength&&!(oPosition().includes(element.position))){
      previousLength = element.arr.length
      bestMatch = element.position
    }
  });
  console.log(bestMatch)
  if(bestMatch==undefined){
    bestNexMove.forEach(element => {
      let bestChances = bestNexMove.filter(e=>oPosition().some(el=>e.includes(el)))
      console.log(bestChances.length)
      if(bestChances.length==0){
        for (let index = 0; index < boxs.length; index++) {
          const element = boxs[index];
          if(element.textContent==``){
            bestMatch = index
            break;
          }
        }
        console.log(bestMatch)

      }else{
        bestMatch =bestChances[0].filter(e=>!oPosition().includes(e))[0]
        console.log(bestChances[0].filter(e=>!oPosition().includes(e))[0])

      }

    });
    if(bestMatch==undefined){
      return("end")
    }
    // !je suis laaaaaaaaaaaaaaaaaaaaaaaaaa
  }
  console.log(bestMatch)

  return bestMatch
}
let  matchAwin = (array1,array2)=>{
  let match = 0
  array1.forEach(element => {
    if(array2.includes(element)){match++}
  });
  return match>2

}

let winnerShower = (e) =>{ 
  document.querySelector(`.modal-body`).textContent = e
  winnerModal.show()

  newGame.classList.remove("d-none")
  for (let index = 0; index < boxs.length; index++) {
    boxs[index].onmousedown= e=> false
  }
  setUpTheGame()
}

newGame.onmousedown = (e) =>{ 
  for (let index = 0; index < boxs.length; index++) {
    boxs[index].textContent = ""
  }
  newGame.classList.add("d-none")
}


let setUpTheGame = ()=>{
  for (let index = 0; index < boxs.length; index++) {
    const element = boxs[index];
    elms.push(element)
  
    element.onmousedown = (e)=>{
      let currentElem = e.target
      currentElem.textContent="X"
      if(winCombos.some(e=>matchAwin(e,xpositions()))){
        winnerShower("Good Job You Won!")
      }else{
        let index = getBestNextMove()
        index=="end"
        ? winnerShower("The game is tied")
        :boxs[index].textContent = "O"
        if(winCombos.some(e=>matchAwin(e,oPosition()))){
          winnerShower("Sorry the computer Won, try again")
        }
      }
    }
    
  }
}
setUpTheGame()
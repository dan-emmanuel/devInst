let adder  = document.querySelector(`#addAbox`)
let container = document.querySelector(`#container`)
let colors  = ["00DECF"]
let addAbox = ()=>{
  let newDiv = document.createElement("div")

  let  generateRandomColor =()=>{
    let  randomColor
    do {
      randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    } while (colors.includes());
    return randomColor;
    //random color will be freshly served
  }
  let currentColor = generateRandomColor()
  colors.push(currentColor)
  newDiv.className = "box"
  console.log(`#${currentColor}`)
  newDiv.style.backgroundColor = `#${currentColor}`
  container.append(newDiv)
  console.log(newDiv)

}




adder.addEventListener("click",addAbox)

let letterBox = document.querySelectorAll(".letterBox");
let topDif
let leftDif
for (let index = 0; index < letterBox.length; index++) {
  const element = letterBox[index];

  element.addEventListener("dragend",function (event) {
      let x = event.clientX ;
      let y = event.clientY  ;
      event.target.style.top = `${y-topDif}px`;
      event.target.style.left = `${x-leftDif}px`;
      event.target.style.position = "absolute"
    },
    false
  );
  
  element.addEventListener("mousedown",function (event) {
    let x = event.clientX ;
    let y = event.clientY  ;

    
    let targetLeft = event.target.getBoundingClientRect().left
    let targetTop  = event.target.getBoundingClientRect().top

    console.log("x",x)
    console.log("y",y)
    console.log("targetLeft",targetLeft)
    console.log("targetTop",targetTop)

    topDif = y-targetTop
    leftDif = x-targetLeft
  },
  false
);
}






let dots = document.querySelector("#dots")
setInterval(() => {
  let dotNumber = (dots.textContent.match(/\./g) || []).length
  if(dotNumber==3){
  
    dots.textContent = ""
  }else{
    dots.textContent= dots.textContent +"."
  }
  console.log(dotNumber)
}, 300);


let leters = document.querySelectorAll(".letter")

leters.forEach((element,index) => {

  if(index==0){element.style.opacity = "1"}


  setTimeout(() => {
    element.style.opacity = "1"
    setTimeout(() => {
      element.style.opacity = "0.5"
    }, 300);
    setTimeout(() => {
      element.style.opacity = "0"
    }, 660);
    setInterval(() => {
      element.style.opacity = "1"
      setTimeout(() => {
        element.style.opacity = "0.5"
      }, 300);
      setTimeout(() => {
        element.style.opacity = "0"
      }, 660);
    }, 300*(leters.length));
   
  }, 300*(index+1));
  
});
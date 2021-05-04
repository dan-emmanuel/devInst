// Create a function called getBold_items() that takes no parameter. 
// This function should collect all the bold items inside the paragraph.
// Create a function called highlight() that changes the color of all the bold text to blue.
// Create a function called return_normal() that changes the color of all the bold text back to black.
// Call the function highlight() 
// onmouseover (ie. when the mouse pointer is moved onto the paragraph), 
// and the function return_normal() 
// onmouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example


function getBold_items (){
   return  document.querySelectorAll("strong")
}

function highlight (e){
    console.log(e)
  for (let index = 0; index < getBold_items ().length; index++) {
      const element = getBold_items ()[index];
      element.style.color="blue"
  }  
}

function return_normal (e){
    for (let index = 0; index < getBold_items ().length; index++) {
        const element = getBold_items ()[index];
        element.style.color="black"
    }  
}
  

for (let index = 0; index < getBold_items ().length; index++) {
    const element = getBold_items ()[index];
    element.addEventListener("mouseover",highlight)
    element.addEventListener("mouseout",return_normal)

}
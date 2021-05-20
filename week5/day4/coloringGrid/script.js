
let colorizer = document.querySelectorAll(".colorizer")
let currentColor = "white"

for (let index = 0; index < colorizer.length; index++) {
    const element = colorizer[index];
    element.addEventListener('click',(e)=>{
        currentColor = e.target.style.backgroundColor
        console.log(currentColor)
    })
    
}
let mousedown = false
let grid2 = document.querySelector(".gid2")
grid2.addEventListener("mousedown", function(){
    mousedown = true;

})

grid2.addEventListener("mouseup", function(){
    mousedown = false;

})
let tocolor = document.querySelectorAll(".tocolor")
for (let index = 0; index < tocolor.length; index++) {
    const element = tocolor[index];
    element.addEventListener('mouseover',(e)=>{
        if(mousedown){
            e.target.style.backgroundColor = currentColor
        }
    })
    
}


document.querySelector('button').addEventListener('click',()=>{
    for (let index = 0; index < tocolor.length; index++) {
        const element = tocolor[index];
        element.style.backgroundColor = "white"
    }
})


function myMove (){
    let cube = document.querySelector('#animate')
    function moveTheCube() {
        let currentTop = parseInt(cube.style.top)
        currentTop=isNaN(currentTop)?0:currentTop
        currentTop+=10
        console.log(currentTop)
        cube.style.top = `${currentTop}px`
        cube.style.left =`${currentTop}px`
        if(currentTop==350){
            clearInterval(mover)
        }
    }
    let mover = setInterval(moveTheCube, 100)
}
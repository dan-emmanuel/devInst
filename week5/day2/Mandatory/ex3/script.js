function speherVol(e){
    e.preventDefault()
    let radisuval = document.querySelector(`#radius`).value
    if(! isNaN(radisuval)){
        console.log((3/4)*Math.PI*radisuval*radisuval*radisuval)
        document.querySelector(`#volume`).value = (3/4)*Math.PI*radisuval*radisuval*radisuval
    }
    
}
document.querySelector("form").addEventListener("submit",speherVol)
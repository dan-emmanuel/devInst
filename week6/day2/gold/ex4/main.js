let repeater = (string,time)=>{
    let toReturn=""
    for (let index = 0; index <time; index++) {
        toReturn+=string
    }
    return toReturn
}

console.log(repeater("ha!",3))
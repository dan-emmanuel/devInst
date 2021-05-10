let string_chop = (string,unit)=>{
    let toReturn = []

    for (let index = 0; index < string.length; index+=unit) {
        console.log(index)
        

        toReturn.push(string.slice(index,index+unit))
        
    }
    return toReturn
}

console.log(string_chop('w3resource',2));
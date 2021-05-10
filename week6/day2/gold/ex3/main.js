// Write a JavaScript function to remove: 
// null, 0, "", false, undefined and NaN 
// values from an array.


let remover =(toRemove)=>{
    whatToremove =[]
    for (let index = toRemove.length-1; index >= 0; index--) {
        element = toRemove[index]
        console.log(toRemove)
                console.log(index)
                console.log(element)
        switch (element) {
            case 0:
            case "":
            case false:
                


                toRemove.splice(index, 1)
            break;
        
            default:
                if(isNaN(element)){
                    toRemove.splice(index, 1)
                }
            break;
        }
        
    }
}


let array = [0,true,false,"",34567,"23456",NaN]
remover(array)
console.log(array)




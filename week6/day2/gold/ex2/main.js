let arrayRemover = (array)=>{
    array.forEach((element,index,array) => {
        if(index!=array.length-1){
            if(array.slice(index+1).includes(element)){
                array = array.splice(index, 1)
            }
        }else{
            if(array.slice(0,index-1).includes(element)){
                array = array.splice(index, 1)
            }
        }
    });
}
let array = [1,2,2,3,4,5,5,6,6,6,7,6]


arrayRemover(array)

console.log(array)
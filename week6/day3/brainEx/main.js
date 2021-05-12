// * Exercise
// * Sort any array using a for loop tip: use nested loop
// * Do not use the Array.sort method
// * For example:
// * Given this array [5,0,9,1,7,4,2,6,3,8]
// * result [9,8,7,6,5,4,3,2,1,0] or
// * [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// * hint - use a temporary VARIABLES


let array = [5,0,9,1,7,4,2,6,3,8]
let temp
function sorter (array,order){
    let checker = order=="asc" ?(a,b)=>a<b:(a,b)=>a>b
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
        for (let index2 = 0; index2 < array.length; index2++) {
            if(checker(array[index],array[index2])){
                temp = array[index]
                array[index] = array[index2]
                array[index2] = temp
            }
        }   
    }
}
sorter(array,"asc")
console.log(array)
sorter(array,"desc")
console.log(array)


let rows = [
    {name : "row1", array:[2,3,4]}, 
    {name : "row2", array:[1,5]}, 
    {name : "row3", array:[1,5]}, 
    {name : "row4", array:[1,2,3,4,5]}, 
    {name : "row5", array:[1,5]}, 
    {name : "row6", array:[1,5]}, 
    {name : "row7", array:[1,5]},
]

rows.forEach(element => {
    let currentRow = document.querySelectorAll(`.${element.name}`)
    for (let index = 0; index < currentRow.length; index++) {
        const toStar = currentRow[index];


        if(element.array.includes( index) ){
            toStar.innerHTML = "*"
        }
        
    }
});
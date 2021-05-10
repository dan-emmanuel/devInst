let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];


color.forEach((element,ind) => {
    console.log(`${ind+1}${ind>2?ordinal[0]:ordinal[ind+1]} choice is ${element}.`)
});
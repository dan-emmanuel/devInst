// Get the value of each of the inputs in the HTML file when the button is clicked.
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, 
// when clicked the button should change the story currently displayed 
// (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

let valsFunction = {
    libButton(id){
        return document.querySelector(`#${id}`).value
    },
    
    shuffle(key){
        return shuflesValues[key][Math.floor(Math.random() * shuflesValues[key].length)]
    }
}

let shuflesValues = {
    person : ["John","Rose","Robert"],
    verb : ["swim", "dance","hang out"],
    adjective : ["nice","smart","athletic"],
    noun : ["Jane","Francis","Mary"],
    place : ["swimming pool", "the mall", "the parc"]
}


function writeStory(e){
    document.querySelector(`#story`).innerHTML = `This is the story of ${valsFunction[e.target.id]("person")} that was ${valsFunction[e.target.id]("verb")}ing with a  ${valsFunction[e.target.id]("adjective")} friend called ${valsFunction[e.target.id]("noun")} at ${valsFunction[e.target.id]("place")}`
}





document.querySelector(`#lib-button,#shuffle`).addEventListener("click",writeStory)

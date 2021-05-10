const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },
 ];

 allNames = []
 allNamesMorethan5 = []

 let sum = 0

 gameInfo.forEach((element,index) => {

 
  allNames.push(`${element.username}!`)

  if(element.score>5)allNamesMorethan5.push(element.username)
  
  sum+=element.score
 });


 console.log(allNames)
 console.log(allNamesMorethan5)
 console.log(sum)

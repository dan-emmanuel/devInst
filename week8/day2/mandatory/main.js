// ex1
// when data sent they will appears in url the address bar in GET action
// ex2
// in POST action they will appears in the body of the request in the form-data part


// ex3
let marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
}

let jsonMarioGame = JSON.stringify(marioGame)

console.log(jsonMarioGame)




// let compareToTen = (number)=>{
//     return  new Promise((resolve, reject) => {
//         number<=10
//             ?resolve(number<10
//                 ?`${number} is smaller than 10`
//                 :`${number} is equal to 10`)

//             :reject(`${number} is smaller than 10`)
//       });
// }

// compareToTen(5)
//     .then(e=>console.log(e))
//     .catch(e=>console.log(e))
// compareToTen(10)
//     .then(e=>console.log(e))
//     .catch(e=>console.log(e))
// compareToTen(11)
//     .then(e=>console.log(e))
//     .catch(e=>console.log(e))


let capitalise = (array)=>{
    let arrayToReturn  = []
    return new Promise((resolve, reject) => {
      array.forEach(element => {
          if(typeof element!=="string"){
            return reject("not a string ");
          }else{
            arrayToReturn.push(element.toUpperCase())
          }
      });
      return resolve(arrayToReturn)
    }); 
}

let sortTheWords = (array)=>array.sort()

const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
const complicatedArray = ['cucumber', 44, true]

capitalise(arrayOfWords)
.then((e)=>console.log(sortTheWords(e)))
.catch((e)=>console.log(e))

capitalise(complicatedArray)
.then((e)=>sortTheWords(e))
.catch((e)=>console.log(e))



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
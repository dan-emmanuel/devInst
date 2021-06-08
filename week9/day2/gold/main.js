let makeAllCaps = async (array)=>{
  return await array.map(word=>{
    if(typeof word=="string"){
      return word.toUpperCase()
    }else{
      throw new Error(`${word} is not a word`)
    }
  })
}


let sortWords = async (array)=>{return await array.sort()}

arrayOfWords = ["avocado","tomato","cucumber"]
complicatedArray = [true,1,"mama"]

makeAllCaps(arrayOfWords)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.error(error))

makeAllCaps(complicatedArray)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.error(error))

// ex1

let compareToTen = (number)=>{
    return  new Promise((resolve, reject) => {
        number<=10
            ?resolve(number<10
                ?`${number} is smaller than 10`
                :`${number} is equal to 10`)

            :reject(`${number} is smaller than 10`)
      });
}

compareToTen(5)
    .then(e=>console.log(e))
    .catch(e=>console.log(e))
compareToTen(10)
    .then(e=>console.log(e))
    .catch(e=>console.log(e))
compareToTen(11)
    .then(e=>console.log(e))
    .catch(e=>console.log(e))


// ex2


// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.



//Create a promise that resolves itself in 4 seconds and returns a “success” string.
let errGen = true
const afterFour = new Promise((resolve,reject) => {
  if(!errGen){
    setTimeout(() => {
      resolve("success")
    }, 4000);
    
  }else{
    reject("Ooops something went wrong")
  }
})
.then(value=> console.log(value))
.catch(e=>console.log(e))




let  after = new Promise( (resolve,reject)=>{setTimeout(() =>errGen?reject("Ooops something went wrong"):resolve("success"),4000)});

Promise.resolve(after).then(success=(v)=> console.log(v), rej=(err)=>console.log(err))



let toReturn = ()=>{setTimeout(() =>{ return errGen?Promise.reject("Ooops something went wrong"):Promise.resolve("success")}, 4000)}
toReturn()



// ex3


Promise.resolve(3).then(e=>console.log(e))
Promise.reject("Boo").then(e=>{},e=>console.log(e))
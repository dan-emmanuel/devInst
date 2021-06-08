// ex1
fetch("https://swapi.dev/api/starships/9/")
    .then(response => response.json())
    .then(console.log);

    
let fetcher = async ()=>{
  let data = await fetch("https://swapi.dev/api/starships/9/")
  console.log(await data.json())
}

fetcher()

// ex2
function resolveAfter2Seconds() {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve('resolved');
      }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();
// will log "calling" and then  "resolved" after 2 sec
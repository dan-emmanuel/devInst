let formElem = document.getElementById('login-form')
let formData


formElem.addEventListener( "submit", (e)=>{
  e.preventDefault()
  formData = new FormData(formElem);
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: formData,
    mode: 'no-cors',
  }).then(e=>{
    console.log(e)
  })
  .catch(e=>{
    console.log(e)
  })
})



// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     return response.json()
//   })
//   .then(data=>{
//     console.log(data)
//   })
//   .catch(e=>{
//     console.log(e);
//   })

  let  fetcher = async ()=>{
   
    let response =await fetch('https://jsonplaceholder.typicode.com/users')
    
    let toreturn  = await response.json()
    return toreturn
  }

  fetcher().then(e=>{console.log(e)})
let register = document.querySelector(`#register`)
let login = document.querySelector(`#login`)



register.addEventListener(`submit`,(e)=>{
    e.preventDefault()

    let inputs = [...e.target.querySelectorAll('input')]

    let toSend={}
    inputs.forEach(element => {
        if(element.type!=`submit`){
            toSend[element.name]=element.value
        }
    });
    createUser(toSend)
    .then(e=>{

        document.querySelector(`#result`).textContent= e.name=="error"
        ?e.detail
        :"hello your account is now created"
    })
})



let createUser = async (toSend) => {
    const rawResponse = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(toSend)
    });
   return await rawResponse.json();
  
   
}



login.addEventListener(`submit`,(e)=>{
    e.preventDefault()

    let inputs = [...e.target.querySelectorAll('input')]

    let toSend={}
    inputs.forEach(element => {
        if(element.type!=`submit`){
            toSend[element.name]=element.value
        }
    });
    connection(toSend)
    .then(e=>{
        document.querySelector(`#result`).textContent=e.result=="success"
       ?`Hi ${e.username} welcome back again !`
       :"Usename is not registered"
    })
  
})


let connection = async (toSend) =>{
    const rawResponse = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(toSend)
    });
   return await rawResponse.json();
}




let userDiv  = ({username,name,email,id})=>{
    let currentUserDiv = document.createElement(`div`)
    currentUserDiv.style.border = "4px solid  blue",
    currentUserDiv.style.margin = "4px",
    currentUserDiv.style.width = "300px"

    let userimage = document.createElement("img")
    userimage.src = `https://robohash.org/${id}?size=200x200`
    let nameP = document.createElement("p")
    nameP.textContent = `name : ${name}`
    let usernameP = document.createElement("p")
    usernameP.textContent = `username : ${username}`
    let emailP = document.createElement("p")
    emailP.textContent = `email : ${email}`
    let ps = [userimage,nameP,usernameP,emailP]
    ps.forEach(e=>currentUserDiv.append(e))
    return currentUserDiv
}

let DomGen = (data)=>{
    let toPushto = document.querySelector(`#users`)
    data.forEach(element => {
        toPushto.append(userDiv (element))
    });
}

let getdata = ()=>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/users');
    // send the request
    xhr.send();
    xhr.responseType = "json";
    // triggers when getting the response
    xhr.onload = e=>DomGen(xhr.response)
}


 document.querySelector("button").addEventListener("click",getdata)

let data = window.location.search.substr(1).split('&').flatMap(e=>e.split("="))
let newDiv,p1,p2

let mainDiv =  document.querySelector(`#result`) 
for (let index = 0; index < data.length; index++) {
    const element = data[index];
   console.log(index%2)
    console.log(newDiv)
    if (index%2==0) {
         newDiv = document.createElement("div")

         p1 = document.createElement("span")
        p1.textContent = `${element} :`
        newDiv.append(p1)
    }else{
        p2 = document.createElement("span")
        p2.textContent = ` ${element} `
        newDiv.append(p2)
    }

    mainDiv.append(newDiv)


}


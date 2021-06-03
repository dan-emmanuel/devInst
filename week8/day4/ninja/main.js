


let getdata = (params)=>{
  var url = new URL("https://api.giphy.com/v1/gifs/search")
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    return fetch(url).then(e=>e.json()).then(result=>result.data)
}
let container =   document.querySelector(`#gifToShow`)
let createAllGif = (arr)=>arr.forEach(e=>container.append(createagif(e)));
let createagif = ({images:{original},title})=>{return Object.assign(document.createElement("img"),{alt:title,src:original.url} )}

let executeAfter = e=>{ 
  container.innerHTML=""
  createAllGif(e)
}


document.querySelector("#getACat").onsubmit  =(e)=> {
  e.preventDefault()
  console.log(e.target['cat'])
  getdata(params = {q:e.target['cat'].value,rating:"g",api_key:"hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"}).then(executeAfter)
}

document.querySelector(`#reseter`).onmousedown = e=>container.innerHTML=""



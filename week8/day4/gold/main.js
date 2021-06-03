

let getdata = (params)=>{
  var url = new URL("https://api.giphy.com/v1/gifs/search")
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    return fetch(url).then(e=>e.json()).then(result=>result.data)
}

let random = (arr)=>arr[Math.floor(Math.random() * arr.length)];
let createagif = ({images:{original},title})=>{return Object.assign(document.createElement("img"),{alt:title,src:original.url,width:"250"} )}
let executeAfter = e=>{ 
  let container =   document.querySelector(`#gifToShow`)
  container.innerHTML=""
  container.append( createagif(random(e)))
}


 document.querySelector("#gifGen").onmousedown  =(e)=> getdata(params = {q:"hilarious",rating:"g",api_key:"hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"}).then(executeAfter)







// ex1

let getdata = (params)=>{
  var url = new URL("https://api.giphy.com/v1/gifs/search")
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    return fetch(url).then(e=>e.json())
}
let logJson = (json)=>{console.log(json)}

getdata(  params = {q:"hilarious",rating:"g",api_key:"hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"}).then(logJson)
// ex2
getdata(  params = {q:"hilarious",rating:"g",api_key:"hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My",limit:10}).then(logJson)






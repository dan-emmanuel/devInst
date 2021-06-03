let form = document.querySelector('form')

form.onsubmit = (e)=>{
    console.log
    e.preventDefault()
    let data  = new FormData(e.target);
    let obj = {}
    for (var key of data.keys()) {
		obj[key] = data.get(key);
	}
    console.log(JSON.stringify(obj))
    
}


let callData = async ()=>{
    fetch('http://localhost:3000/getUsers', {
        
    })
    .then(response => {
        
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        }


        return Promise.reject(new Error(response.statusText));
    })
    .then(response => response.json()) // parses response to JSON
    .then(result => {
       console.log(result)
    })
    .catch(error => {
        // common error
        return null;
    });
}
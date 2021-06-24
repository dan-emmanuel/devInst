const axios = require('axios');
const users = async (lookfor)=>{
    try {
        let res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        // let regex = new RegExp(lookfor,i
        console.log(lookfor)
        return res.data
        // ?res.data.filter(e=>(e.name).toLowerCase().includes(lookfor.toLowerCase()))
        // :res.data

    }
    catch(e){
        console.log(e)
    }
}
module.exports= {
    user:users
}

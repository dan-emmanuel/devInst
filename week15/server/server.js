const express = require('express')
const app = express()
const knex = require('knex')
const cors = require ('cors')
app.use(cors())
let db = knex({
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'D@n3mm@nu3l',
      database : 'dvdrental'
    }
}); 


app.get('/getCountries', function (req, res) {
    
    db(`country`)
    .select("*")
    .orderBy('country', 'asc')
    .then(dbResp=>{
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(dbResp))
    })
    .catch(console.log)
      
})

app.get('/cities/:countriId', function (req, res) {
    
    
    let countryId = req.params.countriId
    db(`city`)
    .select("city_id","city")
    .orderBy('city', 'asc')
    .where('country_id', '=', countryId)
    .then(dbResp=>{
        console.log(dbResp)
        res.setHeader('Content-Type', 'application/json');
        res.send(dbResp)
    })
    .catch(console.log)
      
})
   
app.listen(5000)

  
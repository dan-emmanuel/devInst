const users = require('./module.js')
const http = require(`http`)
const express = require('express')
const app = express()
const bodyParser = require('body-parser')




app.use(`/`,express.static(`${__dirname}/public`))


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post("/answer", function (req, res) {
    // res.sendFile(`${__dirname}/public/index.html`)
    console.log( req.body)
    res.send(`123456`)
    
})
   
app.listen(3000)
// app.set(`port`,8000)

// app.listen(app.get(`port`))



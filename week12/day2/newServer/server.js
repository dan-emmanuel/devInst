const users = require('./getUsers.js')
const express = require('express')
const app = express()


app.use(`/`,express.static(`${__dirname}/public`))

app.get('/getUsers', function (req, res) {
   users.user().then(data=>res.send(data))
   
})
   
app.listen(3000)
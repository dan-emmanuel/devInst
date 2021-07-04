const express = require('express');
const  bodyParser = require('body-parser')
const app = express();
const knex = require('knex')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())



let db = knex({
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'D@n3mm@nu3l',
      database : 'loginEx'
    }
});



app.use(express.static(__dirname + '/public'));



app.post('/login', function(req, res) {
    db('users').select(`username`)
    .where (`username`,req.body.username)
    .andWhere(`password`,req.body.password)
    .then(result=>{
        console.log(result)
        result.length==1
        ?res.end(JSON.stringify({result:"success",username:result[0].username}))
        :res.end(JSON.stringify({result:"notRegister"}))
      
    })
});
  
app.post('/signup', function (req, res) {
    db('users').insert(req.body).returning('*')
    .then(result=>{
        res.end(JSON.stringify(result))
    })
    .catch(e=>{
        res.end(JSON.stringify(e))
    })
})

const server = app.listen(3000, ()=>{
    console.log('server is running at %s', server.address().port);
    
});


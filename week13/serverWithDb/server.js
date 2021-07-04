const knex = require('knex')

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



db(`country`)
.select("*")
.where({
    country:"Israel"
})
.then(res=>{
    console.log(res)
})
.catch(console.log)

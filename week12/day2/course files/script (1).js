const exp = require('express');
const bp = require('body-parser');
const app = exp();

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

app.use('/',exp.static(__dirname+'/public'))

app.get('/login',(req,res)=>{
  console.log(req.query);
  res.send({data:req.query.user})
  //auth user
  // res.sendFile(__dirname+'/public/about.html')
  // res.send(`hello ${req.query.username} and ${req.query.password}`)
})
app.post('/login', (req,res)=>{
  console.log('kkkk',req.body.user);
  res.send({data:req.body.user})
})
app.get('/about',(req,res)=>{
  res.sendFile(__dirname+'/public/about.html')
})

// app.route('/login')
//   .get((req,res)=>{
//     res.send('hello from login route')
//   })
//   .post((req,res)=>{
//
//   })
//   .put((req,res)=>{
//
//   })

app.set('port',8000);
app.listen(app.get('port'), ()=>{
  console.log(`Server listining to port ${app.get('port')}`);
})

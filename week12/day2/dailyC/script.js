var selfModule = require('./main.js');
var http = require("http")

const b = 5;




http.createServer(function (req, res) {
    console.log(`i am listening......`)
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<div>My module is :</div> <span>${selfModule.largeNumber+b}</span> <h1>Hi there at the frontend</h1>`); //write a response to the client
    res.write(`<div> The date and time are currently ${selfModule.currentDate()}`); //write a response to the client
    
    res.end(); //end the response
  }).listen(3000); //the server object listens on port 8080
  
const express = require('express')
var bodyParser = require('body-parser')
let Parser = require('rss-parser');
let parser = new Parser();
const app = express()
// parse application/x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static(`${__dirname}/public`));


let getPosts = async (params=undefined) => {
    let feed = await parser.parseURL('https://www.thefactsite.com/feed/');
    return await params==undefined
    ?feed.items
    .map(({creator,title,pubDate,contentSnippet,categories}) => {return {creator,title,pubDate,contentSnippet,categories}})
    :feed.items
    .filter((e)=>e[params[0]]==e[params[1]])
    .map(({creator,title,pubDate,contentSnippet,categories}) => {return {creator,title,pubDate,contentSnippet,categories}});
}


app.get('/search', function (req, res) {
    try {
        getPosts().then(e=>res.send(e))
    } catch (error) {
        console.log(error)
    }
    
})
   
app.listen(3000)



let quotes= {
    last : undefined,
    lists : [],
    showNewQuot (index=undefined){index==undefined?quotes.lists[Math.floor(Math.random() * (quotes.lists.length))].feedElem():quotes.lists[index].feedElem()}
}


class Quote  {
    constructor({text, author,likes =0}) {
       this.text = text
       this.author = author
       this.likes = likes

       quotes.lists.push(this)
    }

    feedElem (){
        document.querySelector("#quoteText").textContent = this.text
        document.querySelector("#quoteAuthor").textContent = this.author
        quotes.last = quotes.lists.indexOf(this)
    }

}


new Quote({
    text:"Success is not final; failure is not fatal: It is the courage to continue that counts.",
    author:"Winston S. Churchill"});
new Quote({
    text:"Success usually comes to those who are too busy to be looking for it.",
    author:"Henry David Thoreau"});
new Quote({
    text:"The way to get started is to quit talking and begin doing.",
    author:"Walt Disney"});
new Quote({
    text:"If you really look closely, most overnight successes took a long time.",
    author:"Steve Jobs"});
new Quote({
    text:"The secret of success is to do the common thing uncommonly well.",
    author:"John D. Rockefeller Jr"});
new Quote({
    text:"I find that the harder I work, the more luck I seem to have.",
    author:"Thomas Jefferson"});
new Quote({
    text:"The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere."
    ,author:"Barack Obama"});


    quotes.lists[0].feedElem()
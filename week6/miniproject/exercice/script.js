let previousButton = document.querySelector("#previousQuote");
let nextQuote = document.querySelector("#nextQuote");

let quotes = {
  formers: [],
  last: undefined,
  current: undefined,
  lists: [],
  showNewQuot(index = undefined) {
    document.querySelector(`#quotesList`).innerHTML = "";

    typeof (index != "number")
      ? quotes.lists[Math.floor(Math.random() * quotes.lists.length)].feedElem()
      : quotes.lists[index].feedElem();
  },
};

class Quote {
  constructor({ text, author, likes = 0 }) {
    this.text = text;
    this.author = author;
    this.likes = likes;
    quotes.lists.push(this);
  }

  feedElem() {
    this.elemMainDom = Object.assign(document.createElement("div"), {
      className: "col- 8 py-4 quoteText d-flex flex-column align-items-center border border-white rounded py-2",
    });
    this.quoteTextDom = Object.assign(document.createElement("p"), {
      className: "col-md-8 fs-4",
      textContent: this.text,
    });
    this.quoteBottomDom = Object.assign(document.createElement("div"), {
      className: "col-8 d-flex justify-content-between quote",
    });
    this.quoteAuthor = Object.assign(document.createElement("small"), {
      className: "col-8 d-flex justify-content-between quote",
      textContent: this.author,
    });
    this.likeDiv = document.createElement("div");
    this.increaseLike = Object.assign(document.createElement("small"), {
      className: "far fa-thumbs-up btn btn-outline-success",
    });
    this.likeSpan = Object.assign(document.createElement("span"), {
      className: "mx-2",
      textContent: this.likes,
    });
    this.decreaseLike = Object.assign(document.createElement("small"), {
      className: "far fa-thumbs-down btn btn-outline-danger",
    });

    this.elemMainDom.append(this.quoteTextDom);
    this.quoteBottomDom.append(this.quoteAuthor);
    this.likeDiv.append(this.increaseLike);
    this.likeDiv.append(this.likeSpan);
    this.likeDiv.append(this.decreaseLike);
    this.quoteBottomDom.append(this.likeDiv);
    this.elemMainDom.append(this.quoteBottomDom);

    this.increaseLike.addEventListener(`click`, () => {
      this.likes++;
      this.likeSpan.textContent = this.likes;
    });
    this.decreaseLike.addEventListener(`click`, () => {
      this.likes = this.likes-- > 0 ? this.likes-- : 0;
      this.likeSpan.textContent = this.likes;
    });

    document.querySelector(`#quotesList`).append(this.elemMainDom);
    quotes.current = quotes.lists.indexOf(this);
  }
}

new Quote({
  text: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
  author: "Winston S. Churchill",
});
new Quote({
  text: "Success usually comes to those who are too busy to be looking for it.",
  author: "Henry David Thoreau",
});
new Quote({
  text: "The way to get started is to quit talking and begin doing.",
  author: "Walt Disney",
});
new Quote({
  text: "If you really look closely, most overnight successes took a long time.",
  author: "Steve Jobs",
});
new Quote({
  text: "The secret of success is to do the common thing uncommonly well.",
  author: "John D. Rockefeller Jr",
});
new Quote({
  text: "I find that the harder I work, the more luck I seem to have.",
  author: "Thomas Jefferson",
});
new Quote({
  text: "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.",
  author: "Barack Obama",
});

quotes.showNewQuot();
let nexQuote = ()=>{
    
    quotes.formers.push(quotes.current)

    switch (quotes.last) {
        case quotes.formers.length-2:
            quotes.formers+=1
            previousButton.classList.remove("disabled")
            // quotes.showNewQuot()
        break;
        case 0:
            
        break;
    
        default:
            quotes.last
            previousButton.classList.remove("disabled")

        break;
    }
    quotes.last == 0


    quotes.showNewQuot()




}
nextQuote.addEventListener("click",nexQuote);

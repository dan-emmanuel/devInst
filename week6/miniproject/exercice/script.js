let previousButton = document.querySelector("#previousQuote");
let nextQuote = document.querySelector("#nextQuote");
let saveNewQuote = document.querySelector("#saveNewQuote")
let authorlist = document.querySelector(`#quoteAuthorHelper`)
let newQoteModal = new bootstrap.Modal(document.getElementById('newQoteModal'))
let authorInput = document.querySelector(`#quoteAuthorInput`)

let quotes = {
  formers: [],
  lists: [],
  currentQuote : undefined,
  getARandomQuote() {
    let toReturn  = quotes.lists[Math.floor(Math.random()* quotes.lists.length)]
   if(toReturn==quotes.currentQuote){
     return this.getARandomQuote()
   }else{
    return toReturn
   }
  },
  matchedAlikeQuote (authorVal){return quotes.lists.filter(({author})=>author.toLowerCase().includes(authorVal.toLowerCase()))},
  matchAnAuthor (authorVal){return quotes.lists.filter(({author})=>author.toLowerCase()===authorVal.toLowerCase())},
  optionHelperGen(authorTofind){
    let buttons =[]
    let createOption =(text)=>{ 
      let opt =  Object.assign(document.createElement("button"), {
        className: "list-group-item list-group-item-action",
        ariaCurrent:"true",
        type:"button",
       
        textContent: 	text}
      )
      opt.onclick=(e)=>{
        document.querySelector(`#quoteAuthorInput`).value= opt.textContent
        document.querySelector(`#quoteAuthorHelper`).innerHTML=``
        activeDisactivForm()
      }
      opt.style.width=`${document.querySelector(`#quoteAuthorInput`).clientWidth}px`
      return opt
    }
    quotes.matchedAlikeQuote(authorTofind).forEach(({author})=>{
      let alreadyIn = buttons.some( button => button.textContent==author)
      if(!alreadyIn){
        buttons.push(createOption(author))
      }
    })
   
    buttons.sort((a,b) => (a.textContent > b.textContent) ? 1 : ((b.textContent > a.textContent) ? -1 : 0))

    return buttons
  },
  createEmptyOption(){ 
    let opt =  Object.assign(document.createElement("button"), {
      className: "list-group-item list-group-item-action disabled",
      ariaCurrent:"true",
      type:"button",
      textContent: 	"no matched othor"}
    )
    opt.style.width=`${document.querySelector(`#quoteAuthorInput`).clientWidth}px`
    return opt
  },
  
  currentPosition: -1
};

class Quote {
  constructor({ text, author, likes = 0 }) {
    this.text = text;
    this.author = author;
    this.likes = likes;
    quotes.lists.push(this);
    this.id = quotes.lists.indexOf(this)

  }

  feedElem() {
    this.elemMainDom = Object.assign(document.createElement("div"), {
      className: "mb-2 py-4 quoteText d-flex flex-column align-items-center border border-white rounded",
    });
    this.openQuoteSign = Object.assign(document.createElement("i"), {
      className: "fas fa-quote-left pe-2",
    });
    this.closeQuoteSign = Object.assign(document.createElement("i"), {
      className: "fas fa-quote-right ps-2",
    });
    this.quoteTextDom = Object.assign(document.createElement("p"), {
      className: "col-md-8 fs-4",
    });
    this.quoteTextDom.append(this.openQuoteSign)
    this.quoteTextNode = document.createTextNode(this.text)
    this.quoteTextDom.appendChild(this.quoteTextNode)

    this.quoteTextDom.append(this.closeQuoteSign)
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

    this.quoteBottomDom.append(this.quoteAuthor);
    this.quoteBottomDom.append(this.quoteAuthor);
    this.quoteBottomDom.append(this.quoteAuthor);


    this.likeDiv.append(this.increaseLike);
    this.likeDiv.append(this.likeSpan);
    this.likeDiv.append(this.decreaseLike);
    this.quoteBottomDom.append(this.likeDiv);
    this.elemMainDom.append(this.quoteBottomDom);
    this.charNumber = Object.assign(document.createElement("button"), {
      className: "btn btn-secondary col-auto",
      type:"button",
      textContent: "number of characters",
    });
    this.charNumber.setAttribute('data-bs-container', 'body')
    this.charNumber.setAttribute('data-bs-toggle', 'popover')
    this.charNumber.setAttribute('data-bs-placement', 'left')
    this.charNumber.setAttribute('data-bs-content', this.text.length)
    this.popUpRow = Object.assign(document.createElement("div"), {
      className: "row justify-content-between col-10 mt-2",
     
    });
    this.charNumberWithoutSpace = Object.assign(document.createElement("button"), {
      className: "btn btn-secondary col-auto ",
      type:"button",
      textContent: "number of characters without space",
    });
    this.charNumberWithoutSpace.setAttribute('data-bs-container', 'body')
    this.charNumberWithoutSpace.setAttribute('data-bs-toggle', 'popover')
    this.charNumberWithoutSpace.setAttribute('data-bs-placement', 'bottom')
    this.charNumberWithoutSpace.setAttribute('data-bs-content', this.text.match(/\S/g).length)
    this.wordNumber = Object.assign(document.createElement("button"), {
      className: "btn btn-secondary col-auto",
      type:"button",
      textContent: "number of words",
    });
    this.wordNumber.setAttribute('data-bs-container', 'body')
    this.wordNumber.setAttribute('data-bs-toggle', 'popover')
    this.wordNumber.setAttribute('data-bs-placement', 'right')
    this.wordNumber.setAttribute('data-bs-content', this.text.split(" ").length)
    this.popUpRow.append(this.charNumber);
    this.popUpRow.append(this.charNumberWithoutSpace);
    this.popUpRow.append(this.wordNumber);
    this.elemMainDom.append(this.popUpRow);


    this.increaseLike.addEventListener(`click`, () => {
      this.likes++;
      this.likeSpan.textContent = this.likes;
    });
    this.decreaseLike.addEventListener(`click`, () => {
      this.likes = this.likes-- > 0 ? this.likes-- : 0;
      this.likeSpan.textContent = this.likes;
    });
    
    let  popoverTriggerList = [].slice.call(this.elemMainDom.querySelectorAll('[data-bs-toggle="popover"]'))
    popoverTriggerList.forEach((popoverTriggerEl)=>{return new bootstrap.Popover(popoverTriggerEl)})



    document.querySelector(`#quotesList`).append(this.elemMainDom);
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
new Quote({
  text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
  author: "Ralph Waldo Emerson",
});
new Quote({
  text: "It is during our darkest moments that we must focus to see the light." ,
  author: "Aristote",
});
new Quote({
  text: "What is a friend? A single soul dwelling in two bodies." ,
  author: "Aristote",
});
new Quote({
  text: "Educating the mind without educating the heart is no education at all." ,
  author: "Aristote",
});




let feedHelper = (e)=>{
  let curentLooked = authorInput.value
  if(quotes.lists.filter(({author})=>author.toLowerCase()==curentLooked.toLowerCase()).length==0){
    authorlist.innerHTML=``
    let opts = quotes.optionHelperGen(curentLooked)
    console.log(opts.length==0)
    if(opts.length==0){
      authorlist.appendChild(quotes.createEmptyOption())
    }else{
      opts.forEach(buton=>{authorlist.appendChild(buton);})
    }
  }

  activeDisactivForm()
}
let activeDisactivForm = ()=>{
  let sameAuthorQuotes = quotes.matchAnAuthor(authorInput.value)
  let authorForm = document.querySelector(`#authorFind`)
  // document.querySelector(`#quoteAuthorHelper`).innerHTML=``
  if(sameAuthorQuotes.length==0){
    document.querySelector(`#authorFindSubmitter`).classList.add("disabled")
    authorForm.onsubmit  = (e)=>{
      return false
    }

  }else{
    document.querySelector(`#authorFindSubmitter`).classList.remove("disabled")
    document.querySelector(`#quoteAuthorHelper`).innerHTML=``
    authorForm.onsubmit  = (e)=>{
      document.querySelector(`#quotesList`).innerHTML = "";

      sameAuthorQuotes.forEach(e=>e.feedElem())
      return false
    }
  }
}
let feedOutHelper = (e)=>{
  const isNotHover = document.querySelector('#quoteAuthorHelper:hover')=== null
  if(isNotHover){
    authorlist.innerHTML=``
  }
  
}
let newQuote = (e)=>{
  document.querySelector(`#quotesList`).innerHTML = "";
  const quoteIncrement  = ()=>{
    quotes.currentPosition ++
    if(quotes.currentPosition-1==quotes.formers.length-1){
      quotes.currentQuote = quotes.getARandomQuote()
      quotes.formers.push(quotes.currentQuote)
    }else{
      quotes.currentQuote  = quotes.formers[quotes.currentPosition]
    }
    quotes.currentQuote.feedElem()
    quotes.currentPosition==0
    ?previousButton.classList.add("disabled")
    :previousButton.classList.remove("disabled")
  }

  const quoteDecrement = ()=>{
    quotes.currentPosition --
    quotes.currentQuote  = quotes.formers[quotes.currentPosition]
    quotes.currentQuote.feedElem()
    if(quotes.currentPosition==0){previousButton.classList.add("disabled")}
  }
  e==undefined||e.target.id=="nextQuote"
  ?quoteIncrement()
  :quoteDecrement()
}
let addAquote = (e)=>{
  let quoteText = document.querySelector(`[name=quoteText]`)
  let quoteAuthor = document.querySelector(`[name=quoteAuthor]`)
  let continueQuoteCreation = quoteText.value.length != 0&&quoteAuthor.value.length != 0
  if(quoteText.value.length==0){quoteText.classList.add("is-invalid")}
  if(quoteAuthor.value.length==0){quoteAuthor.classList.add("is-invalid")}
  if(continueQuoteCreation){
  
    quoteText.value = ""
    quoteAuthor.value = ""
    quoteText.classList.remove("is-invalid")
    quoteAuthor.classList.remove("is-invalid")
    newQoteModal.hide()
  }

}





newQuote()
nextQuote.addEventListener("click",newQuote);
previousButton.addEventListener("click",newQuote);
saveNewQuote.addEventListener(`click`,addAquote)
authorInput.addEventListener("input",feedHelper)
authorInput.addEventListener("focusout",feedOutHelper)
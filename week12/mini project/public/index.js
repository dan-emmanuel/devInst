
class element {
    constructor({creator,title,pubDate,contentSnippet,categories}) {
        
        this.title = title
        this.creator = creator
        this.pubDate = pubDate
        this.categories = categories
        this.contentSnippet = contentSnippet
        elems.push(this)
    }

    htmlGen (){
        let mainDiv = document.createElement('div')
        mainDiv.classList.add(`border`,`border-1`, `mb-3`,`p-2`)
        let elems = {   
            Title:this.title,
            Author:this.creator,
            Date:this.pubDate,
            Category:this.categories,
            Description:this.contentSnippet,
        }
        for (const key in elems) {
            if (Object.hasOwnProperty.call(elems, key)) {
                const element = elems[key];
                let titleP = document.createElement(`p`)
                let titleSpan = document.createElement(`span`)
                titleSpan.textContent = `${key} : `
                let titleValue = document.createElement(`span`)
                titleValue.textContent = `${element}`
                titleP.append(titleSpan)
                titleP.append(titleValue)
                mainDiv.append(titleP)
            }
        }
        return mainDiv
    }
}


let elems = []

let fetcher = async (param)=>{
    let response = await fetch(`http://localhost:3000/search`);
    response = response.json()
    return response
}

let createsElems = async(response)=>await response.forEach((item) => new element(item))

let insertItems = (id)=>elems.forEach(element =>document.getElementById(id).append(element.htmlGen()));



let controler = ()=>{
    window.location.href.includes(`index`)
    ?fetcher()
    .then(e=>createsElems(e))
    .then(e=>insertItems(`list`))
    :fetcher()
    
}

window.addEventListener('load', controler)
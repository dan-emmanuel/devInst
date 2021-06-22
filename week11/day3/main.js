class Card {
    constructor({name, descript,list}) {
        this.id =  `card${Math.random().toString(36).substr(2, 9)}`;
          
        this.htmlElem = document.createElement("div")
        this.htmlElem.classList.add(`card`,`text-center`,`w-30`,`mb-5p`)
        let header = document.createElement("div")
        header.classList.add(`card-header`)
        header.textContent = name
        let cardBody = document.createElement("div")
        cardBody.classList.add(`card-body`)
        let descriptTitle = document.createElement("h5")
        descriptTitle.classList.add(`text-start`)
        descriptTitle.textContent = "Description :"
        let descriptionElem = document.createElement(`div`)
        descriptionElem.classList.add(`text-start`)
        descriptionElem.textContent = descript

        // if(list!="none"){
        //     let accordeon = document.createElement(`div`)
        //     accordeon.classList.add(`accordion`,`accordion-flush`)
        //     let  accordeonItem = document.createElement(`div`)
        //     accordeonItem.classList.add(`accordion-item`,`bg-transparent`)  

        //     let accordeonColapser = document.createElement(`button`)
        //     accordeonColapser.classList.add(`accordion-button`,`collapsed`,`ps-0`,`w-100`,`bg-transparent`)
        //     accordeonColapser.type="button"
        //     accordeonColapser.setAttribute('data-bs-toggle', 'collapse')
        //     accordeonColapser.setAttribute('aria-controls', `flush${this.id}`)

        //     accordeonColapser.setAttribute('data-bs-target', `#flush${this.id}`)
        //     let accordeonColapserText = document.createElement(`h5`)
        //     accordeonColapserText.classList.add(`text-start`)
        //     accordeonColapserText.textContent = `Steps`

        //     this.accordeonColapser.append(this.accordeonColapserText)
        //     this.accordeonContent = document.createElement(`div`)
        //     this.accordeonContent.id = `flush${this.id}`
        //     this.accordeonContent.classList.add(`accordion-collapse`,`collapse`)

        //     this.accordeonBody = document.createElement(`div`)
        //     this.accordeonBody.classList.add(`accordion-body`, `row`,`justify-content-center`)
            

        //     this.accordeonList = list.type =="order"?document.createElement("ol"):document.createElementdocument.createElement("ul")
        //     list.elements.forEach(element => {
        //         let currentLi = document.createElement('li')
        //         let currentRow = document.createElement(`div`)
        //         currentRow.classList.add(`d-flex` ,`ms-2`)
        //         let currentLiCheckBox = document.createElement(`input`)
        //         currentLiCheckBox.classList.add(`form-check-input`, `col-1`, `my-auto`, `ps-2`)
        //         currentLiCheckBox.type = "checkbox"
        //         let currenLiText = document.createElement(`p`)
        //         currenLiText.classList.add(`col-9`,`mb-0`,`subItem`)
        //         currenLiText.textContent = element.text
        //         let remover = document.createElement(`button`)
        //         remover.classList.add(`col-auto`, `btn`, `btn-outline-danger`,`border-0`)
        //         let crossIcone = document.createElement(`i`)
        //         crossIcone.classList.add(`fas`,`fa-minus`)
        //         remover.append(crossIcone)
        //         currentRow.append(currentLiCheckBox)

        //         currentRow.append(currenLiText)
        //         currentRow.append(remover)

        //         currentLi.append(currentRow)
        //         this.accordeonList.append(currentLi)
                
        //     });
            

        //     this.addListElem = document.createElement(`buton`)
        //     this.addListElem.classList.add(`col-auto`,`btn`, `btn-outline-success`)
        //     let plusIcon = document.createElement(`i`)
        //     plusIcon.classList.add(`fas`,`fa-plus`)
        //     this.addListElem.append(plusIcon)
        //     this.accordeonItem.append(this.accordeonColapser)
        //     this.accordeonBody.append(this.accordeonList)
        //     this.accordeonBody.append(this.addListElem)

        //     this.accordeonContent.append(this.accordeonBody)
        //     this.accordeonItem.append(this.accordeonContent)

        //     this.accordeon.append(this.accordeonItem)

        // }
        
        
        let satutRow = document.createElement(`div`)
        satutRow.classList.add(`input-group`,`mb-2`,'mt-3')
        let prependElemStatut = document.createElement(`div`)
        prependElemStatut.classList.add(`input-group-prepend`,`col-4`)
        let prependElemStatutLabel = document.createElement(`label`)
        prependElemStatutLabel.classList.add(`input-group-text`)
        prependElemStatutLabel.textContent = `statut`

        this.selectStatus = document.createElement(`select`)
        this.selectStatus.classList.add(`ustom-select`,`col-8`)
        let waitStatus = new Option(`Wait`, `1`);
        let StartedStatus = new Option(`Started`, `2`);
        let FinishedStatus = new Option(`Finished`, `3`);
        this.selectStatus.append(waitStatus)
        this.selectStatus.append(StartedStatus)
        this.selectStatus.append(FinishedStatus)

        
        
        prependElemStatut.append(prependElemStatutLabel)
        satutRow.append(prependElemStatut)

        satutRow.append(this.selectStatus)


        cardBody.append(descriptTitle)
        cardBody.append(descriptionElem)
        if(this.accordeon){
            this.cardBody.append(this.accordeon)

        }
        cardBody.append(satutRow)

        let footerCard = document.createElement(`div`)
        footerCard.classList.add(`card-footer`, `text-muted` ,`d-flex` ,`justify-content-between`)
        let start = document.createElement(`div`)
        start.classList.add(`fs-6`)
        start.textContent = `start : 18/6/21`
        let end = document.createElement(`div`)
        end.classList.add(`fs-6`)
        end.textContent = `end : 25/6/21`
        let remain = document.createElement(`div`)
        remain.classList.add(`fs-6`)
        remain.textContent = ` remain : 8 d.`
        
        footerCard.append(start)
        footerCard.append(end)
        footerCard.append(remain)


        this.htmlElem.append(header)
        this.htmlElem.append(cardBody)
        this.htmlElem.append(footerCard)
        document.querySelector(`#allCards`).append(this.htmlElem)
    }
}


        
const card1 = new Card({
    name:`test`,
    descript:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio id omnis veniam esse cum accusantium",
    list :{
        type:`order`,
        elements:[{
            text: "todo"
        },
        {
            text: "todo"
        },
        {
            text: "todo"
        }]

    }
});
    
 
    // <div class="progress mb-2">
    //     <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
    // </div>



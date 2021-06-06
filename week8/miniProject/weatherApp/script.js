let errorModal = new bootstrap.Modal(document.getElementById('errorModal'), {
  keyboard: false
})

let cards = []
class MeteoCard {
  constructor({weather,main:{temp},sys:{country},name}) {
    this.description = weather[0].description
    this.icon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
    this.temp = {
      default:`${Math.round(temp * 100) / 100} K`,
      metric:`${Math.round((temp -273.15) * 100) / 100} °C` ,
      imperial:`${Math.round((temp* 9/5 - 459.67) * 100)/100}  °F`
    }
    this.country = country
    this.name=name
    cards.push(this)
  }

  createDomElem(){
    this.domElem = document.createElement("div")
    this.domElem.classList.add(`col-4`, `mb-2`)

    let card = document.createElement("div")
    this.domElem.append(card)
    card.classList.add(`card`)

    let cardHeader = document.createElement("div")
    card.append(cardHeader)
    cardHeader.classList.add(`card-header`,`d-flex`)

    let title = document.createElement("h5")
    cardHeader.append(title)
    title.classList.add(`card-title`,`col`)
    title.textContent = this.name

    let country = document.createElement("span")
    country.textContent = this.country
    country.classList.add('ms-2',`badge`, `bg-primary`)
    title.append(country)

    let deleter = document.createElement("button")
    cardHeader.append(deleter)
    deleter.classList.add(`btn-close`)
    deleter.type='button'
    deleter.ariaLabel = "Close"
    deleter.onmousedown  = (e)=>{
      this.domElem.parentNode.removeChild(this.domElem)
      cards = cards.filter(e=>e!=this)  
    }
    let bodyCard =document.createElement("div")
    card.append(bodyCard)
    bodyCard.classList.add(`card-body`)

    let imgContainer = document.createElement("div")
    bodyCard.append(imgContainer)
    imgContainer.classList.add(`text-center` , `mb-0`)

    let img = document.createElement("img")
    imgContainer.append(img)
    img.src= `${this.icon}`


    this.tempElem  = document.createElement("p")
    this.tempElem.textContent = this.temp[document.querySelector(`[name="unit"]`).value]
    this.tempElem.classList.add(`card-text`,`timeIcon`,`text-center`,`mb-0`)
    bodyCard.append(this.tempElem)

    let weatherdescription = document.createElement("p")
    bodyCard.append(weatherdescription)
    weatherdescription.classList.add(`card-text`, `text-uppercase`, `fw-2`, `text-center`)
    weatherdescription.textContent = this.description
    document.querySelector('#cards').append(this.domElem);
    

  }

  changeUnit(e){
    this.tempElem.textContent = this.temp[e]
  }
}

let createCard = (e)=>{
  let params = {appid:`6bc236fa8bd5e7e03f83fd8cea3eac74`}
  let getData = ()=>{
    let url = new URL("http://api.openweathermap.org/data/2.5/weather")
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
   
      fetch(url)
      .then(e=>e.json()).then(result=>{
        
        try{
          new MeteoCard(result).createDomElem().id
        }catch(e){
          if(result.message){
            document.querySelector(`#errorMessage`).textContent = result.message
            errorModal.show()
          }
        }
      })
   
    
  }
  if(e.type == "load"){
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      }
    }
    
    function showPosition(position) {
      params.lat =  position.coords.latitude
      params.lon =  position.coords.longitude;
      getData()
    }
    getLocation()
 
  }else{
    e.preventDefault()
    params.q = e.target['city'].value
    getData()
    e.target['city'].value = ""
  }

  
  

}



window.addEventListener('load', createCard,false)
document.querySelector(`#city`).addEventListener('submit', createCard, false )


let units = document.querySelectorAll(`[name="unit"]`)

for (let index = 0; index < units.length; index++) {
  const element = units[index];
  console.log(element)
  element.addEventListener('change', (e)=> cards.forEach(el=>el.changeUnit(e.currentTarget.value)))
}





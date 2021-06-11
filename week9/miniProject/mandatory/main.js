let urlBase = ()=>`https://swapi.dev/api/people/${Math.floor(Math.random() * 83)+ 1}`
let rows  = document.querySelectorAll(`.row`)

let changeRowDisplay = (displayValue)=>{
    for (let index = 0; index < rows.length; index++) {
        const element = rows[index];
        element.style.display=displayValue
    }
}
let genperson = async()=>{
   document.querySelector(`#loader`).style.display="block"
   changeRowDisplay("none")
   document.querySelector(`#name`).style.display="none"
    try {
        let datas = await fetch(urlBase())
        const  {name,height,birth_year,gender,homeworld}  = await datas.json()
        let person = {name,height,birth_year,gender}
        const homeworldRequestReturn= await fetch(homeworld)
        const {name:homeworldName} = await homeworldRequestReturn.json()
        person.homeworldName = homeworldName
        for (const key in person) {
            if (Object.hasOwnProperty.call(person, key)) {
                const element = person[key];
                let elem = document.querySelector(`#${key}`).textContent = element
            }
        }

        for (let index = 0; index < rows.length; index++) {
            const element = rows[index];
            
            element.style.display="flex"
        }
        document.querySelector(`#loader`).style.display="none"
        document.querySelector(`#name`).style.display="block"

        changeRowDisplay("flex")

    } catch (error) {
        document.querySelector(`#name`).textContent = `Oh No! That person isn't available`
        document.querySelector(`#name`).style.display="block"
        changeRowDisplay("none")
        document.querySelector(`#loader`).style.display="none"

        
    }
}

genperson()

document.querySelector(`.btn`).addEventListener("mousedown",genperson)

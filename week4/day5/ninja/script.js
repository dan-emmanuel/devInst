


function createCalendar(year,month){

    let formerMonth = document.querySelector('table')
    if(formerMonth) formerMonth.remove()
    console.log(month)
    let firstMonthDay = new Date(year, month)
    let firstWeekDay = firstMonthDay.getDay()

    let lastMonthDay = new Date(year, month, 0).getDate()
    let table  = document.createElement("table")
    let thead = document.createElement("thead")
    let dayWeek = ["MO","TU","WE","TH","FR","SA","SU"]

    let tbody = document.createElement("tbody")
    table.append(tbody)

    for (let index = 0; index < 7; index++) {
        let currentTr = document.createElement("tr")
        tbody.append(currentTr)
    }
    for (let i = 0; i < dayWeek.length; i++) {
        const element = dayWeek[i];
        let currentTh = document.createElement("th")
        let textNode = document.createTextNode(element)
        currentTh.appendChild(textNode)
        currentTh.style.width="14,5%"
        thead.append(currentTh)
    }
    let currentText = "."


    for (let j = 0; j < tbody.children.length; j++) {
        let currentTr = tbody.children[j]
        for (let k = 0; k < 7; k++) {
       
            let currentTd = document.createElement('td')
            currentTr.append(currentTd)
            if(firstWeekDay == (j+1)*k){
                currentText = parseInt(1) 
            }else{
                currentText= currentText=="."?".":currentText+1
            }
            let toshow = (currentText<=lastMonthDay||currentText==".")?currentText:""
            let currentTextNode = document.createTextNode(toshow)
             
            currentTd.appendChild(currentTextNode)
        }
    }
    table.append(thead)
    document.querySelector("#main").append(table)
}

let formElems  = document.querySelectorAll("form>*")
for (let index = 0; index < formElems.length; index++) {
    const element = formElems[index];
    element.addEventListener("change",changeInput)
}
function changeInput(e){
    if(document.querySelector("#year").value!=""&&document.querySelector("#month").value!=""){
        createCalendar(document.querySelector("#year").value,document.querySelector("#month").value)
    }
}

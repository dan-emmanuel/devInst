


    function createCalendar(year,month){
        year = parseInt(year)
        month = parseInt(month)
        let formerMonth = document.querySelector('table')
        if(formerMonth) formerMonth.remove()
        let firstMonthDay = new Date(year, month)
        let firstWeekDay = firstMonthDay.getDay()+1
        let lastMonthDay = new Date(year, (month+1), 0).getDate()

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
        let day = 0
        for (let j = 0; j < tbody.children.length; j++) {
            
            for (let k = 0; k < dayWeek.length; k++) {
                let currentTr = tbody.children[j]
                let currentTd = document.createElement("td")
                currentTd.style.textAlign="center"
                if(j==0){
                    if(k>=firstWeekDay){day++}
                    if(day!=0){
                        currentTd.textContent = day
                    }
                   
                }else{
                    day++
                   if(day<=lastMonthDay){
                    currentTd.textContent = day
                   }else{
                    if(k==0){
                        break
                    }
                   
                   }
                }
                currentTr.append(currentTd)
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

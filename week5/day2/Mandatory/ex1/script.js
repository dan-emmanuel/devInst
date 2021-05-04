// Using DOM methods, remove the last paragraph in the <article> tag from the DOM.
document.querySelector("article p:last-child").remove()
// Add an event listener which will change the background color of the h2 tag from the DOM when clicked on.
document.querySelector("h2").addEventListener("click",e=>e.target.style.backgroundColor ="red")
// Set the font size of the h1 tag to a random pixel size between 0 to 100.(Check out this documentation)
document.querySelector("h1").style.fontSize = `${(Math.floor(Math.random() * (100 - 0 + 1)))}px`

// Add an event listener which will hide the h3 when it’s clicked on (use the display property).
document.querySelector("h3").addEventListener("click",e=>e.target.style.display ="none")

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
document.querySelector("button").addEventListener("click",()=>{
    for (let index = 0; index < document.querySelectorAll("p").length; index++) {
        const element = document.querySelectorAll("p")[index];
        element.style.fontWeight="bold"
    }
})

// When the “Submit” button of the form is clicked:
// get the values of the input tags
// make sure that they are not empty,
// then append them to a HTML table, in the div, below the form.
document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault()
    let inputs = document.querySelectorAll("input[type='text']")
    let table = document.createElement("table")
    let tbody  = document.createElement("tbody")
    table.appendChild(tbody)
    for (let index = 0; index < inputs.length; index++) {
        const element = inputs[index];
        let currentVal = element.nodeValue
        if(currentVal==""){
            console.log("there's at least 1 element empty")
            break;
        }
        let currentTr = document.createElement("tr")
        let currentTh = document.createElement("th")
        let titleText = document.createTextNode(`${element.id}`)
        console.log(`${element.id}`)
        currentTh.appendChild(titleText)
        let currentTd = document.createElement("td")
        let tdText = document.createTextNode(`${element.value}`)
        currentTd.appendChild(tdText)
        currentTr.appendChild(currentTh)
        currentTr.appendChild(currentTd)
        tbody.appendChild(currentTr)

    }
    document.querySelector('.usersAnswer').append(table)
})
// When you hoover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
function fadeOutEffect(e) {
    var fadeTarget = e.target;
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 200);
}
console.log()
document.querySelectorAll(`p`)[1].addEventListener("mouseover",fadeOutEffect)
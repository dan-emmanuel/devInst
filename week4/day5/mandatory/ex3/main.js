// Add a “light blue” background color and some padding to the <div>.
document.querySelector('div').style.backgroundColor ='lightblue'

// Do not display the first name (John) in the list.
document.querySelector('ul>li:first-child').style.display ='none'
// Add a border to the second name (Pete).
document.querySelector('ul>li:nth-child(2)').style.border ='1px solid black '



if(document.querySelector('div').style.backgroundColor =='lightblue'){
    let names = []
    document.querySelectorAll('ul>li').forEach((el)=>{names.push(el.childNodes[0].nodeValue)})
    alert(`Hello ${names.join(' and ')} `)
}
// Change the font size of the whole body.
// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
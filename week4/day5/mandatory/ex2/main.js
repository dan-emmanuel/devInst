// In the HTML above change the name “Pete” to “Richard”.
let lis = document.querySelectorAll('ul>li')
console.log(lis)
lis.forEach((el)=>{
    if(el.childNodes[0].nodeValue=="Pete")el.textContent="Richard"
})

// Change each first name of the two <ul>'s to your name.
document.querySelectorAll('ul>li:first-child').forEach((el)=>{el.textContent="Dan";})
// At the end of each <ul> add a <li> that says “Hey students”.

document.querySelectorAll('ul').forEach((el)=>{
    el.className=`${el.className} student_list`
    let newLi  = document.createElement("li")
    let hey = document.createTextNode("Hey students")
    newLi.appendChild(hey)
    el.append(newLi)})


// Delete the name Sarah from the second <ul>.
document.querySelectorAll('ul').forEach((el,ind)=>{
    if(ind==0){
        el.className=`${el.className} university attendance`
    }

    if(ind==1){
        
        let elChildren = el.children
        for (let index = 0; index < elChildren.length; index++) {
            const element = elChildren[index];
            if(element.childNodes[0].nodeValue=="Sarah")element.remove()
        }
        
    }
})
// Bonus
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.
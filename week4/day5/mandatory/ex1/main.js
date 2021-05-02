
let navBar = document.querySelector('#navBar')
.id = "socialNetworkNavigation"

// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (li).
// Finally, append this updated list node to the unordered list above, using

let newLi = document.createElement(`li`)

let textNode =  document.createTextNode("Logout")

newLi.appendChild(textNode)
document.querySelector('#socialNetworkNavigation>ul').append(newLi)

let firstListChild = document.querySelector('#socialNetworkNavigation>ul').firstElementChild 
let lastChild = document.querySelector('#socialNetworkNavigation>ul').lastElementChild  
console.log(firstListChild.textContent )
console.log(lastChild.textContent )

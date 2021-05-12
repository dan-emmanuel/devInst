// Exercise 3 : Get The User’s Geolocation Coordinates
// Instructions
// Hint/tip

// Use HTML5 and Javascript for this exercise.
// Use everything we learned in class, and use all the resources linked in the course.
// This exercise is a bit tricky, search Google how to work with HTML5 and the navigator’s geolocation.
// Create a button
// For example, after the user clicks on the button, the output of your code should be as seen below :

function getLocation(position) {
    document.querySelector("#longitude").innerHTML =  position.coords.longitude
    document.querySelector("#latitude").innerHTML =  position.coords.latitude
    
    
}
function getPos (){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getLocation);
    } else {
        document.querySelector("#endregioncoord").innerHTML = "Geolocation is not supported by this browser.";
    }
} 




  
document.querySelector("button").addEventListener("click",getPos)

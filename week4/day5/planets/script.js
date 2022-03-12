let planets = [
    {name:"Mercure",moons:[]},
    {name:"Venus",moons:[]},
    {name:"Earth",moons:["moon"]},
    {name:'Mars',moons:["Deimos","Phobos"]},
    {name:'Jupiter',moons:["IO","Europa","Ganymede"]},
    {name:'Sarturna',moons:["Ymir","Paaliaq","Siarnaq","Tarvos","Kiviuq","Ijiraq","Thrymr"]}, 
    {name:'Uranus',moons:["Juliette", "Portia", "Cressida", "Desdémone", "Rosalinde", "Belinda", "Cordélia"]},
    {name:'Neptune',moons:["Despina","Galatea","HippoCamp"]}
];

planets.forEach(planet => {
    let divPlanet = document.createElement("div")
    divPlanet.classList.add("planet")
    divPlanet.classList.add(planet.name)
    // console.log(divPlanet)
    let planetTextNode = document.createTextNode(planet.name)
    divPlanet.appendChild(planetTextNode)
    planet.moons.forEach(moon => {
        let divMoon = document.createElement("div")
        divMoon.classList.add("moon")
        let moonTextNode = document.createTextNode(moon)
        divMoon.appendChild(moonTextNode)
        divPlanet.append(divMoon)
    });
    document.querySelector(`.listPlanets`).append(divPlanet)

    
});





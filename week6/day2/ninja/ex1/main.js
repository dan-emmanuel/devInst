let menu = [
    {
      type : "starter",
      name : "Houmous with Pita"
    },
    {
      type : "starter",
      name : "Vegetable Soup with Houmous peas"
    },
    {
      type : "dessert",
      name : "Chocolate Cake"
    }
  ]

  


let isdessert2  = false
menu.forEach(element => {
    isdessert2 = isdessert2?true:element.type=="dessert"
});

console.log(isdessert2)



let  isstarter = (element) => element.type === "starter";

console.log(menu.every(isstarter))


let  isMain = (element) => element.type === "main course";

if(menu.some(isMain))menu.push({     type : "main course",name : "Shwarma"})




let vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ]

menu.forEach(element => {
    for (let index = 0; index < vegetarian.length; index++) {
        const ele = vegetarian[index];
        let isVeg = element.name.toLowerCase().includes(ele.toLowerCase())
        element.vegetarian=isVeg
        if(isVeg){console.log("stop");break}
    }
});

console.log(menu)
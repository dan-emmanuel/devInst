function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    smallOne.style.marginTop = "0px"
    ev.target.appendChild(document.getElementById(data));
  }


  let  bigOne = document.querySelector("#bigOne") 
  let  smallOne = document.querySelector("#smallOne") 


bigOne.addEventListener(`drop`,drop) 
bigOne.addEventListener(`dragover`,allowDrop)
smallOne.addEventListener(`dragstart`,drag)


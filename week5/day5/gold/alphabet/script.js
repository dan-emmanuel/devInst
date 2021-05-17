let letterBox = document.querySelectorAll(".letterBox");
for (let index = 0; index < letterBox.length; index++) {
  const element = letterBox[index];

  element.addEventListener("dragend",function (event) {
      let x = event.screenX ;
      let y = event.screenY  ;

      console.log(x)
      console.log(y)


      event.target.style.top = `${y}px`;
      event.target.style.right = `${x}px`;
    },
    false
  );

}

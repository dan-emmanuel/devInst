let letterBox = document.querySelectorAll(".letterBox");
for (let index = 0; index < letterBox.length; index++) {
  const element = letterBox[index];

  element.addEventListener("dragend",function (event) {
      let x = event.clientX ;
      let y = event.clientY  ;

      box = event.target.getBoundingClientRect()

      event.target.style.top = `${y}px`;
      event.target.style.left = `${x}px`;
      event.target.style.position = "absolute"
    },
    false
  );

}

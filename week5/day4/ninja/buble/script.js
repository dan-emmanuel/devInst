const colors = ['#ccc', '#6cf', '#eba13a'];
// mouseFollower Bubble efect
// let folowTheMouse =  (event)=>{
//   console.log(event)
//   let element = document.createElement('div');
//   element.setAttribute('class', 'folower');
//   document.body.appendChild(element);
//   element.style.border =  `1px solid #000`;
//   element.style.borderRadius = `15px`;

//   element.style.left = event.clientX + 'px';
//   element.style.top = event.clientY + 'px';

//   let color = colors[Math.floor(Math.random() * colors.length)];
//   element.style.borderColor = color;

//   element.style.transition = 'all 1s linear 0s';

//   element.style.left = element.offsetLeft - 20 + 'px';
//   element.style.top = element.offsetTop - 20 + 'px';

//   element.style.width = '50px';
//   element.style.height = '50px';
//   element.style.borderWidth = '5px';
//   element.style.opacity = 0;
//   console.log(element)
//   setTimeout(() => {
//     element.remove()
//   }, 1500);
// }

// mouseFolowerlineEffect
let folowTheMouse =  (event)=>{
  let element = document.createElement('div');
  element.setAttribute('class', 'folowerBis');
  document.body.appendChild(element);


  element.style.left = event.clientX + 'px';
  element.style.top = event.clientY + 'px';

  let color = "red";
  element.style.backgroundColor = color;

  // element.style.transition = 'all 3s linear 0s';

  // element.style.left = element.offsetLeft - 1 + 'px';
  // element.style.top = element.offsetTop - 1 + 'px';

  // element.style.width = '1vw';
  // element.style.height = '1vh';
  element.style.opacity = 1;
  console.log(element)
  setTimeout(() => {
    element.remove()
  }, 1500);
}

document.addEventListener("mousemove",folowTheMouse)

let drums = document.querySelectorAll(".drum")


function hasClass(ele,cls) {
  return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function addClass(ele,cls) {
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}

function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,' ');
  }
}


let clickaBox = (e)=>{
  e.preventDefault()
  e.stopPropagation();
  let element
  let currentKey
  if(e.type=="click"){
    element = e.currentTarget
    currentKey = e.currentTarget.querySelector('.note')
    nexStep = true
  }else{
    currentKey = document.querySelector(`[data-target = "${keySounds[e.key]}"]`)
    element = currentKey.closest(`.drum`)
  }
  if(currentKey!=null&&element!=null){
    let currentAudio  = currentKey.getAttribute("data-target")
    addClass(element,"onPlay")

    setTimeout(() => {
      removeClass(element,"onPlay")
    }, 100);
    
    player(currentAudio)
  }
}

let player = (target)=>{
  let currentSound = document.querySelector(`[data-soundName = "${target}"]`)
  currentSound.play()
}



let keySounds = {
  a : "boom",
  s : "clap",
  d : "hiHat",
  f : "kick",
  g : "openHat",
  h : "ride",
  j : "snare",
  k : "tink",
  l : "tom"
}



drums.forEach(drum => {
  drum.addEventListener("click",clickaBox)
});

document.addEventListener("keydown",clickaBox)
let input  = document.querySelector(`#onlyLetters`)





input.addEventListener("keydown",(e)=>{
  if(/[^a-zA-Z]/.test(e.key)){
    e.preventDefault()
  }
})


input.addEventListener("keyup",()=>{input.value = input.value.replace(/[^a-zA-Z]/,"")} )
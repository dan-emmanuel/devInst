let form = document.forms.form1

let select = form.select1

// ? how to get a multi select selected option
// let selectedopts = [...select.children].filter(e=>e.getAttribute("selected")!=null)
// let selectedValues = [...select.children].filter(e=>e.selected).map(e=>e.value)
// let selectedValues = [...select.children].filter(e=>{e.getAttribute("selected")!==null})

let option =Object.assign(document.createElement("option"),{textContent:"Jazz",value:"jazz",selected:true})
// let option ={...document.createElement("option"),{textContent:"Jazz",textContent:"jazz",selected:true,selected:true}}
// console.log(option)
// let option =Object.assign(document.createElement("option"),{textContent:"Jazz",value:"jazz",selected:true})

select.append(option)


// console.log(selectedValues)
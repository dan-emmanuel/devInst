
let adder = document.querySelector(`#adder`)
let deletAll = document.querySelector(`#removeAll`)
let listTaskDiv = document.querySelector(`#list`)
let tasks = []




class Task {
    constructor(text, state = false) {
      this.text = text;
      this.done  = state;
      tasks.push(this);
      this.taskId = tasks.indexOf(this)
      this.domElemCreator = function (){
        this.masterElem = document.createElement('div')
        this.masterElem.setAttribute("data-task_id", this.taskId)
        this.masterElem.classList.add("event" ,"d-flex","col-12" ,"align-items-end" ,"justify-content-between" ,"m-2" ,"border-bottom" ,"pb-2" ,"border-primary")
        this.deleter = document.createElement("button")
        this.deleter.classList.add("deleter","border-0","text-white","text-center","col-1")
        this.deleter.textContent = "X" 

        this.deleter.addEventListener("click",this.removeElement)
        this.doneCheckBox = document.createElement("input")
        this.doneCheckBox.type = "checkbox"
        this.doneCheckBox.classList.add("form-check-input","col-1","my-auto")
        this.doneCheckBox.addEventListener("change",()=>{
            this.done = true;
            this.pName.classList.add("text-decoration-line-through", "textPink")
        })
        this.pName = document.createElement("p")
        this.pName.classList.add("eventName","col-10","mb-0","align-text-bottom")
        this.pName.textContent = this.text
        this.masterElem.append(this.deleter,this.doneCheckBox,this.pName)
        return this.masterElem
      }
      this.removeElement = (e)=>{
        this.masterElem.parentNode.removeChild(this.masterElem)
        tasks.splice(tasks.indexOf(this),1)
      }

    }
    
}

let addAnewTask = (e)=>{
    e.preventDefault()
    let currentName = document.querySelector(`#taskName`).value
    let newTasks = new Task(currentName);
    listTaskDiv.insertBefore(newTasks.domElemCreator(), deletAll)
    document.querySelector(`#taskName`).value = ""
} 

let removeAll = ()=>{
    for (let index = 0; index < tasks.length; index++) {
        const element = tasks[index];
        console.log(element)
        element.removeElement()
    }
}

adder.addEventListener("click",addAnewTask)
deletAll.addEventListener("click",removeAll)
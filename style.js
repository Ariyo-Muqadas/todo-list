const taskForm = document.getElementById("form-task");

const taskInput = document.getElementById("task");

// const btnSubmit = document.getElementById("btn")
const btnClear = document.getElementById("btn-clear");

const list = document.getElementById("collection");


taskForm.addEventListener("submit", addTask)

function addTask(e){
if(taskInput.value == ""){
  alert("Add task")
  return
}

let row = document.createElement("li")

row.className = "collection-item"
row.appendChild(document.createTextNode(taskInput.value));

list.appendChild(row)


const link = document.createElement("i");

link.className = "delete-item"
link.innerHTML = '<i class="fas fa-trash"></i>'

row.appendChild(link);

taskInput.value = ""

// console.log(row)

  e.preventDefault()
}


btnClear.addEventListener("click", function(e){
  list.innerHTML = "";
})


list.addEventListener("click", taskDelete)

function taskDelete(e){
  if(e.target.className =("delete-item")){
    e.target.parentElement.parentElement.remove()
  }

  e.preventDefault()
}
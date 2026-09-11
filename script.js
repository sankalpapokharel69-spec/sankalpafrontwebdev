let task = document.getElementById("task")
let tasklist = document.getElementById("task-list")
let add = document.getElementById("add-button")
let empty = document.getElementById("empty")
let counter = document.getElementById("counter")
let count = 0
add.addEventListener("click", function(){
    if(task.value === ""){
        alert("Enter task first")
        remove.remove()
    }
    count++
counter.textContent = count
    let li = document.createElement("li")
    let remove = document.createElement("button")
let checkbox = document.createElement("input")
checkbox.id = "checkbox"
checkbox.type = "checkbox"
    remove.textContent = "X"
    remove.id = "remove"
    li.textContent = task.value
    tasklist.appendChild(checkbox)
    tasklist.appendChild(li)
    tasklist.appendChild(remove)
    remove.addEventListener("click", function(){
        remove.remove()
        li.remove()
        checkbox.remove()
        count--
        counter.textContent = count
    })
    empty.addEventListener("click", function(){
    li.remove()
    checkbox.remove()
    remove.remove()
    count = 0
    counter.textContent = count
})
})
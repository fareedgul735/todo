const todoBtn = document.getElementById("todo-btn");
const todoList = (e) => {
    e.preventDefault();
    const todoInput = document.getElementById("todo-input");
    const todoOutput = document.getElementById("todo-output");
    const errShow = document.getElementById("errShow");
    const notFound = document.getElementById("notFound");
    const liContent = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    const id = Date.now();

    const payload = {
        todoInput: todoInput.value,
        userId: id,
    }
    const inputValue = todoInput.value.trim();


    if (inputValue === "") {
        todoInput.style.border = "1px solid red"
        errShow.style.color = "red";
        errShow.innerText = "fields are required";
        notFound.innerText = "Todos Not Found!"
        return errShow;
    } else {
        errShow.innerText = ""
        todoInput.style.border = "1px solid gray"
        notFound.innerText = ""
    }

    deleteBtn.innerText = "Delete"
    editBtn.innerText = "Edit"
    todoOutput.append(liContent);


    liContent.textContent = payload.todoInput;
    liContent.dataset.id = payload.userId;
    liContent.append(deleteBtn, editBtn)


    deleteBtn.addEventListener("click", () => {
        const confirmation = confirm("are you sure you want to delete todo!");
        if (confirmation) {
            todoOutput.removeChild(liContent);
            return
        }
        if (todoOutput.children.length === 0) {
            notFound.innerText = "Todos Not Found!"
        }
    });

    editBtn.addEventListener("click", () => {
        const updateValue = liContent.firstChild.textContent.trim();
        todoInput.value = updateValue;
        todoOutput.removeChild(liContent);
        if (todoOutput.children.length === 0) {
            notFound.innerText = "Todos Not Found!"
        }
    })

    todoInput.value = ""

}

todoBtn.addEventListener("click", todoList)
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

let todos = [];

function renderTodos() {
    todoList.innerHTML = "";

    for (let i = 0; i < todos.length; i++) { 
        let div = document.createElement("div");
        div.setAttribute("class", "todo_item");

        let span = document.createElement("span");
        span.innerText = todos[i].title;

        let buttonbox = document.createElement("div"); 
        buttonbox.setAttribute("class", "button-box");

        const editbtn = document.createElement("button");
        editbtn.className = "edit-btn";
        editbtn.innerText = "Edit";
        editbtn.onclick = () => editTodo(i);

        const deletebtn = document.createElement("button");
        deletebtn.className = "delete-btn";
        deletebtn.innerText = "Delete";
        deletebtn.onclick = () => deleteTodo(i);

        buttonbox.appendChild(editbtn);
        buttonbox.appendChild(deletebtn);
        div.appendChild(span);
        div.appendChild(buttonbox);
        
        todoList.appendChild(div);
    }
}

function addTodo() {
    if (input.value.trim() === "") { 
        alert("Enter your Text");
        return;
    }

    todos.push({
        id: Date.now(),
        date : Date(),
        title: input.value
    });

    input.value = ""; 
    renderTodos(); 
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
};


let editIndex = null; 

function editTodo(index) {
    input.value = todos[index].title;
    addBtn.innerText = "Update";
    editIndex = index;
    input.focus(); 
}

function addTodo() {
    let text = input.value.trim();
    
    if (text === "") {
        alert("Enter Your Text");
        return;
    }

    if (editIndex !== null) {
        todos[editIndex].title = text;
        editIndex = null;
        addBtn.innerText = "Add";
    } else {
        
        todos.push({
            id: Date.now(),
            title: text
        });
    }

    input.value = ""; 
    renderTodos(); 
};


addBtn.addEventListener("click", addTodo);


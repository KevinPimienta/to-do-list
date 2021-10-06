const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));

if(todos){
    todos.forEach((todo) => {
        addTodo(todo);
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
});

function addTodo(todo) {
    let todoText = input.value;

    if(todo){
        todoText= todo.text;
    }

    if (todoText){
        const todo1 = document.createElement('li');
        if (todo && todo.completed) {
            todo1.classList.add("completed");
        }
        todo1.innerText= todoText;
        todo1.addEventListener("click", ()=> {
            todo1.classList.toggle("completed");
            updateList();
        });

        todo1.addEventListener("contextmenu", (e)=>{
            e.preventDefault();
            todo1.remove();
            updateList();
        });

        todosUL.appendChild(todo1);
        input.value="";
        updateList;
    }
}

function updateList(){
     const todos1 = document.querySelectorAll("li");
     const todos = [];

     todos1.forEach((todo1)=>{
         todos.push({
             text: todo1.innerText,
             completed: todo1.classList.contains("completed"),
         });
     });

     localStorage.setItem("todos", JSON.stringify(todos));
}
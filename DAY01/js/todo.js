const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.querySelector('#todo-form input')
const toDoList = document.getElementById("todo-list");


let toDos = [];

const TODOS_KEY = "todos"


function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}




function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    
    toDos = toDos.filter(toDo => toDo.id != parseInt(li.id));
    saveToDos();
}


function paintToDo(newTodo){
    
    const li =document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    
    span.innerText=newTodo.text;
    const button = document.createElement("button");
    button.innerText="❌";
    
    button.addEventListener("click",deleteToDo);
    
    li.appendChild(span);
    li.appendChild(button);
    
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// console.log(savedToDos);

// function sayHello(item){
//     console.log("this is the turn of ", item);
// } 애로우 펑션을 사용하므로 주석 처리

if(savedToDos != null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    // parsedToDos.forEach((item)=> console.log("this is the turn of "+item));
}   //forEach(item) 으로 각각 실행


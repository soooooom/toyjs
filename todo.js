const todoForm = document.querySelector(".js-todoForm"),
    todoInput  = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-todoList");

const TODOS_LS = "toDos";
let toDos =[];

function loadToDos(){
    const loadedtoDos = localStorage.getItem(TODOS_LS);
    if(loadedtoDos !== null){
        const parsedtoDos = JSON.parse(loadedtoDos);
        parsedtoDos.forEach(function (toDO){
            paintToDo(toDO.text);
        });
    }
}
function savetoDos(){
    /* 모든 js object 를 string 화 :: JSON.stringify */
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function paintToDo(text){
    /*li 을 생성 */
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.value = "×";
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    todoList.appendChild(li);
    /* for localStorage */
    const todoObj = {
        text : text,
        id : newId
    };
    toDos.push(todoObj);
    savetoDos();

    delBtn.addEventListener("click", handleDelClick);
}
function handleDelClick(event){
    const btn = event.target;
    const li = btn.parentElement;
    /* const delID = li.id */
    todoList.removeChild(li);
    const cleantoDos=toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    console.log(cleantoDos);
    toDos =cleantoDos;
    savetoDos();
}
function handleSubmitTodos(event){
    event.preventDefault();
    const todoValue = todoInput.value;
    /*console.log(todoValue);*/
    paintToDo(todoValue);
    todoInput.value ="";
}
function init(){
    loadToDos();
    todoForm.addEventListener("submit",handleSubmitTodos);
}

init();
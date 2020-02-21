const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function paintGreetings(text){
    /* class 목록에 문자열을 추가,삭제 
        form 을 숨겨야 text 를 painting 할 수 있다*/
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `GREET ${text}`;
    /* 앞에 $가 붙으면 query 임 */
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreetings(currentValue);
    saveName(currentValue);
}
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}
function saveName(text){
    localStorage.setItem(USER_LS,text);
}
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    /* 'USER_LS == "currentUser" 라는 key 값을 가진 데이터를 가져온다' */
    if(currentUser !== null){
        paintGreetings(currentUser);
    }
    else{
        askForName();
    }
}

function init(){
    loadName();
}

init();
const clockContainer = document.querySelector(".js-clock"), 
 clockTitle = clockContainer.querySelector(".js-title");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours>13?`${hours}`:`0${hours-12}`}:${
        minutes<10?`0${minutes}`:`${minutes}`}:${
        seconds<10?`0${seconds}`:`${seconds}`} `;
}

function init(){
    getTime();
    setInterval(getTime,1000);
    /* 1000msec = 1sec*/
};
init();
const body = document.querySelector("body");
const IMG_NUMBER = 3


function paintImg(imgNum){
    const image = new Image();
    image.src = `./img/${imgNum}.png`
    body.appendChild(image);
    image.classList.add('bgImage');
    /* bgImage 라는 classList 생성 */
}
function genRandom(){
    const num = Math.floor(Math.random() * IMG_NUMBER) + 1;
    return num;
}
function init(){
    const randomNumber = genRandom();
    paintImg(randomNumber);
}
init();
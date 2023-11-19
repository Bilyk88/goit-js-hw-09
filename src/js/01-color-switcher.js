const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', onClickStart);
stopBtn.addEventListener('click', onClickStop);

let timerId = null;

function onClickStart() {
    changeColor();
    timerId = setInterval(changeColor, 1000);
    startBtn.setAttribute("disabled", "disabled");
    stopBtn.removeAttribute("disabled");
}


function changeColor() {
    body.style.backgroundColor = getRandomHexColor();
}


function onClickStop() {
    clearInterval(timerId);
    startBtn.removeAttribute("disabled");
    stopBtn.setAttribute("disabled", "disabled");
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
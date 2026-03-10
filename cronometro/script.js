const timerEl = document.getElementById("timer");
const voltaList = document.getElementById("voltas-list");

let intervalid = 0;
let timer = 0;
let voltas = [];

const formatTime = (time) => {
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor(time / 360000)/6000;
    const minute = Math.floor(time / 6000) / 100;
}

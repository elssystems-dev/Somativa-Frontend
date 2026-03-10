const timerEl = document.getElementById("timer");
const voltaList = document.getElementById("voltas-list");

let intervalid = 0;
let timer = 0;
let voltas = [];

const formatTime = (time) => {
    const horas = Math.floor(time / 360000);
    const minutos = Math.floor(time / 360000)/6000;
    const segundos = Math.floor(time / 6000) / 100;
    const milesimos = time % 100;

    return `${horas.toString().padStart(2,'0')}:${minutos.toString().padStart(2,'0')}:${segundos.toString().padStart(2,'0')}:${milesimos.toString().padStart(2,'0')}`
}

const toggleTimer = () => {
    const button = document.getElementById('power');
    const action = document.getAttribute('action');
    
    clearInterval(intervalId);

    if (action =='start' || action =='continue' )
        intervalid = setInterval(() =>
    )
    
}
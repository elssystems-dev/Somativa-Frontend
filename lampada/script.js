const ligar = document.getElementById("ligar");
const desligar = document.getElementById("desligar");
const quebrar = document.getElementById("quebrar");
const trocar = document.getElementById("trocar");

const lampada = document.getElementById("lampada");

function ligarLampada() {
  lampada.src = "img/lampada-acesa.png";
}

function desligarLampada() {
  lampada.src = "img/lampada-apagada.png";
}

ligar.addEventListener("click", ligarLampada);
desligar.addEventListener("click", desligarLampada);

quebrar.addEventListener("click", function () {
  lampada.src = "img/lampada-quebrada.png";
  lampada.classList.add("lampada-quebrada");
});

trocar.addEventListener("click", function () {
  lampada.src = "img/lampada-apagada.png";
  lampada.classList.remove("lampada-quebrada");
});

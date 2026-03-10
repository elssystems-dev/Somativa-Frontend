const mostraSelecao = document.getElementById("selecao");
const mostraDisputa = document.getElementById("disputa");
const textoOpcao = document.getElementById("texto-opcao");
const botoes = document.querySelectorAll(".botao");
const jogarDenovo = document.getElementById("jogar-denovo");

let escolhaUsuario;
let escolhaComputador;

// Loop para configurar todos os botões
botoes.forEach((botao) => {

  if (botao.id === "jogar-denovo") {
    voltarAoInicio();
    return;
  }

  botao.addEventListener("mouseenter", () => {
    textoOpcao.textContent =
      botao.id.charAt(0).toUpperCase() + botao.id.slice(1);
  });


  botao.addEventListener("click", () => {
    escolhaUsuario = botao.id;
    iniciarDisputa();
  });

});

function iniciarDisputa() {
  mostraSelecao.style.display = "none";
  mostraDisputa.style.display = "flex";
  gerarEscolhaComputador();
}

function voltarAoInicio(){
    mostraSelecao.style.display = "flex";
    mostraDisputa.style.display = "none";
}

function gerarEscolhaComputador() {
  const opcoes = ["pedra", "papel", "tesoura"];
  const numeroAleatorio = Math.floor(Math.random() * 3);
  escolhaComputador = opcoes[numeroAleatorio];

  console.log("Você escolheu: " + escolhaUsuario);
  console.log("PC escolheu: " + escolhaComputador);
}

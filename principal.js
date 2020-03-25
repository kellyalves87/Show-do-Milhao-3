//variaveis criadas com os elementos que quero esconder quando o usuário digitar seu nome
let playElement = document.getElementById("play");
let msgElement = document.getElementById("msg");
let choiceElement = document.getElementById("choise");
let generalKnowledge = document.getElementById("generalKnowledge");
let historyOfBrazil = document.getElementById("historyOfBrazil");
let results = document.getElementById("results");
let correctAnswers = document.getElementById("correctAnswers");
let letsPlayAgain = document.getElementById("letsPlayAgain");
let choiseAgain = document.getElementById("choiseAgain");


//quando iniciar as opções, zera tudo
function init(){

    playElement.style.display = "none";
    msgElement.style.display = "none";
    choiceElement.style.display = "none";
    generalKnowledge.style.display = "none";
    historyOfBrazil.style.display = "none";
    results.style.display = "none";
    correctAnswers.style.display = "none";
    letsPlayAgain.style.display = "none";
    choiseAgain.style.display = "none";

    appearMessage();
}

//função criada para aparecer/esconder as opções de escolha do jogador
function playHistoryOfBrazil(){
    historyOfBrazil.style.display = "block";
    generalKnowledge.style.display = "none";
}

function playGeneralKnowledge(){
    generalKnowledge.style.display = "block";
    historyOfBrazil.style.display = "none";
}

function initGame(){
    choiceElement.style.display = "block";
}

//função criada para aparecer a mensagem de boas vindas quando o usuário inserir o nome
function appearMessage(){

    let nomeElement = document.getElementById("nome");

    nomeElement.addEventListener("keyup", function(event){
        event.preventDefault();
        if (event.keyCode === 13) {
            let nome = nomeElement.value;

            msgElement.textContent = "Olá " + nome + "!!!";
            msgElement.style.display = "block";
            playElement.style.display = "block";
        }
    });
}

init();

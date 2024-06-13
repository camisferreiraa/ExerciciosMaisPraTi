//Exercicio 06

const prompt = require("prompt-sync")();

let numSorteado;
let tentativas = 3;
let chuteDoJogador;
const opcoes = [1,2,3,4,5];

console.log("\n\nBem vindo ao JOGO DA ADVINHAÇÃO!\n");
numSorteado = opcoes[Math.floor(Math.random() * 3)];
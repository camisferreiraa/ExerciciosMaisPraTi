//Exercicio 06.js
/*Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado.*/

const prompt = require("prompt-sync")();

let numSorteado;
let tentativas = 3;
let chuteDoJogador;
const opcoes = [1,2,3,4,5];

console.log("\n\nBem vindo ao JOGO DA ADVINHAÇÃO!\n");
numSorteado = opcoes[Math.floor(Math.random() * 3)];
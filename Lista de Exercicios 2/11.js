//Exercicio 11° 
const prompt = require("prompt-sync")();

let a1 = parseFloat(prompt("Digite o primeiro termo da PA:"));
let razao = parseFloat(prompt("Digite a razão da PA:"));


let soma = 0;

console.log("Os 10 primeiros elementos da PA são:");

for (let i = 0; i < 10; i++) {
    let termo = a1 + i * razao;

    soma += termo; 
    console.log(termo);
}

console.log("A soma de todos os valores da PA é:", soma);

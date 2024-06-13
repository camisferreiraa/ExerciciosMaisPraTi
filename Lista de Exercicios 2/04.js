//Exercicio 04°

const prompt = require("prompt-sync")();

let r1 = parseFloat(prompt("Insira o comprimento do primeiro segmento: "));
let r2 = parseFloat(prompt("Insira o comprimento do segundo segmento:"));
let r3 = parseFloat(prompt("Insira o comprimento do terceiro segmento: "));

if (r1 + r2 < r3 || r2 + r3 < r1 || r1 + r3 < r2){
    console.log("Os comprimentos inseridos formar um triângulo.");
}else {
    console.log("Os comprimentos inseridos não formam um triângulo");
}
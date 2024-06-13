//Exercicio 01° 

const prompt = require("prompt-sync")();

let cigarrosDia = parseInt(prompt("Quantos cigarros fuma por dia? "));
let tempoFumando = parseInt(prompt("Quantos anos do uso de cigarro?")) * 365;

let minPerdidosPorAno = tempoFumando/10;

let tempoPerdidoTotal = cigarrosDia * minPerdidosPorAno;

let diasPerdidos = parseInt(tempoPerdidoTotal / 1440);

console.log(`O fumante perderá ${diasPerdidos} dias de vida.`);


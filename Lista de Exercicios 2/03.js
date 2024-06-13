//Exercicio 03.js

const prompt = require("prompt-sync")();

let wishKm = parseInt(prompt("Quantos quilomêtros você vai percorrer?"))
let calc;

if (wishKm <= 200) {
    calc = wishKm * 0.50;
 } else{
    calc = wishKm * 0.45
 }

console.log(`O valor da passagem é : ${calc} reais`);
//Exercicio 02° 

const prompt = require("prompt-sync")();
let vel = parseFloat(prompt("Qual é a velocidade atual do carro? "));
vel = Math.round(vel);
if (vel > 80) {
    let kmAcessados = vel - 80;
    console.log(`Multado! Você excedeu a velocidade permitida em ${kmAcessados}Km/h.`);
    let multa = kmAcessados * 5;
    console.log(`O valor da multa é de R$ ${multa}.`);
} else {
    console.log("Tudo certo! Dirija com segurança.");
}
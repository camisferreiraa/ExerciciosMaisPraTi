//Exercicio 18°
const prompt = require("prompt-sync")();


let nome = prompt("DIGITE O NOME DO FUNCIONARIO:");
let cargo = prompt("DIGITE O CARGO DO FUNCIONARIO:");
let salario = parseFloat(prompt("DIGITE O SALARIO DO FUNCIONARIO:"));

console.log("DADOS DO FUNCIONARIO:")
console.log(`O nome do funcionário: ${nome}`)
console.log(`Cargo do funcionário: ${cargo}`)
console.log(`Salario do funcionário: ${salario.toFixed(2)}`)

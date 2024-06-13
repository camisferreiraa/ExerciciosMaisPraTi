//Exercicio 10°
let soma = 0;
let menor;
let quantidadeValores = 0;
let quantidadePares = 0;

const prompt = require("prompt-sync")();

do {
    
    let numero = parseFloat(prompt("Digite um número:"));

   
    if (quantidadeValores === 0) {
        menor = numero;
    } else {
        
        menor = Math.min(numero, menor);
    }

    soma += numero;

    
    quantidadeValores++;

   
    if (numero % 2 === 0) {
        quantidadePares++;
    }

  
    var continuar = prompt("Deseja continuar? (s/n)").toLowerCase();
} while (continuar === 's');


let media = soma / quantidadeValores;
console.log("Soma de todos os valores:", soma);
console.log("Menor valor digitado:", menor);
console.log("Média entre todos os valores:", media.toFixed(2)); // Limita a duas casas decimais
console.log("Quantidade de valores pares:", quantidadePares);
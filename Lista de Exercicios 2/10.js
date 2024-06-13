/*Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.*/

let soma = 0;
let menor;
let quantidadeValores = 0;
let quantidadePares = 0;

const prompt = require("prompt-sync")();

do {
    // Solicita ao usuário um número
    let numero = parseFloat(prompt("Digite um número:"));

    // Verifica se é o primeiro número digitado para atribuir ao menor
    if (quantidadeValores === 0) {
        menor = numero;
    } else {
        // Verifica se o número é menor que o menor número já registrado
        menor = Math.min(numero, menor);
    }

    // Adiciona o número à soma
    soma += numero;

    // Incrementa a quantidade de valores digitados
    quantidadeValores++;

    // Verifica se o número é par
    if (numero % 2 === 0) {
        quantidadePares++;
    }

    // Pergunta se o usuário quer continuar
    var continuar = prompt("Deseja continuar? (s/n)").toLowerCase();
} while (continuar === 's');

// Calcula a média
let media = soma / quantidadeValores;

// Mostra os resultados
console.log("Soma de todos os valores:", soma);
console.log("Menor valor digitado:", menor);
console.log("Média entre todos os valores:", media.toFixed(2)); // Limita a duas casas decimais
console.log("Quantidade de valores pares:", quantidadePares);
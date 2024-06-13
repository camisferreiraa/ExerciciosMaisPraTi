//Exercicio 28°
const prompt = require("prompt-sync")();

function calcularSomaAcimaAbaixoDiagonalPrincipal(matriz) {
    let somaAcimaDiagonal = 0;
    let somaAbaixoDiagonal = 0;

   
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (j > i) {
                
                somaAcimaDiagonal += matriz[i][j];
            } else if (i > j) {
               
                somaAbaixoDiagonal += matriz[i][j];
            }
        }
    }

    return {
        somaAcimaDiagonal: somaAcimaDiagonal,
        somaAbaixoDiagonal: somaAbaixoDiagonal
    };
}


function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(" "));
    }
}


let matriz = [];
for (let i = 0; i < 10; i++) {
    matriz[i] = [];
    for (let j = 0; j < 10; j++) {
       
        matriz[i][j] = parseFloat(prompt("Digite o número da posição [" + (i + 1) + "][" + (j + 1) + "]:"));
    }
}


let resultados = calcularSomaAcimaAbaixoDiagonalPrincipal(matriz);
let somaAcimaDiagonal = resultados.somaAcimaDiagonal;
let somaAbaixoDiagonal = resultados.somaAbaixoDiagonal;


console.log("Matriz 10x10:");
imprimirMatriz(matriz);
console.log("\nSoma dos elementos acima da diagonal principal: " + somaAcimaDiagonal);
console.log("Soma dos elementos abaixo da diagonal principal: " + somaAbaixoDiagonal);

//Exercicio 30°
const prompt = require("prompt-sync")();

function calcularSomasLinhasColunas(matriz) {
    let somasLinhas = [];
    let somasColunas = [];

    
    for (let i = 0; i < matriz.length; i++) {
        somasLinhas[i] = 0;
        somasColunas[i] = 0;
    }


    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            somasLinhas[i] += matriz[i][j];
            somasColunas[j] += matriz[i][j];
        }
    }

    return {
        somasLinhas: somasLinhas,
        somasColunas: somasColunas
    };
}


function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(" "));
    }
}


function imprimirVetor(vetor) {
    console.log(vetor.join(" "));
}

let matrizM = [];
for (let i = 0; i < 5; i++) {
    matrizM[i] = [];
    for (let j = 0; j < 5; j++) {
        
        matrizM[i][j] = parseFloat(prompt("Digite o número da posição [" + (i + 1) + "][" + (j + 1) + "]:"));
    }
}


let resultados = calcularSomasLinhasColunas(matrizM);
let somasLinhas = resultados.somasLinhas;
let somasColunas = resultados.somasColunas;


console.log("Matriz M(5,5):");
imprimirMatriz(matrizM);
console.log("\nVetor SL (Somas das Linhas):");
imprimirVetor(somasLinhas);
console.log("Vetor SC (Somas das Colunas):");
imprimirVetor(somasColunas);

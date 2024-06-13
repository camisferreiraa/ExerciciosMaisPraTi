//Exercicio 25°
const prompt = require("prompt-sync")();
function calcularSomaColunas(matriz) {
    let somaColunas = [];

    
    for (let j = 0; j < matriz[0].length; j++) {
        somaColunas[j] = 0;
    }

    
    for (let j = 0; j < matriz[0].length; j++) {
        
        for (let i = 0; i < matriz.length; i++) {
            somaColunas[j] += matriz[i][j];
        }
    }

    return somaColunas;
}


function imprimirVetor(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        console.log("Soma da coluna " + (i + 1) + ": " + vetor[i]);
    }
}


let matriz = [];
for (let i = 0; i < 2; i++) {
    matriz[i] = [];
    for (let j = 0; j < 2; j++) {
        
        matriz[i][j] = parseFloat(prompt("Digite o número da posição [" + (i + 1) + "][" + (j + 1) + "]:"));
    }
}

let somaColunas = calcularSomaColunas(matriz);


console.log("Soma de cada coluna separadamente:");
imprimirVetor(somaColunas);

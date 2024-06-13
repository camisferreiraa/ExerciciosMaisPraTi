//Exercicio 29°
const prompt = require("prompt-sync")();
function calcularSomas(matriz) {
    let somaLinha4 = 0;
    let somaColuna2 = 0;
    let somaDiagonalPrincipal = 0;
    let somaTotal = 0;

    
    for (let j = 0; j < matriz[3].length; j++) {
        somaLinha4 += matriz[3][j];
    }

   
    for (let i = 0; i < matriz.length; i++) {
        somaColuna2 += matriz[i][1];
    }

   
    for (let i = 0; i < matriz.length; i++) {
        somaDiagonalPrincipal += matriz[i][i];
    }

    
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            somaTotal += matriz[i][j];
        }
    }

    return {
        somaLinha4: somaLinha4,
        somaColuna2: somaColuna2,
        somaDiagonalPrincipal: somaDiagonalPrincipal,
        somaTotal: somaTotal
    };
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(" "));
    }
}


let matrizM = [];
for (let i = 0; i < 5; i++) {
    matrizM[i] = [];
    for (let j = 0; j < 5; j++) {
  
        matrizM[i][j] = parseFloat(prompt("Digite o número da posição [" + (i + 1) + "][" + (j + 1) + "]:"));
    }
}


let resultados = calcularSomas(matrizM);
let somaLinha4 = resultados.somaLinha4;
let somaColuna2 = resultados.somaColuna2;
let somaDiagonalPrincipal = resultados.somaDiagonalPrincipal;
let somaTotal = resultados.somaTotal;


console.log("Matriz M(5,5):");
imprimirMatriz(matrizM);
console.log("\nSoma da linha 4: " + somaLinha4);
console.log("Soma da coluna 2: " + somaColuna2);
console.log("Soma da diagonal principal: " + somaDiagonalPrincipal);
console.log("Soma de todos os elementos: " + somaTotal);

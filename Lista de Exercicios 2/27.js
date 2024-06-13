//Exercicio 27°
const prompt = require("prompt-sync")();

function multiplicarMatrizPorA(matriz, valorA) {
    let vetorV = [];
    let k = 0;

   
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            
            vetorV[k] = matriz[i][j] * valorA;
            k++;
        }
    }

    return vetorV;
}


function imprimirVetor(vetor) {
    console.log(vetor.join(" "));
}


let matrizM = [];
for (let i = 0; i < 6; i++) {
    matrizM[i] = [];
    for (let j = 0; j < 6; j++) {
      
        matrizM[i][j] = parseFloat(prompt("Digite o número da posição [" + (i + 1) + "][" + (j + 1) + "]:"));
    }
}


let valorA = parseFloat(prompt("Digite o valor de A:"));


let vetorV = multiplicarMatrizPorA(matrizM, valorA);


console.log("Vetor V(36) com os elementos da matriz M multiplicados por A:");
imprimirVetor(vetorV);

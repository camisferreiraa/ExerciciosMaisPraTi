// Exercicio 15°

const prompt = require("prompt-sync")();
function ehPar(numero) {
    return numero % 2 === 0;
}

function encontrarPares() {
   
    var numeros = [];

  
    for (var i = 0; i < 10; i++) {
        var numero = prompt("Digite o " + (i + 1) + "º número inteiro:");

       
        numeros.push(numero);
    }

  
    var indicesPares = [];


    for (var i = 0; i < numeros.length; i++) {
        if (ehPar(numeros[i])) {
            indicesPares.push(i);
        }
    }

    if (indicesPares.length > 0) {
        console.log("Números pares encontrados:");
        for (var i = 0; i < indicesPares.length; i++) {
            var indice = indicesPares[i];
            console.log("Número " + numeros[indice] + " na posição " + indice);
        }
    } else {
        console.log("Nenhum número par foi encontrado.");
    }
}

encontrarPares();



// Exercicio 15°

// Função para verificar se um número é par
const prompt = require("prompt-sync")();
function ehPar(numero) {
    return numero % 2 === 0;
}

// Função principal
function encontrarPares() {
    // Vetor para armazenar os números digitados
    var numeros = [];

    // Solicitar ao usuário que digite 10 números inteiros
    for (var i = 0; i < 10; i++) {
        var numero = prompt("Digite o " + (i + 1) + "º número inteiro:");

        // Adicionando o número ao vetor
        numeros.push(numero);
    }

    // Vetor para armazenar os índices dos números pares
    var indicesPares = [];

    // Verificando quais números são pares e armazenando seus índices
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



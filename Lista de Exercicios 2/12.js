//Exercicio 12°
/*Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.*/ 

function gerarSequencia(n) {
    
    let vetor = [1, 1];


    for (let i = 2; i < n; i++) {
        let proximo = vetor[i - 1] + vetor[i - 2];
        vetor.push(proximo);
    }

    return vetor;
}

let sequenciaDeFibonacci = gerarSequencia(10);
console.log(sequenciaDeFibonacci);
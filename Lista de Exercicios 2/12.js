//Exercicio 12°

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
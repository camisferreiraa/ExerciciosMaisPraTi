/*Crie um programa que preencha automaticamente (usando lógica, não apenas
    atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
    da sequência de Fibonacci.*/
    // Função para preencher um vetor com os primeiros 'n' números da sequência de Fibonacci
    function gerarSequencia(n) {
    
        let vetor = [1, 1];
    
    
        for (let i = 2; i < n; i++) {
            let proximo = vetor[i - 1] + vetor[i - 2];
            vetor.push(proximo);
        }
    
        return vetor;
    }
    
    let sequenciaDeFibonacci = gerarSequencia(15);
    console.log(sequenciaDeFibonacci);
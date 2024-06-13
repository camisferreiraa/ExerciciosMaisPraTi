//Exercicio 38

function processVector(vetor, operacao) {
    switch (operacao) {
        case 1:
            // Soma dos elementos
            const soma = vetor.reduce((acc, val) => acc + val, 0);
            console.log("Soma dos elementos:", soma);
            break;
        case 2:
            // Produto dos elementos
            const produto = vetor.reduce((acc, val) => acc * val, 1);
            console.log("Produto dos elementos:", produto);
            break;
        case 3:
            // Média dos elementos
            const media = vetor.reduce((acc, val) => acc + val, 0) / vetor.length;
            console.log("Média dos elementos:", media);
            break;
        case 4:
            // Ordenar os elementos em ordem crescente
            const vetorOrdenado = [...vetor].sort((a, b) => a - b);
            console.log("Vetor ordenado em ordem crescente:", vetorOrdenado);
            break;
        case 5:
            // Mostrar o vetor
            console.log("Vetor:", vetor);
            break;
        default:
            console.log("Operação inválida");
    }
}

// Exemplo de uso da função
// Criar um vetor de 6 posições
const vetor = [5, 3, 8, 1, 9, 7];

// Variável identificadora da operação
const operacao = 4; // Pode ser 1, 2, 3, 4 ou 5

// Chamar a função com o vetor e a operação
processVector(vetor, operacao);

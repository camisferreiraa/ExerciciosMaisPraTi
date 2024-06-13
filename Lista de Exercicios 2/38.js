//Exercicio 38

function processVector(vetor, operacao) {
    switch (operacao) {
        case 1:
           
            const soma = vetor.reduce((acc, val) => acc + val, 0);
            console.log("Soma dos elementos:", soma);
            break;
        case 2:
            
            const produto = vetor.reduce((acc, val) => acc * val, 1);
            console.log("Produto dos elementos:", produto);
            break;
        case 3:
          
            const media = vetor.reduce((acc, val) => acc + val, 0) / vetor.length;
            console.log("Média dos elementos:", media);
            break;
        case 4:
            
            const vetorOrdenado = [...vetor].sort((a, b) => a - b);
            console.log("Vetor ordenado em ordem crescente:", vetorOrdenado);
            break;
        case 5:
            
            console.log("Vetor:", vetor);
            break;
        default:
            console.log("Operação inválida");
    }
}


const vetor = [5, 3, 8, 1, 9, 7];
const operacao = 4; 
processVector(vetor, operacao);

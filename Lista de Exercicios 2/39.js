function compactVector(A) {
    // Inicializar o vetor B vazio
    let B = [];

    // Iterar sobre o vetor A
    A.forEach(value => {
        // Adicionar ao vetor B somente se o valor for maior que 0
        if (value > 0) {
            B.push(value);
        }
    });

    // Retornar o vetor compactado B
    return B;
}

// Exemplo de uso da função
// Criar um vetor A de 100 posições com valores aleatórios entre -50 e 50
let A = Array.from({ length: 100 }, () => Math.floor(Math.random() * 101) - 50);

// Chamar a função para compactar o vetor
let B = compactVector(A);

// Exibir o vetor A original
console.log("Vetor A:", A);

// Exibir o vetor B compactado
console.log("Vetor B compactado:", B);

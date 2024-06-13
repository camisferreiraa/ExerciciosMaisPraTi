// Exercicio 43

function combinarObjetos(obj1, obj2) {
    // Combina as propriedades dos dois objetos
    // As propriedades de obj2 terão precedência sobre as de obj1 em caso de conflitos
    return { ...obj1, ...obj2 };
}

// Exemplo de uso
let obj1 = {
    nome: "Ana",
    idade: 25,
    cidade: "São Paulo"
};

let obj2 = {
    idade: 30,
    telefone: "1234-5678",
    email: "ana@example.com"
};

// Chamar a função para combinar os objetos
let objCombinado = combinarObjetos(obj1, obj2);

// Imprimir o objeto combinado
console.log("Objeto combinado:", objCombinado);

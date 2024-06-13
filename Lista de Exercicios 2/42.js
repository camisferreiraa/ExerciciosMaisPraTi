// Exercicio 42

// Criar o objeto dados com várias propriedades
let dados = {
    nome: "Ana",
    idade: 25,
    hobbies: ["leitura", "esportes", "viagens"],
    notas: [8, 9, 10],
    endereco: {
        cidade: "São Paulo",
        estado: "SP"
    },
    telefone: "1234-5678",
    cursos: ["Matemática", "Física", "Química"]
};

// Função que retorna um novo objeto com apenas as propriedades que são arrays
function filtrarPropriedadesArray(obj) {
    let resultado = {};
    for (let prop in obj) {
        if (Array.isArray(obj[prop])) {
            resultado[prop] = obj[prop];
        }
    }
    return resultado;
}

// Chamar a função e armazenar o resultado
let propriedadesArray = filtrarPropriedadesArray(dados);

// Imprimir o novo objeto com apenas as propriedades que são arrays
console.log("Propriedades que são arrays:", propriedadesArray);

// Exercicio 42°

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


function filtrarPropriedadesArray(obj) {
    let resultado = {};
    for (let prop in obj) {
        if (Array.isArray(obj[prop])) {
            resultado[prop] = obj[prop];
        }
    }
    return resultado;
}


let propriedadesArray = filtrarPropriedadesArray(dados);


console.log("Propriedades que são arrays:", propriedadesArray);

// Exercicio 43°

function combinarObjetos(obj1, obj2) {
   
    return { ...obj1, ...obj2 };
}

o
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

let objCombinado = combinarObjetos(obj1, obj2);


console.log("Objeto combinado:", objCombinado);

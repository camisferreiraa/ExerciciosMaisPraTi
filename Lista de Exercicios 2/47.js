function transformarObjeto(obj, func) {
    let novoObjeto = {};

    for (let chave in obj) {
        if (obj.hasOwnProperty(chave)) {
            novoObjeto[chave] = func(obj[chave]);
        }
    }

    return novoObjeto;
}

// Exemplo de uso
let objetoOriginal = {
    a: 1,
    b: 2,
    c: 3
};

// Função que será aplicada a cada propriedade
function dobrar(valor) {
    return valor * 2;
}

// Chamar a função para transformar o objeto
let objetoTransformado = transformarObjeto(objetoOriginal, dobrar);

// Imprimir o objeto transformado
console.log(objetoTransformado);

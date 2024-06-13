//Exercicio 47°
function transformarObjeto(obj, func) {
    let novoObjeto = {};

    for (let chave in obj) {
        if (obj.hasOwnProperty(chave)) {
            novoObjeto[chave] = func(obj[chave]);
        }
    }

    return novoObjeto;
}


let objetoOriginal = {
    a: 1,
    b: 2,
    c: 3
};


function dobrar(valor) {
    return valor * 2;
}


let objetoTransformado = transformarObjeto(objetoOriginal, dobrar);

console.log(objetoTransformado);

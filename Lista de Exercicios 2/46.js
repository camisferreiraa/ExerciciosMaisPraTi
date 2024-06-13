function totalVendasPorVendedor(vendas) {
    let resumoVendas = {};

    vendas.forEach(venda => {
        const vendedor = venda.vendedor;
        const valor = venda.valor;

        if (resumoVendas[vendedor]) {
            resumoVendas[vendedor] += valor;
        } else {
            resumoVendas[vendedor] = valor;
        }
    });

    return resumoVendas;
}

// Exemplo de uso
let vendas = [
    { vendedor: "Ana", valor: 150 },
    { vendedor: "Pedro", valor: 200 },
    { vendedor: "Ana", valor: 100 },
    { vendedor: "Clara", valor: 250 },
    { vendedor: "Pedro", valor: 150 },
    { vendedor: "Ana", valor: 200 },
];

let resumo = totalVendasPorVendedor(vendas);

// Imprimir o resumo das vendas por vendedor
console.log(resumo);

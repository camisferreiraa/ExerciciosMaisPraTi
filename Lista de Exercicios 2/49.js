function organizarTransacoesPorCategoria(transacoes) {
    let resultado = {};

    transacoes.forEach(transacao => {
        const { categoria, valor } = transacao;

        if (!resultado[categoria]) {
            resultado[categoria] = {
                transacoes: [],
                subtotal: 0
            };
        }

        resultado[categoria].transacoes.push(transacao);
        resultado[categoria].subtotal += valor;
    });

    return resultado;
}

// Exemplo de uso
const transacoes = [
    { id: 1, valor: 100, data: '2023-01-01', categoria: 'Alimentação' },
    { id: 2, valor: 50, data: '2023-01-02', categoria: 'Transporte' },
    { id: 3, valor: 200, data: '2023-01-03', categoria: 'Alimentação' },
    { id: 4, valor: 150, data: '2023-01-04', categoria: 'Entretenimento' },
    { id: 5, valor: 70, data: '2023-01-05', categoria: 'Transporte' },
    { id: 6, valor: 300, data: '2023-01-06', categoria: 'Saúde' }
];

const transacoesOrganizadas = organizarTransacoesPorCategoria(transacoes);

// Imprimir o resultado
console.log(transacoesOrganizadas);

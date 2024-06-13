// Exercicio 36

function processLottery(gabarito, apostadores) {
    apostadores.forEach(apostador => {
        const { numeroCartao, respostas } = apostador;
        let acertos = 0;

        // Contar número de acertos
        for (let i = 0; i < 13; i++) {
            if (respostas[i] === gabarito[i]) {
                acertos++;
            }
        }

        // Exibir número do apostador e número de acertos
        console.log(`Apostador ${numeroCartao} teve ${acertos} acertos.`);

        // Verificar se o apostador teve 13 acertos
        if (acertos === 13) {
            console.log("Parabéns, tu foi o GANHADOR!");
        }
    });
}

// Exemplo de uso da função
// Gabarito de exemplo
const gabarito = [1, 2, 1, 1, 2, 3, 3, 1, 2, 3, 1, 1, 2];

// Gerar 100 apostadores com números de cartão e respostas aleatórias
let apostadores = Array.from({ length: 100 }, (v, i) => ({
    numeroCartao: i + 1,
    respostas: Array.from({ length: 13 }, () => Math.floor(Math.random() * 3) + 1)
}));

// Chamar a função com o gabarito e os apostadores
processLottery(gabarito, apostadores);

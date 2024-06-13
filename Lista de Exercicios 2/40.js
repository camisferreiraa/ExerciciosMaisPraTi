function verificarApostas(resultadoOficial, apostas) {
    apostas.forEach((aposta, index) => {
        let acertouTodos = true;

        // Verificar se todos os números da aposta correspondem ao resultado oficial
        for (let i = 0; i < 5; i++) {
            if (aposta[i] !== resultadoOficial[i]) {
                acertouTodos = false;
                break;
            }
        }

        // Mostrar mensagem "Ganhador" se a aposta for igual ao resultado oficial
        if (acertouTodos) {
            console.log(`Apostador ${index + 1}: Ganhador`);
        } else {
            console.log(`Apostador ${index + 1}: Não ganhou`);
        }
    });
}

// Exemplo de uso da função
// Resultado oficial da Loto (5 números inteiros)
const resultadoOficial = [3, 12, 19, 27, 35];

// Gerar 50 conjuntos de apostas com valores aleatórios entre 1 e 50
let apostas = Array.from({ length: 50 }, () => Array.from({ length: 5 }, () => Math.floor(Math.random() * 50) + 1));

// Adicionar manualmente uma aposta vencedora para fins de teste
apostas[0] = [3, 12, 19, 27, 35];

// Chamar a função para verificar as apostas
verificarApostas(resultadoOficial, apostas);

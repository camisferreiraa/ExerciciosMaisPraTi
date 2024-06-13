// Exercicio 36°

function processLottery(gabarito, apostadores) {
    apostadores.forEach(apostador => {
        const { numeroCartao, respostas } = apostador;
        let acertos = 0;

       
        for (let i = 0; i < 13; i++) {
            if (respostas[i] === gabarito[i]) {
                acertos++;
            }
        }

       
        console.log(`Apostador ${numeroCartao} teve ${acertos} acertos.`);

       
        if (acertos === 13) {
            console.log("Parabéns, tu foi o GANHADOR!");
        }
    });
}


const gabarito = [1, 2, 1, 1, 2, 3, 3, 1, 2, 3, 1, 1, 2];


let apostadores = Array.from({ length: 100 }, (v, i) => ({
    numeroCartao: i + 1,
    respostas: Array.from({ length: 13 }, () => Math.floor(Math.random() * 3) + 1)
}));


processLottery(gabarito, apostadores);

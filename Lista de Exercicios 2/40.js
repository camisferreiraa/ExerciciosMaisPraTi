//Exercicio 40°
function verificarApostas(resultadoOficial, apostas) {
    apostas.forEach((aposta, index) => {
        let acertouTodos = true;

  
        for (let i = 0; i < 5; i++) {
            if (aposta[i] !== resultadoOficial[i]) {
                acertouTodos = false;
                break;
            }
        }

       
        if (acertouTodos) {
            console.log(`Apostador ${index + 1}: Ganhador`);
        } else {
            console.log(`Apostador ${index + 1}: Não ganhou`);
        }
    });
}


const resultadoOficial = [3, 12, 19, 27, 35];


let apostas = Array.from({ length: 50 }, () => Array.from({ length: 5 }, () => Math.floor(Math.random() * 50) + 1));


apostas[0] = [3, 12, 19, 27, 35];


verificarApostas(resultadoOficial, apostas);

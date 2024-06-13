//Exercicio 37°
function processProva(gabarito, alunos) {
    alunos.forEach((aluno, index) => {
        const { respostas } = aluno;
        let acertos = 0;

 
        for (let i = 0; i < 20; i++) {
            if (respostas[i] === gabarito[i]) {
                acertos++;
            }
        }

       
        console.log(`Aluno ${index + 1} teve ${acertos} acertos.`);

       
        if (acertos >= 12) {
            console.log("APROVADO");
        } else {
            console.log("REPROVADO");
        }
    });
}


const gabarito = ['A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E'];


let alunos = Array.from({ length: 50 }, () => ({
    respostas: Array.from({ length: 20 }, () => {
        const choices = ['A', 'B', 'C', 'D', 'E'];
        return choices[Math.floor(Math.random() * choices.length)];
    })
}));


processProva(gabarito, alunos);

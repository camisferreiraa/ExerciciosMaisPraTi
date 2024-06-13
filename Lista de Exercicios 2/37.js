function processProva(gabarito, alunos) {
    alunos.forEach((aluno, index) => {
        const { respostas } = aluno;
        let acertos = 0;

        // Contar número de acertos
        for (let i = 0; i < 20; i++) {
            if (respostas[i] === gabarito[i]) {
                acertos++;
            }
        }

        // Exibir número de acertos do aluno
        console.log(`Aluno ${index + 1} teve ${acertos} acertos.`);

        // Verificar se o aluno está APROVADO ou REPROVADO
        if (acertos >= 12) {
            console.log("APROVADO");
        } else {
            console.log("REPROVADO");
        }
    });
}

// Exemplo de uso da função
// Gabarito de exemplo (20 caracteres)
const gabarito = ['A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E'];

// Gerar 50 alunos com respostas aleatórias
let alunos = Array.from({ length: 50 }, () => ({
    respostas: Array.from({ length: 20 }, () => {
        const choices = ['A', 'B', 'C', 'D', 'E'];
        return choices[Math.floor(Math.random() * choices.length)];
    })
}));

// Chamar a função com o gabarito e os alunos
processProva(gabarito, alunos);

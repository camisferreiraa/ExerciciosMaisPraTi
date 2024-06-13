//Exercicio 09°

function lerFuncionario() {
    let salario = parseFloat(prompt("Digite o salário do funcionário:"));
    let sexo = prompt("Digite o sexo do funcionário (M para masculino, F para feminino):").toUpperCase();
    return { salario: salario, sexo: sexo };
}


function main() {
    let totalSalarioHomens = 0;
    let totalSalarioMulheres = 0;
    
    while (true) {
        let funcionario = lerFuncionario();
        
        if (funcionario.sexo === 'M') {
            totalSalarioHomens += funcionario.salario;
        } else if (funcionario.sexo === 'F') {
            totalSalarioMulheres += funcionario.salario;
        } else {
            alert("Sexo inválido. Por favor, digite M para masculino ou F para feminino.");
            continue;
        }
        
        let continuar = prompt("Deseja inserir dados de mais um funcionário? (S/N)").toUpperCase();
        if (continuar !== 'S') {
            break;
        }
    }
    

    console.log("Total de salário pago aos homens: R$" + totalSalarioHomens.toFixed(2));
    console.log("Total de salário pago às mulheres: R$" + totalSalarioMulheres.toFixed(2));
}
console.log(main());



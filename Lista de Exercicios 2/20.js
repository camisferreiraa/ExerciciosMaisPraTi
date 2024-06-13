//Exercicio 20°
const prompt = require("prompt-sync")();

function lerDadosFuncionario() {
    const matricula = prompt("Digite a matrícula do funcionário: ");
    const nome = prompt("Digite o nome do funcionário: ");
    const salarioBruto = parseFloat(prompt("Digite o salário bruto do funcionário: "));
    return { matricula, nome, salarioBruto };
  }

function calcularINSS(salarioBruto) {
    return salarioBruto * 0.12;
  }

function calcularSalarioLiquido(salarioBruto, deducaoINSS) {
    return salarioBruto - deducaoINSS;
  }

  function emitirContracheque(funcionario) {
    const deducaoINSS = calcularINSS(funcionario.salarioBruto);
    const salarioLiquido = calcularSalarioLiquido(funcionario.salarioBruto, deducaoINSS);
  
    console.log('-----------------------------------');
    console.log(`Matrícula: ${funcionario.matricula}`);
    console.log(`Nome: ${funcionario.nome}`);
    console.log(`Salário bruto: R$ ${funcionario.salarioBruto.toFixed(2)}`);
    console.log(`Dedução INSS: R$ ${deducaoINSS.toFixed(2)}`);
    console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);
    console.log('-----------------------------------');
  }
  

  function processarFolhaPagamento() {
    const numeroFuncionarios = 1;
    const funcionarios = [];
  
    for (let i = 0; i < numeroFuncionarios; i++) {
      console.log(`\nCadastro do funcionário ${i + 1}:`);
      const funcionario = lerDadosFuncionario();
      funcionarios.push(funcionario);
    }
  
    console.log('\nContracheques dos funcionários:');
    funcionarios.forEach(funcionario => emitirContracheque(funcionario));
  }
  
 
  processarFolhaPagamento();
  
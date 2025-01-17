//Exercicio 19°
const prompt = require('prompt-sync')();
function validarHorario(horas, minutos, segundos) {
  return (
    horas >= 0 && horas < 24 &&
    minutos >= 0 && minutos < 60 &&
    segundos >= 0 && segundos < 60
  );
}


function lerHorario() {
  let horas, minutos, segundos;
  let horarioValido = false;
  
  while (!horarioValido) {
    horas = parseInt(prompt("Digite as horas (0-23): "), 10);
    minutos = parseInt(prompt("Digite os minutos (0-59): "), 10);
    segundos = parseInt(prompt("Digite os segundos (0-59): "), 10);

    if (validarHorario(horas, minutos, segundos)) {
      horarioValido = true;
    } else {
      console.log("Horário inválido. Tente novamente.");
    }
  }

  return {horas, minutos, segundos };
}


function formatarHorario(horas, minutos, segundos) {
  return `${horas.toString().padStart(2, '0')}.${minutos.toString().padStart(2, '0')}.${segundos.toString().padStart(2, '0')}`;
}


let horarios = [];
for (let i = 0; i < 5; i++) {
  console.log(`Horário ${i + 1}:`);
  let horario = lerHorario();
  horarios.push(horario);
}

console.log("Horários formatados:");
horarios.forEach(horario => {
  console.log(formatarHorario(horario.horas, horario.minutos, horario.segundos));
});

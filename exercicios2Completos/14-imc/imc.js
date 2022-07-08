//Escreva uma função que calcula o índice de massa corporal (imc = peso / altura ** 2),  de acordo com a seguinte tabela:

//imc <= 25.0: "Normal"
//imc <= 30.0: "Sobrepeso"
// imc > 30: "Obeso"

const peso = parseFloat(prompt(`Insira seu peso em kg:`));
const altura = parseFloat(prompt(`Insira sua altura em cm: `));

const imc = (peso / (altura ** 2));

if (imc <= 18.5) {
  document.write (`Você está com subpeso.`);
} else if (imc <= 25.0) {
  document.write(`IMC normal`);
} else if (imc <= 30.0) {
  document.write(`Você está com sobrepeso`);
} else {
  document.write(`Você está obeso.`);
}


/*Receba os três lados de um triângulo. Informe se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno. 
Dica: pesquise sobre a regra para saber se os lados formam um triângulo e também sobre os tipos de triângulos.
*/
//condição de existência de triângulos: um de seus lados deve ser maior que o valor absoluto (módulo) da diferença dos outros dois lados e menor que a soma dos outros dois lados.

const ladoA = Number(prompt(`Insira a medida do lado A do triângulo (em cm):`));
const ladoB = Number(prompt(`Insira a medida do lado B do triângulo (em cm):`));
const ladoC = Number(prompt(`Insira a medida do lado C do triângulo (em cm):`));

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoB + ladoA) {
  alert(`Pode ser um triângulo!`);
  if (ladoA === ladoB && ladoB === ladoC) {
    alert(`É um triângulo equilátero.`);
  } else if (ladoA === ladoB || ladoB === ladoC || ladoC === ladoA) {
    alert(`É um triângulo isósceles.`);
  } else {
    alert(`É um triângulo escaleno.`);
  }
} else {
  alert(`Não pode ser um triângulo`);
}

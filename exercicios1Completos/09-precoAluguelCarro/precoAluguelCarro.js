document.write ("Recebe a quantidade de dias que o carro foi alugado e a quantidade de quilômetros rodados, e retorna o valor a ser pago: ")

const dias = Number (prompt("Informe a quantidade de dias que o carro foi alugado: "))
const km = Number (prompt("Informe a quantidade de quilômetros rodados"))
const valor = ((km/100) * 15) + (dias*60)

document.write ("</br> O valor da sua tarifa é:" + valor)
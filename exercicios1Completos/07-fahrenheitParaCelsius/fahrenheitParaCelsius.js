document.write ("Digite uma temperatura em Fahrenheit e transforma em Celsius: ")

const fahrenheit = Number (prompt("Digite uma temperatura em Fahrenheit:"))
const celsius = ((fahrenheit-32)*5) / 9

document.write( `</br> Convertendo para Celsius dará ${celsius} graus`)
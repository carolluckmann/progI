//Recebe três valores numéricos, e retorna o menor dos três.

const valor1 = parseInt (prompt(`Insira o primeiro valor:`))
const valor2 = parseInt(prompt(`Insira o segundo valor:`))
const valor3 = parseInt(prompt(`Insira o terceiro valor:`))

if (valor1 < valor2 && valor1 < valor3){
    alert (`O menor valor é ${valor1}`)
}
else if (valor2 < valor1 && valor2 < valor3){
    alert (`O menor valor é ${valor2}`)
}
else if (valor3 < valor1 && valor3 < valor2) {
    alert (`O menor valor é ${valor3}`)
}
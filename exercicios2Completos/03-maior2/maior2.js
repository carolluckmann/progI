// Construa um algoritmo que leia dois números inteiros. Verifique qual dos dois números é maior e o escreva.

const valor1 = Number(prompt("Insira um número inteiro: "))
const valor2 = Number(prompt("Insira mais um número inteiro: "))

if (valor1 > valor2){
    alert (`O ${valor1} é maior.`)
}
else {
    alert (`O ${valor2} é maior.`)
}
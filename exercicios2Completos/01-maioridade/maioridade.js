//Leia a idade de uma pessoa e informe se ela já chegou à maioridade. Se ela ainda não chegou, informe quantos anos faltam para a maioridade.

let idade = parseInt (prompt("Insira sua idade: "))

if (idade < 18) {
    const anosRestantes = (18-idade)
    alert (`Você ainda é menor de idade! Faltam ${anosRestantes} anos para atingir a maioridade.`)
}
else {
    alert ("Você já chegou à maioridade! ")
}
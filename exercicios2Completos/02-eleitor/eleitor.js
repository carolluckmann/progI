// Considerando que no Brasil é possível votar a partir dos 16 anos de idade, leia o ano de nascimento de uma pessoa e informe se ela poderá votar no ano atual. Ignore mês e dia de nascimento.

let anoNascimento = parseInt (prompt("Insira seu ano de nascimento: "))

const anoAtual = 2022

if (anoAtual - anoNascimento >= 16) {
    alert (`Você pode votar esse ano.`)
}
else {
    alert("Você não pode votar ainda.")
}
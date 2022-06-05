document.write ("Digite uma data em dias com horas, minutos e segundos")

const dias = Number (prompt("Digite uma quantidade de dias: "))
const horas = Number (prompt("Digite uma quantidade de horas: "))
const minutos = Number (prompt("Digite uma quantidade de minutos: "))
const segundos = Number (prompt("Digite uma quantidade de segundos: "))

const totalSegundos = dias*86400 + horas*3600 + minutos*60 + segundos

document.write (`</br> O valor em segundos é: ${totalSegundos}`)  

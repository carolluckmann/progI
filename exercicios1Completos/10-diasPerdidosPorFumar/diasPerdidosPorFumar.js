document.write ("Dias perdidos por fumar: ")

const cigarros = Number(prompt("Digite a quantidade de cigarros fumados por dia: "))
const anos = Number(prompt("Digite a quantidade de anos que você fuma: "))
const anos2 = anos * 365
const minutos = (cigarros * 10) * anos2
const horas = minutos/60
const dias = horas/24

document.write (`</br> Parabéns! Você perdeu ${dias} anos de vida!`)

//
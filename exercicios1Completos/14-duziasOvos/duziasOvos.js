document.write ("Receba o número de ovos e devolva a quantidade de dúzias correspondente.")

const ovos = Number (prompt("Digite a quantidade de ovos: "))
const total = ovos/12
const resto = ovos % 12

if (resto === 0) {
    document.write (`</br> Você possui ${Math.floor(total)} dúzias de ovos`)
}
else {
    document.write (`</br> Você possui ${Math.floor(total + 1) } dúzias de ovos`)
}
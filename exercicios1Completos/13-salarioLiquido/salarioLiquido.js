document.write ("Descubra seu salário líquido: ")

const vhora = Number (prompt("Quanto você ganha por hora em R$: "))
const vmes = Number (prompt("Total de horas que você trabalha mensalmente: "))
const vbruto = vhora * vmes
const total = vbruto - ((vbruto/100)*24)

//24 porque é o valor que temos ao somar os três descontos

document.write (`</br> Aplicando os descontos, seu salário será R$${total}`)
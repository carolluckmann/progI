document.write ("Lê um número inteiro menor que 1000 e devolve a quantidade de centenas, dezenas e unidades do mesmo. ")

const total = Number (prompt("Digite um número qualquer menor que 1000: "))
const centenas = total/100
const dezenas = total/10

document.write (`</br> ${total} Possui ${Math.floor(centenas)} centenas, ${Math.floor(dezenas)} dezenas e ${Math.floor(total)} unidades.`)
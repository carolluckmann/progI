//Recebe uma distância e a velocidade de movimentação, e retorna as horas que seriam gastas para percorrer em linha reta.

document.write ("Recebe distância e velocidade e diz quantas horas dura o percurso em linha reta")

const distancia = Number (prompt("Informe a distância desejada em km: "))
const velocidade = Number (prompt("Informe a velocidade: "))

const tempo = distancia / velocidade 

document.write (`</br> Tempo necessário para concluir o percurso: ${tempo} horas` )
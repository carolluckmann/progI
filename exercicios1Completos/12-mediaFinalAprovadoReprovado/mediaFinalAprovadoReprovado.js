document.write ("Recebe as notas das 2 provas e 2 exercícios de programação e retorna se o aluno foi ou não aprovado: ")

const prova1 = Number(prompt("Digite a nota da primeira prova: "))
const prova2 = Number (prompt("Digite a nota da segunda prova: "))
const exercicio1 = Number (prompt("Digite a nota do primeiro exercício: "))
const exercicio2 = Number (prompt("Digite a nota do segundo exercício: "))

const nota1 = (prova1 + exercicio1)/2
const nota2 = (prova2 + exercicio2)/2
const total = (nota1 + nota2)/2


if (total >=6) {
    document.write (`</br> Parabéns, você passou com ${total} de nota!`)
} else {
    document.write (`</br> Infelizmente, você reprovou com ${total} de nota!`)
} 


//if (total >=6) prompt("Parabéns! Você passou com" + total + " de nota")
//else prompt("Poxa você reprovou com " + total + "de nota")
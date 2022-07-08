//Recebe a média anual do aluno, a quantidade de faltas e o número de aulas ministradas na disciplina. Se o aluno tiver mais de 25% de faltas, está automaticamente reprovado por faltas (RF).  Se tiver média abaixo de 7.0, porém com frequência igual ou superior a 75%, está no Exame Final (EF). Se tiver média acima de 7.0 e frequência igual ou superior a 75% está aprovado (AP). Informe a situação do aluno.
const mediaAluno = parseInt (prompt(`Insira a média anual do aluno: `))
const faltasAluno = parseInt (prompt(`Insira a quantidade de faltas do aluno: `))
const aulasMinistradas = parseInt (prompt(`Insira a quantidade de aulas ministradas na disciplina: `))

const frequência = faltasAluno/aulasMinistradas * 100

if (mediaAluno < 7 && frequência <= 75) {
    alert (`Você está reprovado.`)
}
else if (mediaAluno < 7 && frequência >= 75) {
    alert (`Você está em exame`)
}
else {
    alert (`Você foi aprovado.`)
}
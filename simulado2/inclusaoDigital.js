// Você foi encarregado de realizar uma pesquisa sobre Inclusão Digital. A sua pesquisa deverá apresentar o percentual de alunos da sua escola que possuem acesso à Internet. Para isso, elabore um algoritmo que leia o número total de alunos da sua escola e o número de alunos que possuem acesso à Internet, por fim, com base nestes dados, escreva o percentual de alunos com acesso à Internet.
// Por exemplo, em uma escola com 200 alunos, apenas 50 alunos possuem acesso à Internet, o que equivale a 25% destes 200 alunos.

// entrada de dados
const alunosEscola = Number (prompt(`Insira a quantidade de alunos da sua escola: `))
const alunosInternet = Number (prompt(`Quantos desses alunos têm acesso à internet? `))
// processamento
const percentualAlunosInternet = alunosInternet / alunosEscola * 100
// saída
document.write (`O percentual de alunos com acesso à internet é: ${percentualAlunosInternet}%`)
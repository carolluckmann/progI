//Um professor instituiu o programa BB na sua disciplina. Nesse programa, um aluno com notas melhores (o big brother) “adota” um aluno com dificuldades (o little brother) e o ajuda a aprender, em troca de um incentivo em sua nota, que é dado em função de quanto ele ajudou o seu colega a melhorar o próprio resultado. Esse programa recebe a nota do little brother antes de receber ajuda, e a sua nota depois que o big brother o ajudou, e retorna o acréscimo que o big brother receberá em sua nota pela ajuda. O acréscimo é de 1/4 da diferença das notas, se for positivo.

const notaAntes = Number(
  prompt(`Insira a nota antes de receber ajuda do Big Brother:`)
);
const notaDepois = Number(
  prompt(`Insira a nota depois de receber ajuda do Big Brother:`)
);

const acrescimoBB = (notaDepois - notaAntes) / 4;

if (notaDepois > notaAntes) {
  alert(
    `Parabéns! O seu Big Brother receberá ${acrescimoBB} ponto de acréscimo na nota!`
  );
} else {
  alert(`Que pena! Seu Big Brother não te ajudou muito, não é?`);
}

//Construa um programa que leia um caractere e informe se este caractere é uma vogal.

const caractere = prompt("Insira um caractere: ")

if (caractere === `A` || caractere === `a` || caractere === `E` || caractere === `e` || caractere === `I` || caractere === `i` || caractere === `O` || caractere === `o` || caractere === `U` || caractere === `u`) {
    alert ("É uma vogal.")
}
else {
    alert ("Não é uma vogal.")
}
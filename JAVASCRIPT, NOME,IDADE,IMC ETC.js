/*
Arthur Henri luna tem 22 anos, pesa 94 kg
tem 1.87 de altura e seu IMC é 26.88095170007721
arthur henri nasceu em 2000
*/ 
const nome = 'Arthur Henrique';
const sobrenome = 'Luna';
const idade = 22;
const peso = 94; 
const alturaEmCm = 1.87;
let imc; // peso /(altura* altura)
let anoNascimento;

imc = peso / (alturaEmCm *alturaEmCm);
anoNascimento = 2022 - idade;
// template strings

console.log (nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg');
console.log ('tem',  alturaEmCm, 'de altura e seu imc é de', imc );
console.log (`${nome} nasceu em ${anoNascimento}`);
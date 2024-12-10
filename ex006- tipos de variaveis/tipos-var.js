const nome = 'guiga'; //string
const nome = "guiga"; //string
const nome = `guiga`; //string
const num = 10; // number
let nomeAluno: // undefined == nao aponta pra local nenhuma na memoria
let sobreAluno = null; // nulo == nao aponta pra local nenhum na memoria
const aprovado = false; // boolean = true, false (logico)

let a = 2;
const b = a;

console.log(a, b); // a == 2; b == 2;
a = 3 
console.log(a, b); // a== 3; b == 2; (a variavel b copiou apenas o primeiro valor do a)
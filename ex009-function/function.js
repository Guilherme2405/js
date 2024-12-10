/* 
function saudacao(nome) {
    console.log(`Boa noite ${nome}!`)
    return `Bom dia ${nome}`; //return `Bom dia ${nome}`; == retorna algo da função
} //function: salva uma determinada função

/*

saudacao ("guiga");
saudacao ("luc");
saudacao ("sai");
------------------------------------------------------------------------------------------------------
[Running] node "c:\Users\guiga\OneDrive\estudos\js\ex009-function\function.js"
Boa noite guiga!
Boa noite luc!
Boa noite sai!
-------------------------------------------------------------------------------------------------------

const variavel = saudacao("guiga");

console.log(variavel);

[Running] node "c:\Users\guiga\OneDrive\estudos\js\ex009-function\function.js"
Boa noite guiga!
Bom dia guiga

[Done] exited with code=0 in 0.061 seconds

*/

/* 
function soma(x,y) {
    const resultado = x + y;
    return resultado; // tudo abaixo de return ao e executado
}

let x = 1
let y = 2

console.log(soma(2,1))

//[Running] node "c:\Users\guiga\OneDrive\estudos\js\ex009-function\function.js"
//3

//[Done] exited with code=0 in 0.055 seconds

*/

/*
function soma(x,y) {
    const resultado = x + y;
    return resultado; // tudo abaixo de return ao e executado
}

const resultado = soma("guiga","kirin");
console.log(resultado)

/*
[Running] node "c:\Users\guiga\OneDrive\estudos\js\ex009-function\function.js"
guigakirin

[Done] exited with code=0 in 0.06 second

*/
const raiz = function (n) {
   return n ** 0.5;
}

console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))
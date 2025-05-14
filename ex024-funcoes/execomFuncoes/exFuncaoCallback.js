// função callback restoZero
// Crie uma função chamada filtrarNumerosPares que recebe dois
// parâmetros: 

// Um array de números.
// Uma função callback que decide se um número é válido para ser 
// incluído no novo array.


function filtrarNumerosPares(arrayNum, callback) {

    return arrayNum.filter(callback)
}

function restoZero(num){
    return num  % 2 === 0;
}

 const num = [1,2,3,4,5,6,7,8,9,10];
 const res = filtrarNumerosPares(num, restoZero);

 console.log(res)


 /*

 Exercício:
Crie uma função chamada executarOperacao que recebe três parâmetros:

Dois números (número1 e número2).
Uma função callback que define a operação a ser realizada entre esses dois números.

A função executarOperacao deve aplicar a operação fornecida pela função callback nos dois números e retornar o resultado.

 */

function mostraResultado(resultado) {
    console.log('resultado da conta foi: ' + resultado)
}

function somaConta(num1,num2,callback) {
    const res = num1 + num2;
    callback(res)
}

somaConta(4,3,mostraResultado)



function mostraIMC(indiceT) {
    console.log(indiceT)
}

function condicaoIMC(imc,callbackDois){
 console.log('seu imc e de: ' + imc)
 
 if (imc < 18.5) {
    let indice = ("magreza");
    return callbackDois(indice);
} else if (imc >= 18.5 && imc < 24.9) {
    let indice = ("Peso normal");
    return callbackDois(indice);
} else if (imc >= 25.0 && imc < 29.9) {
    let indice = ("Sobrepeso");
    return callbackDois(indice);
} else if (imc >= 30.0 && imc < 34.9) {
    const indice = ("Obesidade grau 1");
    return callbackDois(indice);
} else if (imc >= 35.0 && imc < 39.9) {
    let indice = ("Obesidade grau 2");
    return callbackDois(indice);
} else {
    let indice = ("Obesidade grau 3 (obesidade mórbida)");
    return callbackDois(indice);
}



}

function calculaIMC(callbackUm){
const peso = 98;
const altura = 1.8;
const rimC = peso / (altura * altura);
const imC = rimC.toFixed(1)
return callbackUm(imC, mostraIMC);
}

calculaIMC(condicaoIMC)






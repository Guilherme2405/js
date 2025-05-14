function funcao() {
    /*

    console.log(arguments); //  (arguments) == mostras meus arguentos, mesmo que nao declarados na função (parametros digitados)

    console.log(arguments[8]); // e possivel puxar numero do argumento mesmo sem parametros
    */

   let total = 0;
   for (let argumento of arguments) {
    total += argumento; // ira somar os argumentos
   };
   console.log(total);

   /*
   essa execução da variavel especial (arguments) so funciona em funções declaradas com function;

   */
}
funcao(0,1,2,3,4,5,6,7,8,9);


function funcaoDois(a,b,c,d,e,f,g) {
console.log(a,b,c,d,e,f,g) // so ira exibir os parametros que foram digitados como argumento
}
funcaoDois(2,4,8);

function funcaoTres(a, b, c=7) { //e possivel colocar um valor fixo no proprio paramentro
     b = b || 0 // declara valor de b para 'b' ou 0
    console.log(a + b + c) // ira dar NaN por falta da digitação do argumento
}
funcaoTres(7, undefined, 9); //undefined == para usar o valor de referencia do proprio parametro(que no caso seria b) da função (que no caso e 0)

function funcaoQuatro({nome, sobrenome,idade}){
    console.log(nome,sobrenome,idade)
}
// funcaoQuatro({nome:'guiga',sobrenome:'kirin',idade:'21 anos'})

let obj = {nome:'guiga',sobrenome:'kirin',idade:'21 anos'}
funcaoQuatro(obj)

function funcaoCinco([valor1, valor2,valor3]){
    console.log(valor1,valor2,valor3);
}
// funcaoQuatro({nome:'guiga',sobrenome:'kirin',idade:'21 anos'})

// let obj = {nome:'guiga',sobrenome:'kirin',idade:'21 anos'}
funcaoCinco(['guiga to', 'kirin', 23])


function conta(operador, acumulador, ...numeros) { 
// '...' rest parameter == recebe os restos dos argumentos
for(let numero of numeros) {
    if (operador === '+')acumulador += numero;
    if (operador === '-')acumulador -= numero;
    if (operador === '*')acumulador *= numero;
    if (operador === '/')acumulador /= numero;
    
}
console.log(acumulador)

/*
const conta = function(operador, acumulador, ...numeros) === tambem e possivel usar (arguments) para verificar meus argumentos, o que nao daria para fazer se fosse uma function arrow
*/

}
conta('+', 0, 10,20,30,40) // com '...' posso eliminar o array
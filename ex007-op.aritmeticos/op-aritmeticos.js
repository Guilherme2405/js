/*
    +   == adição ou concatenação (concatenação e somas de string)
    -   == subtração
    *   == multiplicação
    /   == divisão
    **  == potenciação
    %   == resto da divisão 
    ++  == atribuição  de incremento que aumenta 1
    --  == atribuição  de incremento que diminui 1
*/

/*
 -- contador que aumenta de 1 em 1 --
const passo = 2;
let contador = 1;

contador = contador + passo;
console.log(contador);

[Running] node "c:\Users\guiga\OneDrive\estudos\js\wx007-op.aritmeticos\op-aritmeticos.js"
3

[Done] exited with code=0 in 0.063 seconds
*/

/*
-- posso tambem mudar os operadores --
let contador = 0;
contador += 2;
contador += 2;
contador += 2;
console.log(contador);

[Running] node "c:\Users\guiga\OneDrive\estudos\js\wx007-op.aritmeticos\op-aritmeticos.js"
6

[Done] exited with code=0 in 0.058 seconds
*/

const num1 = 10;
const num2 = parseInt('3') //parseInt (inteiro); parseFloat(decimais);
console.log(num1 * num2)
/* ira dar esse erro --Nan-- == not a number */